/** @format */

"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";

const DownloadSections = () => {
  return (
    <section
      id="download"
      className="bg-background py-16 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <MotionReveal>
          <SectionHeading
            title="Download TACPLAY & Start Competing Today"
            description="Discover paintball fields, book sessions instantly, compete in ranked matches, and track your performance — all in one powerful platform."
            className="text-center"
            descriptionClassName="mx-auto"
          />
        </MotionReveal>

        {/* App Store Buttons */}
        <MotionReveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* App Store */}
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/20"
            >
              {/* Apple Icon SVG */}
              <svg
                className="h-7 w-7 flex-shrink-0 fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none text-white/60">
                  Download on the
                </div>
                <div className="mt-0.5 text-sm font-semibold leading-none text-white">
                  App Store
                </div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/20"
            >
              {/* Google Play Icon SVG */}
              <svg
                className="h-7 w-7 flex-shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18 23.76c.37.2.8.2 1.19 0l11.6-6.71-2.5-2.5-10.29 9.21z"
                  fill="#EA4335"
                />
                <path
                  d="M22.16 10.39L19.5 8.87l-2.73 2.73 2.73 2.73 2.69-1.54a1.5 1.5 0 000-2.4z"
                  fill="#FBBC04"
                />
                <path
                  d="M2.05 1.24A1.5 1.5 0 002 1.8v20.4c0 .19.02.38.07.55L13.43 12 2.05 1.24z"
                  fill="#4285F4"
                />
                <path
                  d="M13.43 12L4.37.24C4 .04 3.56.05 3.18.24L13.43 12l2.36-2.36-2.36-2.36V12z"
                  fill="#34A853"
                />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none text-white/60">
                  Get it on
                </div>
                <div className="mt-0.5 text-sm font-semibold leading-none text-white">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </MotionReveal>

        {/* Phone Mockup Image */}
        <MotionReveal>
          <div className="relative mt-14 flex justify-center">
            {/*
              Glow behind the phones
              Uses a radial red glow matching the dark/red theme in the design
            */}
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-[300px] w-[70%] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(120,0,0,0.35) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            {/* decorative bottom curve under the phone mockup */}
            <div className="relative w-full max-w-[320px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]">
              <Image
                src="/images/download.svg"
                alt="TACPLAY app screens — map, dashboard, and settings"
                width={1000}
                height={1200}
                priority
                className="relative z-10 w-full object-contain drop-shadow-2xl"
              />

              
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default DownloadSections;
