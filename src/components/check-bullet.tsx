import { CircleCheckBig } from "lucide-react";

import { cn } from "@/utils";

export const CheckBullet = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn(className, "flex items-center gap-2")}>
    <CircleCheckBig className="h-4 min-h-4 w-4 min-w-4" />
    <p>{children}</p>
  </div>
);
