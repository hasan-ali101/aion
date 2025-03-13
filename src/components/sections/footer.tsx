import Image from "next/image";
import CirclesAnimation from "../circles-animation";
import { PageLinks } from "../page-links";
import { Clock, Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative flex w-full justify-center bg-primaryDark p-10">
      <CirclesAnimation />
      <div className="flex w-full max-w-section flex-col items-center gap-6">
        <Link href="/">
          <Image
            src="/images/logo_white.png"
            className="w-40"
            width={488}
            height={192}
            alt="logo"
          />
        </Link>
        <PageLinks className="flex justify-center gap-5 text-base font-medium text-white sm:gap-10" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary p-1">
              <Clock className="h-3 w-3" />
            </div>
            <p className="text-sm text-white"> Sat - Sun: 10:00 - 17:00</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary p-1">
              <Mail className="h-3 w-3" />
            </div>
            <p className="text-sm text-white"> info@aion-clinic.com</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary p-1">
              <Phone className="h-3 w-3" />
            </div>
            <p className="text-sm text-white">0800 000 0000</p>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/people/Aion-Clinic/61573653433247/"
            target="_blank"
            className="rounded-full bg-white p-2"
          >
            <Facebook className="h-4 w-4 fill-primary text-primary" />
          </a>

          <a
            href="https://www.linkedin.com/company/aion-clinic/about/"
            target="_blank"
            className="rounded-full bg-white p-2"
          >
            <Linkedin className="h-4 w-4 fill-primary text-primary" />
          </a>
          <a
            href="https://www.instagram.com/aion_clinic/"
            target="_blank"
            className="rounded-full bg-white p-2"
          >
            <Twitter className="h-4 w-4 fill-primary text-primary" />
          </a>
        </div>
        <p className="text-muted">2025 © Aion. All rights reserved.</p>
      </div>
    </div>
  );
};
