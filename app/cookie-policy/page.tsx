import { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Cookie Policy — Gate Milano",
  description: "Cookie Policy for gatemilano.it",
  robots: { index: false },
};

export default function CookiePolicy() {
  return (
    <>
      <Nav />
      <main className="bg-gate-black text-gate-white min-h-screen">
        <section className="py-24 px-4 text-center">
          <h1
            className="text-[clamp(2rem,7.5vw,7rem)] leading-none text-gate-white uppercase"
            style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
          >
            Cookie Policy
          </h1>
          <p className="text-gate-muted text-sm mt-4">Last updated: April 2026</p>
        </section>

        <section className="pb-24 px-4">
          <div className="max-w-3xl mx-auto space-y-10" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 300 }}>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>What Are Cookies</h2>
              <p className="text-gate-muted leading-relaxed">
                Cookies are small text files that websites save on your device while you browse.
                They are used to make the site work correctly, remember your preferences, and collect
                statistical information about navigation.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>Cookies Used on This Site</h2>

              <div className="border border-gate-border rounded-xl p-5 space-y-3">
                <h3 className="text-base uppercase" style={{ fontWeight: 700 }}>Technical Cookies (Required)</h3>
                <p className="text-gate-muted text-sm leading-relaxed">
                  Essential for the website to function. They do not collect personal data and do not require consent.
                </p>
                <table className="w-full text-sm text-gate-muted mt-2">
                  <thead>
                    <tr className="text-gate-white border-b border-gate-border">
                      <th className="text-left py-2">Name</th>
                      <th className="text-left py-2">Purpose</th>
                      <th className="text-left py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">__vercel_live_token</td>
                      <td className="py-2">Vercel preview deployments</td>
                      <td className="py-2">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-gate-border rounded-xl p-5 space-y-3">
                <h3 className="text-base uppercase" style={{ fontWeight: 700 }}>Analytics Cookies</h3>
                <p className="text-gate-muted text-sm leading-relaxed">
                  Collect anonymous information on how visitors use the site, to improve its features.
                </p>
                <table className="w-full text-sm text-gate-muted mt-2">
                  <thead>
                    <tr className="text-gate-white border-b border-gate-border">
                      <th className="text-left py-2">Provider</th>
                      <th className="text-left py-2">Cookie</th>
                      <th className="text-left py-2">Purpose</th>
                      <th className="text-left py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gate-border/50">
                      <td className="py-2">Google Analytics</td>
                      <td className="py-2">_ga, _ga_*</td>
                      <td className="py-2">Visit statistics</td>
                      <td className="py-2">2 years</td>
                    </tr>
                    <tr className="border-b border-gate-border/50">
                      <td className="py-2">Vercel Analytics</td>
                      <td className="py-2">_vcrm</td>
                      <td className="py-2">Performance statistics</td>
                      <td className="py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-2">Microsoft Clarity</td>
                      <td className="py-2">_clck, _clsk, CLID</td>
                      <td className="py-2">Heatmaps &amp; session recording</td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>How to Manage Cookies</h2>
              <p className="text-gate-muted leading-relaxed">
                You can disable cookies at any time through your browser settings.
                Disabling analytics cookies does not affect your ability to browse the site.
              </p>
              <ul className="list-disc list-inside text-gate-muted space-y-1 text-sm">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:text-gate-white transition-colors">Chrome</a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="underline hover:text-gate-white transition-colors">Firefox</a>
                </li>
                <li>
                  <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:text-gate-white transition-colors">Safari</a>
                </li>
              </ul>
              <p className="text-gate-muted leading-relaxed">
                To opt out of Google Analytics specifically:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline hover:text-gate-white transition-colors">
                  Google Analytics Opt-out
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>Contact</h2>
              <p className="text-gate-muted leading-relaxed">
                For any questions about cookies, write to{" "}
                <a href="mailto:info@gatemilano.it" className="underline hover:text-gate-white transition-colors">
                  info@gatemilano.it
                </a>.
                For more information, read our{" "}
                <a href="/privacy-policy" className="underline hover:text-gate-white transition-colors">
                  Privacy Policy
                </a>.
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
