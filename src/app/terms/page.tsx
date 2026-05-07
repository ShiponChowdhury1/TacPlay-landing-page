/** @format */

import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:text-primary/80 mb-6 inline-block">
            ← Back
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">Terms and Conditions</h1>
          <p className="text-secondary">Last Updated: 1st May 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">1. INTRODUCTION</h2>
            <p>Welcome to TACPLAY.</p>
            <p className="mt-4">
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the TACPLAY website, mobile application, and related services (collectively, the &ldquo;Platform&rdquo;).
            </p>
            <p className="mt-4">
              By accessing or using TACPLAY, you agree to be legally bound by these Terms. If you do not agree, you must not use the Platform.
            </p>
            <p className="mt-4">
              TACPLAY is a digital platform that connects players, teams, and paintball/airsoft field operators (&ldquo;Field Owners&rdquo;), enabling booking, participation, and management of games and events.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">2. DEFINITIONS</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Platform: TACPLAY website and mobile app</li>
              <li>User: Any registered or unregistered person using the Platform</li>
              <li>Player: Individual booking or joining games</li>
              <li>Field Owner: Business or individual managing a field/arena</li>
              <li>Game Slot: A scheduled session with limited player capacity</li>
              <li>Booking: Reservation of a place in a game slot</li>
              <li>Team: Group of players booking together</li>
              <li>Premium Membership: Paid subscription unlocking additional features</li>
              <li>Commission: Percentage fee charged by TACPLAY on certain bookings</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">3. ELIGIBILITY</h2>
            <p>You must:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Be at least 18 years old, or</li>
              <li>Be at least 16 with parental/guardian consent</li>
            </ul>
            <p className="mt-4">By using TACPLAY, you confirm that:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>All information provided is accurate</li>
              <li>You are legally able to enter into binding contracts</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">4. ACCOUNT REGISTRATION</h2>
            <p>Users must create an account to access key features.</p>
            <p className="mt-4">You agree to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Maintain accurate account information</li>
              <li>Keep login credentials secure</li>
              <li>Be responsible for all activity under your account</li>
            </ul>
            <p className="mt-4">TACPLAY reserves the right to suspend or terminate accounts for misuse.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">5. PLATFORM ROLE</h2>
            <p>TACPLAY acts as:</p>
            <p className="mt-4">An intermediary platform (marketplace) connecting Players and Field Owners.</p>
            <p className="mt-4">TACPLAY:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Does NOT own or operate fields</li>
              <li>Does NOT organise games directly</li>
              <li>Is NOT responsible for on-site safety or operations</li>
            </ul>
            <p className="mt-4">All game execution is the sole responsibility of the Field Owner.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">6. BOOKINGS AND PAYMENTS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">6.1 Booking Model</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Bookings are made per player or per team</li>
                  <li>Game slots require a minimum number of players to be valid</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">6.2 Pricing</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Prices are set by Field Owners</li>
                  <li>Additional services (equipment, paintballs, etc.) may be selected during booking</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">6.3 Commission</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>TACPLAY may apply a commission (e.g., 20%) on bookings made by non-premium users</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">6.4 Payments</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Payments are processed via third-party providers (e.g., Stripe)</li>
                  <li>TACPLAY does not store full payment details</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">7. REFUNDS AND CANCELLATIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">7.1 Slot Not Filled</h3>
                <p>If the minimum number of players is not reached before the cutoff time:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Players are entitled to a full refund</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">7.2 Player Cancellation / No-Show</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>No refunds for no-shows</li>
                  <li>Cancellation policies may vary by Field Owner</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">7.3 Force Majeure</h3>
                <p>Refunds may be issued in cases of:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Extreme weather</li>
                  <li>Safety issues</li>
                  <li>Field closure</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">8. FIELD OWNER TERMS</h2>
            <p>Field Owners agree to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Provide accurate field and game information</li>
              <li>Ensure safety compliance with local laws</li>
              <li>Honour confirmed bookings</li>
              <li>Manage cancellations responsibly</li>
            </ul>
            <p className="mt-4">TACPLAY reserves the right to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Remove listings</li>
              <li>Suspend accounts</li>
              <li>Enforce quality standards</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">9. USER CONDUCT</h2>
            <p>Users must not:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Provide false information</li>
              <li>Engage in abusive or unsafe behaviour</li>
              <li>Manipulate rankings or reviews</li>
              <li>Attempt fraud or payment abuse</li>
            </ul>
            <p className="mt-4">Violations may result in account suspension or termination.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">10. REVIEWS AND RATINGS</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Only users who have participated in a game may leave reviews</li>
              <li>Reviews must be honest and not defamatory</li>
              <li>Field Owners may respond to reviews</li>
            </ul>
            <p className="mt-4">TACPLAY may remove inappropriate content.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">11. RANKING SYSTEM</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Rankings are based on participation and performance</li>
              <li>Only verified games may count toward rankings</li>
              <li>TACPLAY does not guarantee accuracy or competitive fairness</li>
            </ul>
            <p className="mt-4">Rankings are provided for informational and entertainment purposes only.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">12. PREMIUM MEMBERSHIP</h2>
            <p>Premium users may receive:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Reduced or no booking commission</li>
              <li>Access to advanced features (e.g., rankings, teams, analytics)</li>
            </ul>
            <p className="mt-4">Subscriptions:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Are billed monthly or annually</li>
              <li>Auto-renew unless cancelled</li>
              <li>Can be cancelled anytime (no retroactive refunds unless required by law)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">13. INTELLECTUAL PROPERTY</h2>
            <p>All content on TACPLAY (logos, design, software, text) is:</p>
            <p className="mt-4">Owned by TACPLAY or licensed to TACPLAY</p>
            <p className="mt-4">You may not:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Copy, reproduce, or distribute content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">14. DATA PROTECTION (GDPR COMPLIANCE)</h2>
            <p>TACPLAY processes personal data in accordance with:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>General Data Protection Regulation</li>
            </ul>
            <p className="mt-4">Users have the right to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Access their data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-4">See our Privacy Policy for full details.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">15. LIABILITY LIMITATION</h2>
            <p>To the fullest extent permitted by EU law:</p>
            <p className="mt-4">TACPLAY is not liable for:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Injuries or accidents during games</li>
              <li>Actions of Field Owners or Players</li>
              <li>Losses due to cancellations or disputes</li>
            </ul>
            <p className="mt-4">TACPLAY’s liability is limited to:</p>
            <p className="mt-4">The amount paid by the user for the relevant booking</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">16. INSURANCE AND SAFETY</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Players participate at their own risk</li>
              <li>Field Owners are responsible for providing appropriate safety measures and insurance</li>
            </ul>
            <p className="mt-4">Users should ensure they have appropriate personal insurance where applicable.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">17. TERMINATION</h2>
            <p>TACPLAY may suspend or terminate access if:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Terms are violated</li>
              <li>Fraud or abuse is suspected</li>
              <li>Required by law</li>
            </ul>
            <p className="mt-4">Users may delete their account at any time.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">18. GOVERNING LAW AND JURISDICTION</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Spain.</p>
            <p className="mt-4">
              If you are a consumer residing in the European Union or European Economic Area, you will also benefit from any mandatory consumer protection laws in your country of residence.
            </p>
            <p className="mt-4">
              Any disputes shall be subject to the exclusive jurisdiction of the courts of Málaga, Spain, unless otherwise required by applicable consumer protection laws.
            </p>
            <div className="mt-4 rounded-lg border border-background/60 bg-background/40 p-6">
              <p className="font-semibold text-white">Alternative Dispute Resolution (ADR)</p>
              <p className="mt-2">Consumers may also use the European Commission’s Online Dispute Resolution platform:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>European Consumer Redress Platform</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">19. CHANGES TO TERMS</h2>
            <p>TACPLAY may update these Terms at any time.</p>
            <p className="mt-4">Users will be notified of significant changes via:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Email</li>
              <li>Platform notifications</li>
            </ul>
            <p className="mt-4">Continued use constitutes acceptance of updated Terms.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">20. CONTACT</h2>
            <p>For legal or support inquiries:</p>
            <div className="mt-4 rounded-lg border border-background/60 bg-background/40 p-6">
              <p>Email: <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">info@tacplay.eu</a></p>
              <p className="mt-2">Company: TACPLAY EUROPE S.L.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
