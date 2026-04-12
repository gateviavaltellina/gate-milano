import { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Privacy Policy — Gate Milano",
  description: "Informativa sul trattamento dei dati personali di Gate Milano.",
  robots: { index: false },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="bg-gate-black text-gate-white min-h-screen py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 300 }}>
          <h1 className="text-4xl uppercase" style={{ fontWeight: 700 }}>Privacy Policy</h1>
          <p className="text-gate-muted text-sm">Ultimo aggiornamento: aprile 2026</p>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>1. Titolare del trattamento</h2>
            <p className="text-gate-muted leading-relaxed">
              Il titolare del trattamento dei dati personali è <strong className="text-gate-white">Gate Milano</strong>,
              con sede in Via Valtellina 21, 20159 Milano (MI), Italia.
              Per qualsiasi richiesta relativa alla privacy puoi contattarci all&apos;indirizzo:{" "}
              <a href="mailto:info@gatemilano.it" className="underline hover:text-gate-white transition-colors">
                info@gatemilano.it
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>2. Dati raccolti</h2>
            <p className="text-gate-muted leading-relaxed">
              Raccogliamo le seguenti categorie di dati:
            </p>
            <ul className="list-disc list-inside text-gate-muted space-y-2 leading-relaxed">
              <li><strong className="text-gate-white">Dati di navigazione:</strong> indirizzo IP, browser, sistema operativo, pagine visitate, durata della visita — raccolti automaticamente tramite strumenti di analytics.</li>
              <li><strong className="text-gate-white">Dati di contatto:</strong> nome e indirizzo email, forniti volontariamente tramite il form di iscrizione alla newsletter.</li>
              <li><strong className="text-gate-white">Dati comportamentali:</strong> interazioni con il sito (click, scroll, percorso di navigazione) raccolti tramite Microsoft Clarity.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>3. Finalità del trattamento</h2>
            <ul className="list-disc list-inside text-gate-muted space-y-2 leading-relaxed">
              <li>Analisi statistica del traffico e miglioramento del sito (Google Analytics 4, Vercel Analytics, Microsoft Clarity)</li>
              <li>Invio di comunicazioni promozionali relative a eventi e novità (newsletter — solo con consenso esplicito)</li>
              <li>Gestione delle richieste di contatto</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>4. Base giuridica</h2>
            <ul className="list-disc list-inside text-gate-muted space-y-2 leading-relaxed">
              <li><strong className="text-gate-white">Consenso</strong> (art. 6, par. 1, lett. a GDPR): per l&apos;iscrizione alla newsletter e i cookie di profilazione.</li>
              <li><strong className="text-gate-white">Legittimo interesse</strong> (art. 6, par. 1, lett. f GDPR): per l&apos;analisi del traffico anonimizzato.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>5. Condivisione dei dati</h2>
            <p className="text-gate-muted leading-relaxed">
              I tuoi dati non vengono venduti a terzi. Possono essere condivisi con i seguenti fornitori di servizi:
            </p>
            <ul className="list-disc list-inside text-gate-muted space-y-2 leading-relaxed">
              <li><strong className="text-gate-white">Google LLC</strong> — Google Analytics 4 e Search Console (USA, trasferimento dati con garanzie adeguate)</li>
              <li><strong className="text-gate-white">Microsoft Corporation</strong> — Microsoft Clarity (USA, trasferimento dati con garanzie adeguate)</li>
              <li><strong className="text-gate-white">Vercel Inc.</strong> — hosting e analytics (USA, trasferimento dati con garanzie adeguate)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>6. Conservazione dei dati</h2>
            <p className="text-gate-muted leading-relaxed">
              I dati di navigazione vengono conservati per un massimo di <strong className="text-gate-white">26 mesi</strong> (impostazione predefinita Google Analytics).
              I dati della newsletter vengono conservati fino alla revoca del consenso.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>7. I tuoi diritti</h2>
            <p className="text-gate-muted leading-relaxed">
              Ai sensi del GDPR hai il diritto di accedere, rettificare, cancellare i tuoi dati,
              opporti al trattamento, richiedere la portabilità e revocare il consenso in qualsiasi momento.
              Per esercitare questi diritti scrivi a{" "}
              <a href="mailto:info@gatemilano.it" className="underline hover:text-gate-white transition-colors">
                info@gatemilano.it
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl uppercase" style={{ fontWeight: 700 }}>8. Cookie</h2>
            <p className="text-gate-muted leading-relaxed">
              Per informazioni dettagliate sui cookie utilizzati da questo sito consulta la nostra{" "}
              <a href="/cookie-policy" className="underline hover:text-gate-white transition-colors">
                Cookie Policy
              </a>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
