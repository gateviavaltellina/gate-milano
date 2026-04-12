import { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Cookie Policy — Gate Milano",
  description: "Informativa sull'uso dei cookie su gatemilano.it.",
  robots: { index: false },
};

export default function CookiePolicy() {
  return (
    <>
      <Nav />
      <main className="bg-gate-black text-gate-white min-h-screen py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 300 }}>
          <h1 className="text-4xl uppercase" style={{ fontWeight: 700 }}>Cookie Policy</h1>
          <p className="text-gate-muted text-sm">Ultimo aggiornamento: aprile 2026</p>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>Cosa sono i cookie</h2>
            <p className="text-gate-muted leading-relaxed">
              I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo durante la navigazione.
              Vengono utilizzati per far funzionare il sito correttamente, ricordare le tue preferenze e raccogliere
              informazioni statistiche sulla navigazione.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>Cookie utilizzati su questo sito</h2>

            <div className="space-y-6">
              <div className="border border-gate-border rounded-xl p-5 space-y-2">
                <h3 className="text-base uppercase" style={{ fontWeight: 700 }}>Cookie tecnici (necessari)</h3>
                <p className="text-gate-muted text-sm leading-relaxed">
                  Essenziali per il funzionamento del sito. Non raccolgono dati personali e non richiedono consenso.
                </p>
                <table className="w-full text-sm text-gate-muted mt-2">
                  <thead>
                    <tr className="text-gate-white border-b border-gate-border">
                      <th className="text-left py-2">Nome</th>
                      <th className="text-left py-2">Scopo</th>
                      <th className="text-left py-2">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gate-border/50">
                      <td className="py-2">__vercel_live_token</td>
                      <td className="py-2">Preview deployments Vercel</td>
                      <td className="py-2">Sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-gate-border rounded-xl p-5 space-y-2">
                <h3 className="text-base uppercase" style={{ fontWeight: 700 }}>Cookie analitici</h3>
                <p className="text-gate-muted text-sm leading-relaxed">
                  Raccolgono informazioni anonime su come i visitatori usano il sito, per migliorarne le funzionalità.
                </p>
                <table className="w-full text-sm text-gate-muted mt-2">
                  <thead>
                    <tr className="text-gate-white border-b border-gate-border">
                      <th className="text-left py-2">Fornitore</th>
                      <th className="text-left py-2">Cookie</th>
                      <th className="text-left py-2">Scopo</th>
                      <th className="text-left py-2">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gate-border/50">
                      <td className="py-2">Google Analytics</td>
                      <td className="py-2">_ga, _ga_*</td>
                      <td className="py-2">Statistiche visite</td>
                      <td className="py-2">2 anni</td>
                    </tr>
                    <tr className="border-b border-gate-border/50">
                      <td className="py-2">Vercel Analytics</td>
                      <td className="py-2">_vcrm</td>
                      <td className="py-2">Statistiche performance</td>
                      <td className="py-2">1 anno</td>
                    </tr>
                    <tr className="border-b border-gate-border/50">
                      <td className="py-2">Microsoft Clarity</td>
                      <td className="py-2">_clck, _clsk, CLID</td>
                      <td className="py-2">Heatmap e session recording</td>
                      <td className="py-2">1 anno</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>Come gestire i cookie</h2>
            <p className="text-gate-muted leading-relaxed">
              Puoi disabilitare i cookie in qualsiasi momento tramite le impostazioni del tuo browser.
              Tieni presente che disabilitare i cookie analitici non compromette la navigazione del sito.
            </p>
            <ul className="list-disc list-inside text-gate-muted space-y-1 text-sm">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:text-gate-white transition-colors">
                  Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="underline hover:text-gate-white transition-colors">
                  Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:text-gate-white transition-colors">
                  Safari
                </a>
              </li>
            </ul>
            <p className="text-gate-muted leading-relaxed">
              Per opt-out da Google Analytics specificamente:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline hover:text-gate-white transition-colors">
                Google Analytics Opt-out
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>Contatti</h2>
            <p className="text-gate-muted leading-relaxed">
              Per qualsiasi domanda sui cookie scrivi a{" "}
              <a href="mailto:info@gatemilano.it" className="underline hover:text-gate-white transition-colors">
                info@gatemilano.it
              </a>.
              Per maggiori informazioni consulta la nostra{" "}
              <a href="/privacy-policy" className="underline hover:text-gate-white transition-colors">
                Privacy Policy
              </a>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
