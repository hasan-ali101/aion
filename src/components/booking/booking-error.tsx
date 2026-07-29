interface BookingErrorProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function BookingError({ message, actionLabel, onAction }: BookingErrorProps) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      <p>{message}</p>
      {onAction && actionLabel && (
        <button type="button" onClick={onAction} className="mt-2 font-medium underline">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
