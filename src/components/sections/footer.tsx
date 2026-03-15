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
        <Link href="<https://www.aion-clinic.com">
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
        </div>
        <p className="text-muted">2025 © Aion. All rights reserved.</p>
      </div>
      {/*   <div id="0shzf4xf" className="w-screen opacity-90"></div>
      <Script src="https://www.doctify.com/get-script?widget_container_id=0shzf4xf&type=horizontal-widget&tenant=athena-uk&language=en&profileType=practice&layoutType=layoutXL&slugs=aion-clinic&background=000"></Script>
   */}
    </footer>
  );
};
