/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    // treat anchor links as active when on root path
    if (!pathname) return false;
    if (href.startsWith("/#")) {
      // During SSR `window` is not available; only mark anchor active when
      // currently on the root path. Client-side the hash may be different,
      // but this avoids referencing `window` during build.
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-background/80 bg-transparent! backdrop-blur-sm">
      <div className="mx-auto flex h-14 md:h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/Tacplay-logo-2.png"
            alt="Tacplay logo"
            width={320}
            height={320}
            priority
            className="h-12 w-28 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-2 rounded-full  px-2 py-1 shadow-[0_0_0_1px_rgba(141,117,89,0.12)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-[15px] transition-colors duration-200 ${
                isActiveLink(item.href)
                  ? "text-button-bg"
                  : "text-secondary hover:text-secondary/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 md:flex gap-2">
          <Button
            asChild
            className="h-10 rounded-lg bg-gray-900 border border-gray-500 px-6 text-base font-bold text-white shadow-[0_8px_18px_rgba(175,141,78,0.28)] hover:bg-[#9f8046]!"
          >
            <Link href="https://fields.tacplay.eu/sign-in?redirect=%2F">Login</Link>
          </Button>
          <Button
            asChild
            className="h-10 rounded-lg bg-button-bg px-6 text-base font-bold text-black shadow-[0_8px_18px_rgba(175,141,78,0.28)] hover:bg-[#9f8046]!"
          >
            <Link href="https://fields.tacplay.eu/sign-up">Owner Registration</Link>
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full text-primary hover:bg-white/60 md:hidden"
              aria-label="Open navigation menu"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className="top-19 left-4 right-4 w-auto translate-x-0 translate-y-0 gap-0 rounded-[24px] border border-[#ddcfba] bg-background p-3 shadow-[0_20px_40px_rgba(45,39,35,0.14)] sm:left-auto sm:right-6 sm:w-90"
          >
            <DialogTitle className="sr-only">Navigation menu</DialogTitle>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-2xl px-4 py-2 text-[15px] font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? "bg-white/30 text-button-bg shadow-sm"
                      : "text-primary hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                asChild
                className="mt-2 h-10 rounded-2xl bg-gray-700 border border-gray-600 text-[15px] font-medium text-white hover:bg-gray-600"
              >
                <Link href="https://fields.tacplay.eu/sign-in?redirect=%2F">Login</Link>
              </Button>
              <Button
                asChild
                className="mt-2 h-10 rounded-2xl bg-button-bg text-[15px] font-medium text-black! hover:bg-[#9f8046]"
              >
                <Link href="https://fields.tacplay.eu/sign-up">Owner Registration</Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default NavBar;
