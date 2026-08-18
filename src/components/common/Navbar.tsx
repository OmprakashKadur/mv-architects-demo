"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { studioInfo } from "@/content/studio";

const navLinks = [
  { href: "/projects", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bone)]/90 backdrop-blur-md border-b border-[var(--color-stone)]/15 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Studio Brand Monogram & Title */}
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 text-[var(--color-charcoal)] focus:outline-none"
        >
          <span className="font-serif text-2xl font-bold tracking-tight uppercase group-hover:text-[var(--color-clay)] transition-colors">
            MV
          </span>
          <span className="text-xs font-mono tracking-widest text-[var(--color-stone)] uppercase border-l border-[var(--color-stone)]/40 pl-2.5 hidden sm:inline-block">
            Architects & Interiors
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase font-mono">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/projects"
                ? pathname.startsWith("/projects")
                : link.href === "/blog"
                ? pathname.startsWith("/blog")
                : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[var(--color-clay)] ${
                  isActive
                    ? "text-[var(--color-clay)] font-semibold"
                    : "text-[var(--color-charcoal)]/80"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-clay)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${studioInfo.contact.phoneFormatted}`}
            className="flex items-center gap-1.5 text-xs font-mono uppercase text-[var(--color-charcoal)]/70 hover:text-[var(--color-charcoal)] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--color-brass)]" />
            <span>{studioInfo.contact.phone}</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-charcoal)] text-[var(--color-bone)] text-xs font-mono uppercase tracking-widest hover:bg-[var(--color-clay)] transition-colors radius-arch group"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[var(--color-charcoal)] hover:text-[var(--color-clay)] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-bone)] border-b border-[var(--color-stone)]/20 px-6 py-8 shadow-xl">
          <nav className="flex flex-col gap-6 text-base tracking-widest uppercase font-mono">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-charcoal)] hover:text-[var(--color-clay)] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[var(--color-stone)]/20 flex flex-col gap-4">
              <a
                href={studioInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[var(--color-clay)]"
              >
                Direct WhatsApp →
              </a>
              <Link
                href="/contact"
                className="w-full text-center py-3 bg-[var(--color-clay)] text-[var(--color-bone)] font-mono text-xs uppercase tracking-widest radius-arch"
              >
                Start Your Project
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
