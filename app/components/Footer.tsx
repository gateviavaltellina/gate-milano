import { client } from "../../sanity/lib/client";

async function getSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    email, phone, address, googleMapsUrl
  }`);
}

export default async function Footer() {
  const settings = await getSettings();
  const email = settings?.email ?? "info@gatemilano.com";
  const phone = settings?.phone ?? "+39 391 487 6443";
  const address = settings?.address;

  return (
    <footer className="bg-gate-black border-t border-gate-border py-12 px-4" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 300 }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h4 className="text-[0.9rem] uppercase tracking-widest mb-3" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}>Contact Us</h4>
          <ul className="space-y-1 text-sm text-gate-muted">
            <li>
              <a href={`mailto:${email}`} className="hover:text-gate-white transition-colors">
                {email}
              </a>
            </li>
            {phone && (
              <li>
                <a href={`tel:${phone}`} className="hover:text-gate-white transition-colors">
                  {phone}
                </a>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-[0.9rem] uppercase tracking-widest mb-3" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}>Careers</h4>
          <a href="mailto:careers@gatemilano.com" className="text-sm text-gate-muted hover:text-gate-white transition-colors">
            careers@gatemilano.com
          </a>
        </div>
        <div>
          <h4 className="text-[0.9rem] uppercase tracking-widest mb-3" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}>Get Direction</h4>
          <address className="not-italic text-sm text-gate-muted leading-relaxed">
            {address?.street ?? "Via Valtellina 21"}
            <br />
            {address?.city ?? "Milano"}, {address?.postalCode ?? "20159"}
          </address>
          <a
            href={settings?.googleMapsUrl ?? "https://maps.google.com/?q=Via+Valtellina+21+Milano"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-gate-muted hover:text-gate-white transition-colors underline underline-offset-2"
          >
            Open in Maps
          </a>
        </div>
        <div>
          <h4 className="text-[0.9rem] uppercase tracking-widest mb-3" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}>Live</h4>
          <a href="mailto:live@gatemilano.com" className="text-sm text-gate-muted hover:text-gate-white transition-colors">
            live@gatemilano.com
          </a>
        </div>
        <div>
          <h4 className="text-[0.9rem] uppercase tracking-widest mb-3" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}>Corporate</h4>
          <a href="mailto:corporate@gatemilano.com" className="text-sm text-gate-muted hover:text-gate-white transition-colors">
            corporate@gatemilano.com
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gate-border flex items-center justify-between text-xs text-gate-muted">
        <span>© {new Date().getFullYear()} Gate Milano</span>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/gatemilano/" target="_blank" rel="noopener noreferrer" className="hover:text-gate-white transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
