import Image from "next/image";
import CirclesAnimation from "../circles-animation";
import { PageLinks } from "../page-links";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <div className="relative flex w-full bg-primaryDark p-10">
      <CirclesAnimation />
      <div className="flex w-full max-w-section flex-col items-center gap-6">
        <Image
          src="/images/logo_white.png"
          className="w-40"
          width={488}
          height={192}
          alt="logo"
        />
        <PageLinks className="flex justify-center gap-5 text-base font-medium text-white sm:gap-10" />
        <div className="flex justify-center gap-6">
          <div className="rounded-full bg-white p-2">
            <Facebook className="h-4 w-4 fill-primary text-primary" />
          </div>

          <div className="rounded-full bg-white p-2">
            <Linkedin className="h-4 w-4 fill-primary text-primary" />
          </div>
          <div className="rounded-full bg-white p-2">
            <Twitter className="h-4 w-4 fill-primary text-primary" />
          </div>
        </div>
        <p className="text-muted">2025 © Aion. All rights reserved.</p>
      </div>
    </div>
  );
};
