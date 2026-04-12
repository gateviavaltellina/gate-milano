import { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Privacy Policy — Gate Milano",
  description: "Privacy Policy for gatemilano.it",
  robots: { index: false },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="bg-gate-black text-gate-white min-h-screen">
        <section className="py-24 px-4 text-center">
          <h1
            className="text-[clamp(2rem,7.5vw,7rem)] leading-none text-gate-white uppercase"
            style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
          >
            Privacy Policy
          </h1>
          <p className="text-gate-muted text-sm mt-4">Last updated: April 2026</p>
        </section>

        <section className="pb-24 px-4">
          <div className="max-w-3xl mx-auto space-y-10" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 300 }}>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>1. Data Controller</h2>
              <p className="text-gate-muted leading-relaxed">
                The data controller is <strong className="text-gate-white">Gate Milano</strong>, located at Via Valtellina 21, 20159 Milan, Italy.
                For any privacy-related requests, please contact us at{" "}
                <a href="mailto:info@gatemilano.it" className="underline hover:text-gate-white transition-colors">
                  info@gatemilano.it
                </a>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>2. Data We Collect</h2>
              <ul className="list-disc list-inside text-gate-muted space-y-2 leading-relaxed">
                <li><strong className="text-gate-white">Browsing data:</strong> IP address, browser type, operating system, pages visited, session duration — collected automatically via analytics tools.</li>
                <li><strong className="text-gate-white">Contact data:</strong> name and email address, voluntarily provided via the newsletter subscription form.</li>
                <li><strong className="text-gate-white">Behavioural data:</strong> interactions with the website (clicks, scrolling, navigation paths) collected via Microsoft Clarity.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>3. Purpose of Processing</h2>
              <ul className="list-disc list-inside text-gate-muted space-y-2 leading-relaxed">
                <li>Statistical analysis of traffic and website improvement (Google Analytics 4, Vercel Analytics, Microsoft Clarity)</li>
                <li>Sending promotional communications about events and news (newsletter — only with explicit consent)</li>
                <li>Handling contact requests</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>4. Legal Basis</h2>
              <ul className="list-disc list-inside text-gate-muted space-y-2 leading-relaxed">
                <li><strong className="text-gate-white">Consent</strong> (Art. 6(1)(a) GDPR): for newsletter subscription and profiling cookies.</li>
                <li><strong className="text-gate-white">Legitimate interest</strong> (Art. 6(1)(f) GDPR): for anonymised traffic analysis.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>5. Data Sharing</h2>
              <p className="text-gate-muted leading-relaxed">
                Your data is never sold to third parties. It may be shared with the following service providers:
              </p>
              <ul className="list-disc list-inside text-gate-muted space-y-2 leading-relaxed">
                <li><strong className="text-gate-white">Google LLC</strong> — Google Analytics 4 and Search Console (USA, with adequate transfer safeguards)</li>
                <li><strong className="text-gate-white">Microsoft Corporation</strong> — Microsoft Clarity (USA, with adequate transfer safeguards)</li>
                <li><strong className="text-gate-white">Vercel Inc.</strong> — hosting and analytics (USA, with adequate transfer safeguards)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>6. Data Retention</h2>
              <p className="text-gate-muted leading-relaxed">
                Browsing data is retained for a maximum of <strong className="text-gate-white">26 months</strong> (Google Analytics default setting).
                Newsletter data is retained until consent is withdrawn.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>7. Your Rights</h2>
              <p className="text-gate-muted leading-relaxed">
                Under the GDPR, you have the right to access, rectify, and delete your data, object to processing,
                request data portability, and withdraw consent at any time.
                To exercise these rights, write to{" "}
                <a href="mailto:info@gatemilano.it" className="underline hover:text-gate-white transition-colors">
                  info@gatemilano.it
                </a>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>8. Cookies</h2>
              <p className="text-gate-muted leading-relaxed">
                For detailed information on the cookies used by this website, please read our{" "}
                <a href="/cookie-policy" className="underline hover:text-gate-white transition-colors">
                  Cookie Policy
                </a>.
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
