export type AvatarConfig = {
  skin: string;
  hair: string;
  hairStyle: string;
  shirt: string;
};

export const Avatar = ({
  config,
  size = 52,
}: {
  config: AvatarConfig;
  size?: number;
}) => {
  const { skin, hair, hairStyle, shirt } = config;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="26" cy="26" r="26" fill={shirt} opacity="0.25" />
      <ellipse cx="26" cy="46" rx="16" ry="10" fill={shirt} />
      <rect x="22" y="34" width="8" height="7" rx="2" fill={skin} />

      {/* Background hair (renders behind face) */}
      {hairStyle === "afro" && (
        <circle cx="26" cy="19" r="14" fill={hair} />
      )}
      {hairStyle === "curly" && (
        <>
          <circle cx="26" cy="13" r="5" fill={hair} />
          <circle cx="17" cy="16" r="4.5" fill={hair} />
          <circle cx="35" cy="16" r="4.5" fill={hair} />
          <circle cx="20" cy="12" r="4" fill={hair} />
          <circle cx="32" cy="12" r="4" fill={hair} />
        </>
      )}
      {hairStyle === "ponytail" && (
        <rect x="23" y="20" width="6" height="18" rx="3" fill={hair} />
      )}

      <ellipse cx="26" cy="26" rx="11" ry="12" fill={skin} />

      {/* Foreground hair (renders on top of face) */}
      {hairStyle === "long" && (
        <>
          <ellipse cx="26" cy="17" rx="11" ry="6" fill={hair} />
          <rect x="15" y="17" width="4" height="16" rx="2" fill={hair} />
          <rect x="33" y="17" width="4" height="16" rx="2" fill={hair} />
        </>
      )}
      {hairStyle === "short-m" && (
        <ellipse cx="26" cy="17" rx="11" ry="5.5" fill={hair} />
      )}
      {hairStyle === "mid-m" && (
        <>
          <ellipse cx="26" cy="17" rx="11" ry="5.5" fill={hair} />
          <rect x="15" y="17" width="4" height="7" rx="2" fill={hair} />
          <rect x="33" y="17" width="4" height="7" rx="2" fill={hair} />
        </>
      )}
      {hairStyle === "bob" && (
        <>
          <ellipse cx="26" cy="17" rx="11" ry="6" fill={hair} />
          <rect x="15" y="17" width="4" height="10" rx="2" fill={hair} />
          <rect x="33" y="17" width="4" height="10" rx="2" fill={hair} />
        </>
      )}
      {hairStyle === "bun" && (
        <>
          <ellipse cx="26" cy="17" rx="11" ry="5.5" fill={hair} />
          <circle cx="26" cy="11" r="4" fill={hair} />
        </>
      )}
      {hairStyle === "ponytail" && (
        <ellipse cx="26" cy="17" rx="11" ry="5.5" fill={hair} />
      )}
      {/* bald: render nothing */}

      <circle cx="21.5" cy="26" r="1.4" fill="#1C1C1C" />
      <circle cx="30.5" cy="26" r="1.4" fill="#1C1C1C" />
      <path
        d="M22 31 Q26 34 30 31"
        stroke="#8B6355"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};