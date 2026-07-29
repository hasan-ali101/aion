import type { BookableService } from "@/lib/data/booking-services";

interface ServiceSummaryProps {
  service: BookableService;
}

export function ServiceSummary({ service }: ServiceSummaryProps) {
  return (
    <div className="rounded-2xl border border-muted bg-beige/40 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-accentTeal">Booking</p>
      <h3 className="mt-1 font-heading text-lg font-semibold text-primaryDark">{service.name}</h3>
      <p className="mt-1 text-sm text-black/70">
        {service.practitionerName} · {service.durationMinutes} minutes
      </p>
      <p className="mt-2 text-lg font-semibold text-primary">£{service.priceGbp}</p>
    </div>
  );
}
