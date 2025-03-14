import Link from "next/link";
import { SheetClose } from "./sheet";
import { cn } from "@/utils";

export const PageLinks = ({
  className,
  sidebar,
  isTop,
  includeScience = false,
}: {
  className?: string;
  sidebar?: boolean;
  isTop?: boolean;
  includeScience?: boolean;
}) => {
  const links = [
    { href: "#what", label: "What" },
    { href: "#who", label: "Who" },
    { href: "#how", label: "How" },
    { href: "#where", label: "Where" },
    { href: "#us", label: "Us" },
  ];

  if (includeScience) {
    links.push({ href: "/science", label: "Science" });
  }

  return (
    <div
      className={cn(
        "h-full w-full items-center justify-end gap-10 text-sm font-medium",
        className,
      )}
    >
      {links.map(({ href, label }) =>
        sidebar ? (
          <SheetClose asChild key={href}>
            <Link className="py-1 transition-colors" href={href}>
              {label}
            </Link>
          </SheetClose>
        ) : (
          <Link
            key={href}
            className={cn(
              isTop ? "hover:bg-white/20" : "hover:bg-muted/40",
              "py-1 transition-colors",
            )}
            href={href}
          >
            {label}
          </Link>
        ),
      )}
    </div>
  );
};
