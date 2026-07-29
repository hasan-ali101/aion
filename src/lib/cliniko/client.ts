function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function baseUrl(): string {
  return `https://api.${getEnv("CLINIKO_SHARD")}.cliniko.com/v1`;
}

function authHeader(): string {
  const token = Buffer.from(`${getEnv("CLINIKO_API_KEY")}:`).toString("base64");
  return `Basic ${token}`;
}

export type ClinikoErrorCode =
  | "NOT_FOUND"
  | "VALIDATION"
  | "RATE_LIMITED"
  | "SERVER_ERROR"
  | "UNKNOWN";

export class ClinikoApiError extends Error {
  status: number;
  code: ClinikoErrorCode;
  details?: unknown;

  constructor(message: string, status: number, code: ClinikoErrorCode, details?: unknown) {
    super(message);
    this.name = "ClinikoApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

function errorCodeForStatus(status: number): ClinikoErrorCode {
  if (status === 404) return "NOT_FOUND";
  if (status === 422) return "VALIDATION";
  if (status === 429) return "RATE_LIMITED";
  if (status >= 500) return "SERVER_ERROR";
  return "UNKNOWN";
}

interface ClinikoRequestOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH";
  query?: Record<string, string | string[] | undefined>;
  body?: unknown;
}

export async function clinikoRequest<T>(
  path: string,
  options: ClinikoRequestOptions = {},
): Promise<T> {
  const url = new URL(`${baseUrl()}${path}`);

  for (const [key, value] of Object.entries(options.query ?? {})) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) url.searchParams.append(key, v);
    } else {
      url.searchParams.append(key, value);
    }
  }

  const response = await fetch(url.toString(), {
    method: options.method ?? "GET",
    headers: {
      Authorization: authHeader(),
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": `Aion Clinic Booking (${getEnv("CLINIKO_USER_AGENT_EMAIL")})`,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : undefined;

  if (!response.ok) {
    const message =
      (data && (data.message || data.error)) || `Cliniko request failed with status ${response.status}`;
    throw new ClinikoApiError(message, response.status, errorCodeForStatus(response.status), data);
  }

  return data as T;
}

/** Builds a Cliniko `q[]` filter string, e.g. filter("date_of_birth", "=", "1990-01-01"). */
export function filter(field: string, operator: string, value: string): string {
  return `${field}:${operator}${value}`;
}

/** Extracts the trailing numeric ID from a Cliniko resource self-link. */
export function idFromLink(selfLink: string): string {
  return selfLink.split("/").filter(Boolean).pop() ?? "";
}
