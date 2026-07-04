import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TbBrandInstagram,
  TbBrandX,
  TbBrandFacebook,
  TbBrandLinkedin,
  TbMapPin,
  TbMail,
  TbPhone,
} from "react-icons/tb";
import { BRAND_NAME } from "@/constant/constant";

const FOOTER_LINKS = {
  Company: ["About Us", "Careers", "Press Kit", "Gift Cards", "Magazine"],
  Support: ["Help Center", "Legal Notice", "Privacy Policy", "Terms & Conditions", "Sitemap"],
  Explore: ["Car Hire", "Activity Finder", "Tour Packages", "Flight Deals", "Travel Agents"],
};

const SOCIALS = [
  { icon: TbBrandInstagram, label: "Instagram", href: "#" },
  { icon: TbBrandX, label: "X (Twitter)", href: "#" },
  { icon: TbBrandFacebook, label: "Facebook", href: "#" },
  { icon: TbBrandLinkedin, label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
      }}
      aria-label={`${BRAND_NAME} footer`}
    >
      <div className="container-voya py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt={BRAND_NAME} width={32} height={32} className="w-8 h-8 object-contain" />
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
              >
                {BRAND_NAME}
              </h3>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs sm:max-w-md lg:max-w-xs"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Your premium travel companion. Discover curated destinations,
              handpicked hotels, and unforgettable tours &mdash; crafted for the
              modern explorer.
            </p>

            <div className="space-y-2.5">
              <a
                href="tel:+0123456788"
                className="flex items-center gap-2.5 text-sm transition-all duration-200 hover:text-[var(--color-accent)] hover:translate-x-0.5"
                style={{ color: "var(--color-text-secondary)" }}
                aria-label="Call us: +012 345 6788"
              >
                <TbPhone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                +012 345 6788
              </a>
              <a
                href="mailto:hello@voya.com"
                className="flex items-center gap-2.5 text-sm transition-all duration-200 hover:text-[var(--color-accent)] hover:translate-x-0.5"
                style={{ color: "var(--color-text-secondary)" }}
                aria-label="Email us"
              >
                <TbMail className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                hello@voyatravel.com
              </a>
              <p
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <TbMapPin className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                London, United Kingdom
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:text-[var(--color-accent)] hover:scale-110"
                  style={{
                    background: "var(--color-bg-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                    borderRadius: "var(--radius-md)",
                  }}
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-xs font-semibold mb-5 uppercase tracking-widest"
                style={{ color: "var(--color-text-primary)" }}
              >
                {category}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm transition-all duration-200 hover:text-[var(--color-accent)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-full after:bg-[var(--color-accent)]"
                      style={{ color: "var(--color-text-secondary)" }}
                      aria-label={link}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="container-voya py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-center sm:text-left"
            style={{ color: "var(--color-text-muted)" }}
          >
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div
            className="flex items-center gap-4 text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Link href="#" className="hover:text-[var(--color-accent)] hover:translate-x-0.5 transition-all duration-200">
              Privacy
            </Link>
            <span>&middot;</span>
            <Link href="#" className="hover:text-[var(--color-accent)] hover:translate-x-0.5 transition-all duration-200">
              Terms
            </Link>
            <span>&middot;</span>
            <Link href="#" className="hover:text-[var(--color-accent)] hover:translate-x-0.5 transition-all duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
