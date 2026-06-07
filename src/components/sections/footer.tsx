import { useEffect } from "react";
import Image from "next/image";
import CirclesAnimation from "../circles-animation";
import { PageLinks } from "../page-links";
import {
  Clock,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const Footer = () => {
  return (
    <footer className="relative flex w-full flex-col items-center bg-gradient-to-t from-primaryDark to-primaryDark/85">
      <CirclesAnimation />
      <div className="flex w-full max-w-section flex-col items-center gap-6 py-16">
        <Link href="/">
          <Image
            src="/images/logo_white.png"
            className="w-40"
            width={488}
            height={192}
            alt="logo"
          />
        </Link>
        <PageLinks
          includeScience={true}
          className="flex justify-center gap-5 text-base font-medium text-white sm:gap-10"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary p-1">
              <Clock className="h-3 w-3" />
            </div>
            <p className="text-xs text-white sm:text-sm">
              {" "}
              Sat - Sun: 10:00 - 17:00
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary p-1">
              <Mail className="h-3 w-3" />
            </div>
            <p className="text-xs text-white sm:text-sm">
              {" "}
              support@aion-clinic.com
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary p-1">
              <Phone className="h-3 w-3" />
            </div>
            <p className="text-xs text-white sm:text-sm">07856 128934</p>
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
            <Instagram className="h-4 w-4 fill-primary text-primary" />
          </a>
          <a
            href="https://www.youtube.com/@AionClinic"
            target="_blank"
            className="rounded-full bg-white p-2"
          >
            <svg className="h-4 w-4 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
        <p className="text-muted">2025 © Aion. All rights reserved.</p>
      </div>
      {/*   <div id="0shzf4xf" className="w-screen opacity-90"></div>
      <Script src="https://www.doctify.com/get-script?widget_container_id=0shzf4xf&type=horizontal-widget&tenant=athena-uk&language=en&profileType=practice&layoutType=layoutXL&slugs=aion-clinic&background=000"></Script>
   */}
    </footer>
  );
};
