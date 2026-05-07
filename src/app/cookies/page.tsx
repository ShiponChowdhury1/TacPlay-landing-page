/** @format */

"use client";

import Link from "next/link";
import React, { useState } from "react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieSettings = () => {
  const [cookies, setCookies] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key !== "necessary") {
      setCookies((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  const handleSave = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookies));
    alert("Cookie preferences saved successfully!");
  };

  const handleRejectAll = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookies(preferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    alert("Cookie preferences updated!");
  };

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookies(preferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    alert("All cookies accepted!");
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:text-primary/80 mb-6 inline-block">
            ← Back
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="text-secondary">Last Updated: 1st May 2026</p>
          <p className="mt-2 text-secondary">Company: TACPLAY EUROPE S.L.</p>
          <p className="text-secondary">Website/App: www.tacplay.eu</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">1. INTRODUCTION</h2>
            <p>
              This Cookie Policy explains how TACPLAY (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar technologies when you use our Platform.
            </p>
            <p className="mt-4">We comply with:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>General Data Protection Regulation</li>
              <li>ePrivacy Directive</li>
            </ul>
            <p className="mt-4">By continuing to use TACPLAY, you will be asked to consent to the use of cookies as described in this Policy.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">2. WHAT ARE COOKIES?</h2>
            <p>Cookies are small text files stored on your device when you visit a website or use an app.</p>
            <p className="mt-4">They help us:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Ensure the Platform works correctly</li>
              <li>Improve user experience</li>
              <li>Analyse performance</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">3. TYPES OF COOKIES WE USE</h2>

            <div className="space-y-5">
              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">3.1 Strictly Necessary Cookies (No Consent Required)</h3>
                <p>These cookies are essential for the Platform to function.</p>
                <p className="mt-4">They include:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Login/authentication</li>
                  <li>Booking session management</li>
                  <li>Security and fraud prevention</li>
                </ul>
                <p className="mt-4">Without these cookies, TACPLAY cannot operate properly.</p>
              </div>

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">3.2 Performance & Analytics Cookies (Consent Required)</h3>
                <p>Used to understand how users interact with TACPLAY.</p>
                <p className="mt-4">Examples:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Page views and navigation behaviour</li>
                  <li>Feature usage (e.g., bookings, teams, rankings)</li>
                  <li>Error tracking</li>
                </ul>
                <p className="mt-4">We may use tools such as:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Mixpanel</li>
                </ul>
              </div>

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">3.3 Functional Cookies (Consent Required)</h3>
                <p>These enhance your experience:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Remembering preferences</li>
                  <li>Language settings</li>
                  <li>Saved filters (e.g., preferred fields or game types)</li>
                </ul>
              </div>

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">3.4 Payment & Security Cookies (Strictly Necessary)</h3>
                <p>Used during transactions:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Fraud detection</li>
                  <li>Payment session validation</li>
                </ul>
                <p className="mt-4">Payments are processed via:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Stripe</li>
                </ul>
              </div>

              <div className="rounded-lg border border-background/60 bg-background/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">3.5 Marketing Cookies (Consent Required)</h3>
                <p>(Only if implemented later)</p>
                <p className="mt-4">Used to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Deliver relevant ads</li>
                  <li>Track campaign performance</li>
                </ul>
                <p className="mt-4">These will only be activated with your explicit consent.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">4. HOW WE USE COOKIES</h2>
            <p>We use cookies to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Enable bookings and secure login</li>
              <li>Improve platform performance</li>
              <li>Analyse user behaviour</li>
              <li>Personalise your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">5. LEGAL BASIS FOR COOKIES</h2>
            <p>Under EU law:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Strictly necessary cookies &rarr; do not require consent</li>
              <li>All other cookies &rarr; require your prior consent</li>
            </ul>
            <p className="mt-4">You can withdraw consent at any time.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">6. COOKIE RETENTION</h2>
            <p>Cookies are stored for different durations:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Session cookies &rarr; deleted when you close your browser</li>
              <li>Persistent cookies &rarr; stored for a defined period (e.g., 30–365 days)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">7. MANAGING YOUR COOKIE PREFERENCES</h2>
            <p>You can manage cookies by:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Using our cookie banner/settings tool</li>
              <li>Adjusting browser settings</li>
              <li>Deleting cookies manually</li>
            </ul>
            <p className="mt-4">Note: Disabling essential cookies may affect functionality.</p>

            <div className="mt-8 space-y-6 rounded-lg border border-background/60 bg-background/40 p-6">
              <h3 className="text-lg font-semibold text-white">Cookie Preferences</h3>

              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-background/60 bg-black/20">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Strictly Necessary</h4>
                      <p className="text-sm text-secondary">Required for login, booking sessions, and platform security.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookies.necessary}
                      disabled
                      className="w-6 h-6 accent-primary cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-background/60 bg-black/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Performance & Analytics</h4>
                      <p className="text-sm text-secondary">Helps us understand page usage, feature interactions, and errors.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookies.analytics}
                      onChange={() => handleToggle("analytics")}
                      className="w-6 h-6 accent-primary cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-background/60 bg-black/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Functional</h4>
                      <p className="text-sm text-secondary">Remembers preferences, language settings, and saved filters.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookies.preferences}
                      onChange={() => handleToggle("preferences")}
                      className="w-6 h-6 accent-primary cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-background/60 bg-black/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Marketing</h4>
                      <p className="text-sm text-secondary">Only enabled later if marketing tools are implemented.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookies.marketing}
                      onChange={() => handleToggle("marketing")}
                      className="w-6 h-6 accent-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <section className="flex flex-col gap-4 pt-4 border-t border-background/60 sm:flex-row">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 rounded-lg border border-secondary px-6 py-3 text-secondary transition-colors hover:border-primary hover:text-primary"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-colors hover:bg-primary/90"
                >
                  Accept All
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Save Preferences
                </button>
              </section>
            </div>
          </section>

          <section className="space-y-4 text-secondary pt-8 border-t border-background/60">
            <h2 className="text-2xl font-bold text-white">8. THIRD-PARTY COOKIES</h2>
            <p>Some cookies are set by third parties, including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Stripe</li>
              <li>Mixpanel</li>
            </ul>
            <p className="mt-4">These providers process data in accordance with their own privacy policies.</p>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Privacy & GDPR</h3>
              <p>
                TACPLAY complies with GDPR and ePrivacy regulations. We only store non-essential cookies with your explicit consent. For more details, see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          <section className="space-y-4 text-secondary pt-8 border-t border-background/60">
            <h2 className="text-2xl font-bold text-white">9. CHANGES TO THIS POLICY</h2>
            <p>We may update this Cookie Policy periodically.</p>
            <p className="mt-4">Changes will be communicated via:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Website/app notification</li>
              <li>Updated &ldquo;Last Updated&rdquo; date</li>
            </ul>
          </section>

          <section className="space-y-4 text-secondary pt-8 border-t border-background/60">
            <h2 className="text-2xl font-bold text-white">10. CONTACT</h2>
            <p>For questions about cookies:</p>
            <div className="rounded-lg border border-background/60 bg-background/40 p-6">
              <p>
                Email: <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">info@tacplay.eu</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookieSettings;
