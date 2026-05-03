export default function PrivacyPage() {
  return (
    <div className="pt-14 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <div className="mb-12">
          <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-3">Legal</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-wide mb-4">Privacy Policy</h1>
          <p className="font-mono text-xs text-muted-foreground tracking-wide">
            <span className="text-accent">&gt;</span> Last updated: January 2025 · Declassified Mine
          </p>
        </div>

        <div className="space-y-10 font-mono text-sm text-muted-foreground leading-relaxed tracking-wide">

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">1. What We Collect</h2>
            <p className="mb-3">
              When you purchase or subscribe, we collect your email address, name, and payment information (processed securely by our payment provider — we never see your full card number). We also collect standard server logs including IP addresses, browser type, and pages visited.
            </p>
            <p>
              If you opt into our email list, we store your email and any preference data you provide. You can unsubscribe at any time.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">2. How We Use It</h2>
            <p className="mb-3">We use your data to:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Deliver your purchased products and access codes',
                'Send transactional emails (receipts, access confirmations)',
                'Send the email content you opted into',
                'Improve the site and product experience',
                'Comply with legal obligations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">3. Third Parties</h2>
            <p>
              We use Lemon Squeezy for payment processing, Beehiiv for email delivery, and standard analytics. We do not sell your data to third parties. Ever.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">4. Cookies</h2>
            <p>
              We use an httpOnly session cookie to authenticate your access to purchased content. We may use minimal analytics cookies. No advertising cookies. No cross-site tracking.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">5. Your Rights</h2>
            <p>
              You can request deletion of your data, a copy of what we hold, or correction of any errors. Email us at the address below. We'll respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">6. Security</h2>
            <p>
              Your data is transmitted over HTTPS. Access codes are stored as hashed environment variables. We take reasonable precautions, but no system is perfectly secure — don't store your life savings in your Declassified Mine account.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">7. Contact</h2>
            <p>
              Questions? Email <span className="text-accent">privacy@declassifiedmine.com</span>
            </p>
          </section>

          {/* Easter egg — hidden in plain sight */}
          <section className="border border-border/20 cyber-chamfer p-6 mt-16 opacity-30 hover:opacity-100 transition-opacity duration-700 cursor-default">
            <p className="font-label text-[9px] tracking-[0.2em] uppercase text-destructive mb-2">
              ⚠ CLASSIFIED APPENDIX — SECTION OMEGA
            </p>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              If you are reading this, you have demonstrated the precise level of curiosity the Gateway program was designed to cultivate. Note that by reading this policy in full, you have implicitly consented to having your attention span classified as above-average. This data will not be shared. It will, however, be noted.
            </p>
            <p className="font-label text-[9px] tracking-[0.15em] uppercase text-accent mt-3">
              CLEARANCE LEVEL: READER · EYES ONLY
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
