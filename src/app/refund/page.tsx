export default function RefundPage() {
  return (
    <div className="pt-14 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <div className="mb-12">
          <p className="font-label text-xs tracking-[0.2em] uppercase text-accent mb-3">Legal</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-wide mb-4">Refund Policy</h1>
          <p className="font-mono text-xs text-muted-foreground tracking-wide">
            <span className="text-accent">&gt;</span> Last updated: January 2025 · Declassified Mine
          </p>
        </div>

        <div className="space-y-10 font-mono text-sm text-muted-foreground leading-relaxed tracking-wide">

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">The Short Version</h2>
            <p>
              90-day money-back guarantee. No questions. If you purchased any tier and it didn't deliver value within 90 days, email us for a full refund.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">How to Request</h2>
            <p className="mb-3">
              Email <span className="text-accent">refunds@declassifiedmine.com</span> with your order number and we'll process the refund within 5–7 business days. We don't make you justify yourself — the guarantee is unconditional.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">What Happens to Your Access</h2>
            <p>
              Upon refund, your access code will be deactivated. You will retain any downloaded files — we can't un-deliver information that's already in your possession. We trust you not to share it.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">Section 23 — The Exception Clause</h2>
            <div className="border border-accent/20 cyber-chamfer-sm p-5 bg-accent/3">
              <p className="mb-3">
                In the highly unlikely event that you achieve documented bilateral hemispheric synchronization, verified by a licensed EEG technician, within 7 days of purchasing The Archive — you are ineligible for a refund.
              </p>
              <p className="text-xs text-muted-foreground/60">
                (This clause was included because someone on our team thought it would be funny. It was. Legal reviewed it. Legal also thought it was funny. It is not legally binding in any jurisdiction we are aware of.)
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-foreground mb-3 tracking-wide">Digital Product Note</h2>
            <p>
              All products are delivered digitally and are available immediately upon purchase. EU customers retain the right to a 14-day cooling-off period for digital products where delivery has not yet commenced.
            </p>
          </section>

          {/* Easter egg */}
          <section className="mt-16 group cursor-default">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 border border-destructive/20 cyber-chamfer p-5">
              <p className="font-label text-[9px] tracking-[0.2em] uppercase text-destructive mb-2">
                INTERNAL MEMO — DO NOT DISTRIBUTE
              </p>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                {"STAR GATE Program — Refund Incident Report #7 (1991): Subject requested refund on grounds that remote viewing 'worked too well' and he could no longer watch television without experiencing involuntary precognition. Request denied. Classified."}<br /><br />
                <span className="text-accent">— DIA Internal Record, declassified 2003</span>
              </p>
            </div>
            <p className="font-label text-[9px] tracking-[0.1em] text-muted-foreground/20 group-hover:opacity-0 transition-opacity">
              · · ·
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
