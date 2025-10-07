// components/(home)/FaqAskSection.jsx
import React from "react";

export default function FaqAskSection() {
  // Server component friendly: no client JS needed. Accordion uses daisyUI's radio method.
  return (
    <section className="py-12 md:py-24">
      {/* No max-width wrapper here; honors the page's existing width constraints */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Left: Text + CTA (on creamy background => dark text) */}
          <div>
            <h2 className="text-3xl/tight md:text-4xl/tight font-bold text-gray-900">
              Got questions about local services?
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-800">
              Find out how bookings work, what providers include, and how
              ratings keep quality high. Everything is designed to be quick,
              fair, and transparent.
            </p>

            <div className="mt-6">
              <a
                href="/help"
                className="btn rounded-full border-none text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md hover:brightness-110 hover:shadow-lg active:scale-[.98] transition"
                aria-label="Ask Questions"
              >
                Ask Questions
              </a>
            </div>
          </div>

          {/* Right: Accordion (individual dark surfaces; text flips to light) */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="collapse collapse-arrow rounded-2xl bg-[#111113] text-white border border-white/10">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title font-semibold md:text-base text-sm">
                How do bookings and confirmations work?
              </div>
              <div className="collapse-content text-sm md:text-base text-zinc-300">
                You pick a time, the provider confirms, and you both get
                updates. You can reschedule if plans change before the cutoff
                time shown at checkout.
              </div>
            </div>

            {/* Item 2 */}
            <div className="collapse collapse-arrow rounded-2xl bg-[#111113] text-white border border-white/10">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-semibold md:text-base text-sm">
                What about pricing and secure payments?
              </div>
              <div className="collapse-content text-sm md:text-base text-zinc-300">
                Prices are shown up front. Payments are held securely and
                released after service completion. Receipts and VAT details are
                available in your account.
              </div>
            </div>

            {/* Item 3 */}
            <div className="collapse collapse-arrow rounded-2xl bg-[#111113] text-white border border-white/10">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-semibold md:text-base text-sm">
                Cancellations and refunds
              </div>
              <div className="collapse-content text-sm md:text-base text-zinc-300">
                Cancel within the provider’s policy window for an automatic
                refund. Outside the window, partial refunds may apply depending
                on prep time and materials.
              </div>
            </div>

            {/* Item 4 */}
            <div className="collapse collapse-arrow rounded-2xl bg-[#111113] text-white border border-white/10">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-semibold md:text-base text-sm">
                Safety, reviews, and verification
              </div>
              <div className="collapse-content text-sm md:text-base text-zinc-300">
                Providers have verified profiles. Reviews require a completed
                booking, and reports are handled by our trust and safety team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
