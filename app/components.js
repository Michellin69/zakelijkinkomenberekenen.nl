"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── Helpers ───────────────────────────────────────────────── */
const fmt = (n) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
const pct = (n) =>
  new Intl.NumberFormat("nl-NL", { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(n) + "%";
const num = (v) => parseFloat(v) || 0;

/* ── Nav ───────────────────────────────────────────────────── */
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/toetsinkomen-zzp-nhg", label: "IB NHG" },
    { href: "/toetsinkomen-zzp", label: "IB Regulier" },
    { href: "/toetsinkomen-dga-nhg", label: "DGA NHG" },
    { href: "/toetsinkomen-dga", label: "DGA Regulier" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,250,249,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "-0.02em" }}>ZI</div>
          <span style={{ fontWeight: 600, fontSize: 15, color: "var(--text)", letterSpacing: "-0.02em" }}>
            zakelijkinkomenberekenen<span style={{ color: "var(--primary)" }}>.nl</span>
          </span>
        </Link>

        <div className="nav-desktop" style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              padding: "7px 14px", borderRadius: "var(--radius-sm)", fontSize: 13, fontWeight: isActive(l.href) ? 600 : 400,
              color: isActive(l.href) ? "var(--primary)" : "var(--text-sec)",
              background: isActive(l.href) ? "var(--primary-ghost)" : "transparent",
              transition: "all .15s",
            }}>{l.label}</Link>
          ))}
        </div>

        <button className="nav-mobile-btn" onClick={() => setOpen(!open)} style={{
          display: "none", alignItems: "center", justifyContent: "center",
          background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: 6,
        }}>
          <svg width="22" height="22" fill="none" stroke="var(--text)" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l10 10M6 16L16 6" /> : <path d="M4 7h14M4 12h14M4 17h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mobile-menu" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "6px 16px 14px" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "11px 14px", borderRadius: "var(--radius-sm)", fontSize: 14,
              fontWeight: isActive(l.href) ? 600 : 400,
              color: isActive(l.href) ? "var(--primary)" : "var(--text)",
              background: isActive(l.href) ? "var(--primary-ghost)" : "transparent",
              marginBottom: 2,
            }}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ── Footer ────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer style={{ background: "var(--primary)", color: "rgba(255,255,255,0.6)", padding: "48px 24px 32px", marginTop: 80, fontSize: 13 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, marginBottom: 32 }}>
          <div style={{ flex: "1 1 280px" }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10, letterSpacing: "-0.02em" }}>zakelijkinkomenberekenen.nl</div>
            <p style={{ lineHeight: 1.6, maxWidth: 340 }}>
              Een initiatief van Lindenburg Financieel Advies. Bereken snel en gratis uw indicatieve toetsinkomen als ondernemer.
            </p>
            <p style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Amstelveen</p>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 600, marginBottom: 10, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>Calculators</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/toetsinkomen-zzp-nhg" style={{ transition: "color .15s" }}>IB-ondernemer NHG</Link>
              <Link href="/toetsinkomen-zzp" style={{ transition: "color .15s" }}>IB-ondernemer regulier</Link>
              <Link href="/toetsinkomen-dga-nhg" style={{ transition: "color .15s" }}>DGA / BV NHG</Link>
              <Link href="/toetsinkomen-dga" style={{ transition: "color .15s" }}>DGA / BV regulier</Link>
            </div>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 600, marginBottom: 10, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>Over ons</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/contact">Adviesgesprek aanvragen</Link>
              <span>info@zakelijkinkomenberekenen.nl</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
          <span>&copy; {new Date().getFullYear()} Lindenburg Financieel Advies &middot; Amstelveen</span>
          <span>Indicatieve berekening &mdash; raadpleeg altijd een hypotheekadviseur</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Shared UI ─────────────────────────────────────────────── */
export function Section({ children, style }) {
  return <section style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px", ...style }}>{children}</section>;
}

export function Input({ label, value, onChange, hint, prefix = "\u20AC" }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-sec)", marginBottom: 5, letterSpacing: "0.01em" }}>{label}</label>
      <div style={{ display: "flex", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)", overflow: "hidden", background: "#fff", transition: "border-color .2s" }}>
        {prefix && (
          <span style={{ padding: "0 11px", fontSize: 13, color: "var(--text-ter)", fontWeight: 500, background: "var(--surface-alt)", borderRight: "1px solid var(--border-light)", lineHeight: "42px" }}>{prefix}</span>
        )}
        <input
          type="text" inputMode="numeric" value={value} placeholder="0"
          onChange={(e) => onChange(e.target.value.replace(/[^0-9.\-]/g, ""))}
          style={{ flex: 1, padding: "0 12px", height: 42, border: "none", outline: "none", fontSize: 14, color: "var(--text)", background: "transparent" }}
        />
      </div>
      {hint && <div style={{ fontSize: 11, color: "var(--text-ter)", marginTop: 4 }}>{hint}</div>}
    </div>
  );
}

function StatusBadge({ ok, label }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 4,
      fontSize: 12, fontWeight: 600,
      background: ok ? "var(--success-bg)" : "var(--danger-bg)",
      color: ok ? "var(--success)" : "var(--danger)",
    }}>
      {ok ? "\u2713" : "\u2717"} {label}
    </span>
  );
}

function CollapsibleSection({ title, open, onToggle, children }) {
  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={onToggle} style={{
        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "14px 18px", borderRadius: "var(--radius)", border: "none",
        background: "var(--surface)", boxShadow: "var(--shadow-sm)", cursor: "pointer", marginBottom: open ? 12 : 0,
      }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{title}</span>
        <svg width="16" height="16" fill="none" stroke="var(--text-ter)" strokeWidth="2" style={{ transition: "transform .2s", transform: open ? "rotate(180deg)" : "" }}>
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
      {open && children}
    </div>
  );
}

function ResultLine({ label, value, bold, accent }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: "1px solid var(--border-light)" }}>
      <span style={{ fontSize: 13, color: accent ? "var(--primary)" : "var(--text-sec)", fontWeight: bold ? 600 : 400 }}>{label}</span>
      <span style={{ fontSize: 14, color: accent ? "var(--primary)" : "var(--text)", fontWeight: bold || accent ? 600 : 400 }}>{value}</span>
    </div>
  );
}

function CTA() {
  return (
    <div style={{ marginTop: 28, padding: 24, borderRadius: "var(--radius)", background: "var(--primary)", color: "#fff" }}>
      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Professionele analyse nodig?</div>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: "0 0 16px" }}>
        Wij maken een professionele inkomensanalyse op maat en begeleiden u door het volledige hypotheektraject bij alle geldverstrekkers.
      </p>
      <Link href="/contact" style={{
        display: "inline-block", padding: "11px 26px", borderRadius: 8, background: "#fff",
        color: "var(--primary)", fontSize: 13, fontWeight: 600,
      }}>
        Vrijblijvend adviesgesprek
      </Link>
    </div>
  );
}

function Disclaimer({ nhg }) {
  return (
    <div style={{ marginTop: 16, padding: 14, borderRadius: 8, background: "var(--warn-bg)", border: "1px solid var(--warn-border)", fontSize: 12, lineHeight: 1.6, color: "var(--warn)" }}>
      <strong>Disclaimer:</strong> Dit is een indicatieve berekening{nhg ? " conform NHG-toetskaders" : ""}. Geldverstrekkers kunnen afwijkende criteria hanteren. Raadpleeg een hypotheekadviseur voor een definitieve beoordeling.
    </div>
  );
}

/* ── IB Calculator ─────────────────────────────────────────── */
export function IBCalcPage({ nhg }) {
  const years = [2023, 2024, 2025];
  const [data, setData] = useState(years.map((y) => ({ year: y, winst: "", bijt: "" })));
  const [bal, setBal] = useState({ ev: "", totaalActiva: "", vlActiva: "", vlPassiva: "", or: "", box3: "", achtergest: "", immat: "", stilleReserve: "" });
  const [showBal, setShowBal] = useState(true);
  const [result, setResult] = useState(null);

  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; setData(n); };
  const updB = (k, v) => setBal({ ...bal, [k]: v });

  const calc = () => {
    const rows = data.map((d) => {
      const w = num(d.winst), b = num(d.bijt);
      return { year: d.year, winst: w, bijt: b, toets: w - b };
    });
    const filled = rows.filter((r) => r.winst !== 0);
    if (filled.length === 0) return;

    const avg = filled.reduce((s, r) => s + r.toets, 0) / filled.length;
    const lastYear = filled[filled.length - 1].toets;
    const capped = Math.min(avg, lastYear);

    const ev = num(bal.ev), ta = num(bal.totaalActiva), va = num(bal.vlActiva), vp = num(bal.vlPassiva);
    const or_ = num(bal.or), box3 = num(bal.box3), achtergest = num(bal.achtergest);
    const immat = num(bal.immat), stilleRes = num(bal.stilleReserve);

    const evCorr = ev + or_ + box3 + achtergest - immat + stilleRes;
    const taCorr = ta + box3 - immat + stilleRes;
    const vaCorr = va + box3;

    const solvabiliteit = taCorr > 0 ? (evCorr / taCorr) * 100 : 0;
    const liquiditeit = vp > 0 ? vaCorr / vp : (vaCorr > 0 ? 999 : 0);
    const hasBal = ev > 0 || ta > 0;

    setResult({
      rows, avg, lastYear, capped, count: filled.length, wasCapped: avg > lastYear,
      hasBal, evCorr, taCorr, vaCorr, vp, solvabiliteit, liquiditeit,
      solvOk: solvabiliteit >= 25, liqOk: liquiditeit >= 1,
    });
  };

  return (
    <Section style={{ paddingTop: 40, paddingBottom: 64 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: "var(--radius-sm)", background: nhg ? "var(--primary-ghost)" : "var(--surface-alt)", border: `1px solid ${nhg ? "var(--primary-border)" : "var(--border)"}`, color: nhg ? "var(--primary)" : "var(--text-sec)", fontSize: 11, fontWeight: 600, marginBottom: 14 }}>
          {nhg ? "NHG" : "Regulier"}
        </div>
        <h1 style={{ fontSize: "clamp(22px, 3.5vw, 28px)", fontWeight: 700, margin: "0 0 8px", color: "var(--text)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
          Toetsinkomen berekenen{nhg ? " met NHG" : ""} &mdash; IB-ondernemer
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-sec)", margin: 0, lineHeight: 1.6 }}>
          {nhg
            ? "Bereken uw toetsinkomen als ZZP\u2019er, eenmanszaak of VoF conform NHG-toetskaders, inclusief balanstoets (solvabiliteit \u226525% en liquiditeit \u22651)."
            : "Bereken uw toetsinkomen als ZZP\u2019er, eenmanszaak of VoF conform reguliere normen van geldverstrekkers, inclusief balanstoets."
          }
        </p>
      </div>

      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 12 }}>Inkomen per boekjaar</div>
      {years.map((y, i) => (
        <div key={y} style={{ padding: 20, borderRadius: "var(--radius)", background: "var(--surface)", boxShadow: "var(--shadow-sm)", marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 14 }}>Boekjaar {y}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 220px" }}><Input label="Winst uit onderneming" value={data[i].winst} onChange={(v) => upd(i, "winst", v)} hint="Saldo fiscale winstberekening" /></div>
            <div style={{ flex: "1 1 220px" }}><Input label="Bijtelling auto (optioneel)" value={data[i].bijt} onChange={(v) => upd(i, "bijt", v)} hint="Priv\u00E9gebruik auto van de zaak" /></div>
          </div>
        </div>
      ))}

      <CollapsibleSection title="Balanstoets (eindbalans laatste boekjaar)" open={showBal} onToggle={() => setShowBal(!showBal)}>
        <div style={{ padding: 20, borderRadius: "var(--radius)", background: "var(--surface)", boxShadow: "var(--shadow-sm)", marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-sec)", marginBottom: 14 }}>Balansposten</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 200px" }}><Input label="Eigen vermogen" value={bal.ev} onChange={(v) => updB("ev", v)} /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Totaal activa (balanstotaal)" value={bal.totaalActiva} onChange={(v) => updB("totaalActiva", v)} /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Vlottende activa" value={bal.vlActiva} onChange={(v) => updB("vlActiva", v)} /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Kort vreemd vermogen" value={bal.vlPassiva} onChange={(v) => updB("vlPassiva", v)} hint="Vlottende passiva / kortlopende schulden" /></div>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-sec)", marginTop: 18, marginBottom: 14 }}>Balanscorrecties (optioneel)</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 200px" }}><Input label="Oudedagsreserve (FOR)" value={bal.or} onChange={(v) => updB("or", v)} hint="Positief op EV" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Box 3 vermogen (liquide)" value={bal.box3} onChange={(v) => updB("box3", v)} hint="Positief op EV, activa en vlottend" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Achtergestelde leningen" value={bal.achtergest} onChange={(v) => updB("achtergest", v)} hint="Positief op EV" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Immateri\u00EBle vaste activa" value={bal.immat} onChange={(v) => updB("immat", v)} hint="Negatief op EV en balanstotaal" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Stille reserve onroerend goed" value={bal.stilleReserve} onChange={(v) => updB("stilleReserve", v)} hint="Positief op EV en balanstotaal" /></div>
          </div>
        </div>
      </CollapsibleSection>

      <button onClick={calc} style={{
        width: "100%", padding: "14px", borderRadius: 8, border: "none",
        background: "var(--primary)", color: "#fff", fontSize: 14, fontWeight: 600,
        cursor: "pointer", marginTop: 14, transition: "opacity .15s",
      }}>
        Toetsinkomen berekenen
      </button>

      {result && (
        <div id="resultaat" style={{ marginTop: 28, padding: 28, borderRadius: 12, background: "var(--surface)", boxShadow: "var(--shadow-lg)", border: "2px solid var(--primary)" }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 18 }}>Resultaat</div>

          <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-ter)", marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Inkomen</div>
          {result.rows.map((r) => (
            <div key={r.year} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--surface-alt)", borderRadius: "var(--radius-sm)", marginBottom: 6, fontSize: 13 }}>
              <span style={{ color: "var(--text-sec)" }}>{r.year}</span>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                {r.bijt > 0 && <span style={{ color: "var(--text-ter)", fontSize: 11 }}>{fmt(r.winst)} &minus; {fmt(r.bijt)}</span>}
                <span style={{ fontWeight: 600, color: "var(--text)", minWidth: 72, textAlign: "right" }}>{fmt(r.toets)}</span>
              </div>
            </div>
          ))}
          <ResultLine label={`Gemiddelde (${result.count} jaar)`} value={fmt(Math.round(result.avg))} />
          {result.wasCapped && (
            <div style={{ fontSize: 12, color: "var(--primary)", margin: "6px 0", fontWeight: 500 }}>Gemaximeerd op laatste jaar: {fmt(Math.round(result.lastYear))}</div>
          )}

          {result.hasBal && (
            <>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-ter)", marginTop: 22, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Balanstoets</div>
              <ResultLine label="Eigen vermogen na correcties" value={fmt(Math.round(result.evCorr))} />
              <ResultLine label="Balanstotaal na correcties" value={fmt(Math.round(result.taCorr))} />
              <ResultLine label="Vlottende activa na correcties" value={fmt(Math.round(result.vaCorr))} />
              <ResultLine label="Kort vreemd vermogen" value={fmt(Math.round(result.vp))} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--border-light)" }}>
                <span style={{ fontSize: 13, color: "var(--text-sec)" }}>Solvabiliteit</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{pct(result.solvabiliteit)}</span>
                  <StatusBadge ok={result.solvOk} label={result.solvOk ? "\u226525%" : "<25%"} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--border-light)" }}>
                <span style={{ fontSize: 13, color: "var(--text-sec)" }}>Liquiditeit</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{result.liquiditeit >= 999 ? ">99" : result.liquiditeit.toFixed(2)}</span>
                  <StatusBadge ok={result.liqOk} label={result.liqOk ? "\u22651,00" : "<1,00"} />
                </div>
              </div>
              {(!result.solvOk || !result.liqOk) && (
                <div style={{ marginTop: 10, padding: 14, borderRadius: 8, background: "var(--danger-bg)", border: "1px solid #FECACA", fontSize: 12, color: "var(--danger)", lineHeight: 1.6 }}>
                  De balanstoets wordt niet gehaald. Dit kan betekenen dat een hypotheek op basis van deze cijfers niet mogelijk is. Neem contact op voor advies over mogelijke oplossingen.
                </div>
              )}
            </>
          )}

          <div style={{ marginTop: 20, padding: "16px 20px", borderRadius: "var(--radius)", background: "var(--primary)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>Indicatief toetsinkomen</span>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{fmt(Math.round(result.capped))}</span>
          </div>

          <Disclaimer nhg={nhg} />
          <CTA />
        </div>
      )}
    </Section>
  );
}

/* ── DGA Calculator ────────────────────────────────────────── */
export function DGACalcPage({ nhg }) {
  const years = [2023, 2024, 2025];
  const [data, setData] = useState(years.map((y) => ({ year: y, salaris: "", winst: "", bijt: "" })));
  const [bal, setBal] = useState({ ev: "", totaalActiva: "", vlActiva: "", vlPassiva: "", rcDga: "", box3: "", achtergest: "", immat: "", stilleReserve: "", pensioen: "", dividend: "" });
  const [showBal, setShowBal] = useState(true);
  const [result, setResult] = useState(null);

  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; setData(n); };
  const updB = (k, v) => setBal({ ...bal, [k]: v });

  const factor = nhg ? 0.75 : 1.0;
  const factorLabel = nhg ? "75%" : "100%";

  const calc = () => {
    const rows = data.map((d) => {
      const s = num(d.salaris), w = num(d.winst), b = num(d.bijt);
      return { year: d.year, salaris: s, winst: w, bijt: b, box1: s - b };
    });
    const filled = rows.filter((r) => r.salaris !== 0 || r.winst !== 0);
    if (filled.length === 0) return;
    const last = filled[filled.length - 1];

    const avgBox1 = filled.reduce((s, r) => s + r.box1, 0) / filled.length;
    const cappedBox1 = Math.min(avgBox1, last.box1);
    const avgWinst = filled.reduce((s, r) => s + r.winst, 0) / filled.length;
    const cappedWinst = Math.min(avgWinst, last.winst);

    const ev = num(bal.ev), ta = num(bal.totaalActiva), va = num(bal.vlActiva), vp = num(bal.vlPassiva);
    const rcRaw = num(bal.rcDga), rcCorr = Math.max(0, rcRaw - 17500);
    const box3 = num(bal.box3), achtergest = num(bal.achtergest), immat = num(bal.immat);
    const stilleRes = num(bal.stilleReserve), pensioen = num(bal.pensioen), dividend = num(bal.dividend);

    const evCorr = ev - rcCorr + box3 + achtergest - immat + stilleRes + pensioen;
    const taCorr = ta - rcCorr + box3 - immat + stilleRes;
    const vaCorr = va - rcCorr + box3;

    const solvabiliteit = taCorr > 0 ? (evCorr / taCorr) * 100 : 0;
    const liquiditeit = vp > 0 ? vaCorr / vp : (vaCorr > 0 ? 999 : 0);
    const solvOk = solvabiliteit >= 25;
    const liqOk = liquiditeit >= 1;
    const hasBal = ev > 0 || ta > 0;

    let solvRuimte = 0, liqRuimte = 0, maxUitkering = 0, beschikbareOverwinst = 0, overwinst = 0;

    if (hasBal && solvOk && liqOk) {
      solvRuimte = (evCorr - 0.25 * taCorr) / 0.75;
      liqRuimte = vaCorr - vp;
      maxUitkering = Math.max(0, Math.min(solvRuimte, liqRuimte));
      beschikbareOverwinst = maxUitkering + dividend;
      beschikbareOverwinst = Math.min(beschikbareOverwinst, last.winst);
      beschikbareOverwinst = Math.min(beschikbareOverwinst, cappedWinst);
      overwinst = beschikbareOverwinst * factor;
    } else if (!hasBal) {
      overwinst = cappedWinst * factor;
    }

    const totaal = cappedBox1 + overwinst;

    setResult({
      rows, cappedBox1, avgBox1, avgWinst: cappedWinst, overwinst, totaal,
      count: filled.length, box1Capped: avgBox1 > last.box1, winstCapped: avgWinst > last.winst,
      hasBal, evCorr, taCorr, vaCorr, vp, rcCorr,
      solvabiliteit, liquiditeit, solvOk, liqOk,
      solvRuimte, liqRuimte, maxUitkering, beschikbareOverwinst, dividend, factor,
    });
  };

  return (
    <Section style={{ paddingTop: 40, paddingBottom: 64 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: "var(--radius-sm)", background: nhg ? "var(--primary-ghost)" : "var(--surface-alt)", border: `1px solid ${nhg ? "var(--primary-border)" : "var(--border)"}`, color: nhg ? "var(--primary)" : "var(--text-sec)", fontSize: 11, fontWeight: 600, marginBottom: 14 }}>
          {nhg ? "NHG" : "Regulier"}
        </div>
        <h1 style={{ fontSize: "clamp(22px, 3.5vw, 28px)", fontWeight: 700, margin: "0 0 8px", color: "var(--text)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
          Toetsinkomen berekenen{nhg ? " met NHG" : ""} &mdash; DGA / BV
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-sec)", margin: 0, lineHeight: 1.6 }}>
          {nhg
            ? "Bereken uw toetsinkomen als DGA (\u22655% aandeelhouder) conform NHG-toetskaders. Inclusief dubbele balanstoets en overwinst (75%)."
            : "Bereken uw toetsinkomen als DGA (\u22655% aandeelhouder) conform reguliere normen. Inclusief dubbele balanstoets en overwinst (100%)."
          }
        </p>
      </div>

      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 12 }}>Inkomen per boekjaar</div>
      {years.map((y, i) => (
        <div key={y} style={{ padding: 20, borderRadius: "var(--radius)", background: "var(--surface)", boxShadow: "var(--shadow-sm)", marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 14 }}>Boekjaar {y}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 160px" }}><Input label="DGA-salaris (bruto jaar)" value={data[i].salaris} onChange={(v) => upd(i, "salaris", v)} hint="Jaarlijks bruto salaris" /></div>
            <div style={{ flex: "1 1 160px" }}><Input label="Winst voor belasting BV" value={data[i].winst} onChange={(v) => upd(i, "winst", v)} hint="Resultaat voor Vpb" /></div>
            <div style={{ flex: "1 1 160px" }}><Input label="Bijtelling auto" value={data[i].bijt} onChange={(v) => upd(i, "bijt", v)} hint="Optioneel" /></div>
          </div>
        </div>
      ))}

      <CollapsibleSection title="Dubbele balanstoets (eindbalans laatste boekjaar)" open={showBal} onToggle={() => setShowBal(!showBal)}>
        <div style={{ padding: 20, borderRadius: "var(--radius)", background: "var(--surface)", boxShadow: "var(--shadow-sm)", marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-sec)", marginBottom: 14 }}>Balansposten</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 200px" }}><Input label="Eigen vermogen" value={bal.ev} onChange={(v) => updB("ev", v)} /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Totaal activa (balanstotaal)" value={bal.totaalActiva} onChange={(v) => updB("totaalActiva", v)} /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Vlottende activa" value={bal.vlActiva} onChange={(v) => updB("vlActiva", v)} /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Vlottende passiva" value={bal.vlPassiva} onChange={(v) => updB("vlPassiva", v)} hint="Kortlopende schulden" /></div>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-sec)", marginTop: 18, marginBottom: 14 }}>Balanscorrecties</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 200px" }}><Input label="R/C DGA (vordering op DGA)" value={bal.rcDga} onChange={(v) => updB("rcDga", v)} hint="Vrijstelling tot \u20AC17.500" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Box 3 vermogen (liquide)" value={bal.box3} onChange={(v) => updB("box3", v)} hint="Positief op EV, activa en vlottend" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Achtergestelde leningen" value={bal.achtergest} onChange={(v) => updB("achtergest", v)} hint="Positief op EV" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Immateri\u00EBle vaste activa" value={bal.immat} onChange={(v) => updB("immat", v)} hint="Negatief op EV en balanstotaal" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Stille reserve onroerend goed" value={bal.stilleReserve} onChange={(v) => updB("stilleReserve", v)} hint="Positief op EV en balanstotaal" /></div>
            <div style={{ flex: "1 1 200px" }}><Input label="Pensioen eigen beheer / stamrecht" value={bal.pensioen} onChange={(v) => updB("pensioen", v)} hint="Positief op EV" /></div>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-sec)", marginTop: 18, marginBottom: 14 }}>Reeds uitgekeerd dividend</div>
          <div style={{ maxWidth: 300 }}>
            <Input label="Uitgekeerd dividend laatste boekjaar" value={bal.dividend} onChange={(v) => updB("dividend", v)} hint="Verhoogt beschikbare overwinst" />
          </div>
        </div>
      </CollapsibleSection>

      <button onClick={calc} style={{
        width: "100%", padding: "14px", borderRadius: 8, border: "none",
        background: "var(--primary)", color: "#fff", fontSize: 14, fontWeight: 600,
        cursor: "pointer", marginTop: 14, transition: "opacity .15s",
      }}>
        Toetsinkomen berekenen
      </button>

      {result && (
        <div id="resultaat" style={{ marginTop: 28, padding: 28, borderRadius: 12, background: "var(--surface)", boxShadow: "var(--shadow-lg)", border: "2px solid var(--primary)" }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 18 }}>Resultaat</div>

          <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-ter)", marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Box 1 (salaris)</div>
          {result.rows.map((r) => (
            <div key={r.year} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--surface-alt)", borderRadius: "var(--radius-sm)", marginBottom: 6, fontSize: 13, flexWrap: "wrap", gap: 6 }}>
              <span style={{ color: "var(--text-sec)" }}>{r.year}</span>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <span style={{ color: "var(--text-ter)", fontSize: 11 }}>
                  Salaris: {fmt(r.salaris)}{r.bijt > 0 ? ` \u2212 bijt: ${fmt(r.bijt)}` : ""}
                </span>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>{fmt(r.box1)}</span>
              </div>
            </div>
          ))}
          <ResultLine label="Box 1 (gem. max laatste jaar)" value={fmt(Math.round(result.cappedBox1))} bold accent />

          {result.hasBal && (
            <>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-ter)", marginTop: 22, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Balanstoets</div>
              <ResultLine label="Eigen vermogen na correcties" value={fmt(Math.round(result.evCorr))} />
              <ResultLine label="Balanstotaal na correcties" value={fmt(Math.round(result.taCorr))} />
              {result.rcCorr > 0 && <ResultLine label="R/C DGA correctie (boven \u20AC17.500)" value={fmt(Math.round(result.rcCorr))} />}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--border-light)" }}>
                <span style={{ fontSize: 13, color: "var(--text-sec)" }}>Solvabiliteit</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{pct(result.solvabiliteit)}</span>
                  <StatusBadge ok={result.solvOk} label={result.solvOk ? "\u226525%" : "<25%"} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--border-light)" }}>
                <span style={{ fontSize: 13, color: "var(--text-sec)" }}>Liquiditeit</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{result.liquiditeit >= 999 ? ">99" : result.liquiditeit.toFixed(2)}</span>
                  <StatusBadge ok={result.liqOk} label={result.liqOk ? "\u22651,00" : "<1,00"} />
                </div>
              </div>

              {result.solvOk && result.liqOk && (
                <>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-ter)", marginTop: 18, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Dubbele balanstoets</div>
                  <ResultLine label="Solvabiliteitsruimte" value={fmt(Math.round(result.solvRuimte))} />
                  <ResultLine label="Liquiditeitsruimte (werkkapitaal)" value={fmt(Math.round(result.liqRuimte))} />
                  <ResultLine label="Max. uitkering (laagste)" value={fmt(Math.round(result.maxUitkering))} bold />
                  {result.dividend > 0 && <ResultLine label="+ Reeds uitgekeerd dividend" value={fmt(Math.round(result.dividend))} />}
                  <ResultLine label="Beschikbare overwinst" value={fmt(Math.round(result.beschikbareOverwinst))} bold />
                  <ResultLine label={`Overwinstfactor (${factorLabel})`} value={fmt(Math.round(result.overwinst))} accent bold />
                </>
              )}

              {(!result.solvOk || !result.liqOk) && (
                <div style={{ marginTop: 10, padding: 14, borderRadius: 8, background: "var(--danger-bg)", border: "1px solid #FECACA", fontSize: 12, color: "var(--danger)", lineHeight: 1.6 }}>
                  De balanstoets wordt niet gehaald. Er kan geen overwinst worden meegenomen. Het toetsinkomen bestaat alleen uit Box 1 (DGA-salaris). Neem contact op voor advies over mogelijke oplossingen.
                </div>
              )}
            </>
          )}

          {!result.hasBal && (
            <div style={{ marginTop: 16, padding: 14, borderRadius: 8, background: "var(--warn-bg)", border: "1px solid var(--warn-border)", fontSize: 12, color: "var(--warn)", lineHeight: 1.6 }}>
              Geen balanscijfers ingevuld. De overwinst is berekend zonder balanstoets. In de praktijk kan de dubbele balanstoets de overwinst beperken.
            </div>
          )}

          <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-ter)", marginTop: 22, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>Totaal</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 16px", background: "var(--primary-ghost)", borderRadius: "var(--radius-sm)", fontSize: 13 }}>
              <span style={{ color: "var(--primary)" }}>Box 1 (salaris &minus; bijtelling)</span>
              <span style={{ fontWeight: 600, color: "var(--primary)" }}>{fmt(Math.round(result.cappedBox1))}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 16px", background: "var(--primary-ghost)", borderRadius: "var(--radius-sm)", fontSize: 13 }}>
              <span style={{ color: "var(--primary)" }}>Overwinst ({factorLabel}){result.hasBal && result.solvOk && result.liqOk ? " na balanstoets" : ""}</span>
              <span style={{ fontWeight: 600, color: "var(--primary)" }}>{fmt(Math.round(result.overwinst))}</span>
            </div>
          </div>

          <div style={{ padding: "16px 20px", borderRadius: "var(--radius)", background: "var(--primary)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>Indicatief toetsinkomen</span>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{fmt(Math.round(result.totaal))}</span>
          </div>

          <Disclaimer nhg={nhg} />
          <CTA />
        </div>
      )}
    </Section>
  );
}

/* ── Home Page ─────────────────────────────────────────────── */
export function HomePage() {
  const calcs = [
    { href: "/toetsinkomen-zzp-nhg", tag: "NHG", title: "IB-ondernemer", sub: "Eenmanszaak \u00B7 ZZP \u00B7 VoF \u00B7 Maatschap", desc: "Toetsinkomen conform NHG-toetskaders met balanstoets (solvabiliteit en liquiditeit)." },
    { href: "/toetsinkomen-zzp", tag: "Regulier", title: "IB-ondernemer", sub: "Eenmanszaak \u00B7 ZZP \u00B7 VoF \u00B7 Maatschap", desc: "Toetsinkomen conform reguliere normen van geldverstrekkers met balanstoets." },
    { href: "/toetsinkomen-dga-nhg", tag: "NHG", title: "DGA / BV", sub: "Holding \u00B7 Werk-BV \u00B7 \u22655% aandeelhouder", desc: "DGA-salaris + overwinst (75%) met dubbele balanstoets." },
    { href: "/toetsinkomen-dga", tag: "Regulier", title: "DGA / BV", sub: "Holding \u00B7 Werk-BV \u00B7 \u22655% aandeelhouder", desc: "DGA-salaris + overwinst (100%) met dubbele balanstoets." },
  ];

  return (
    <div>
      {/* Hero */}
      <div style={{ padding: "80px 24px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            De rekenexpert voor ondernemers
          </p>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 700, lineHeight: 1.12, color: "var(--text)", margin: "0 0 18px", letterSpacing: "-0.03em" }}>
            Bereken uw toetsinkomen als ondernemer
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-sec)", lineHeight: 1.6, margin: "0 0 12px" }}>
            Gratis en direct. Inclusief balanstoets. Weet wat uw indicatieve toetsinkomen is voor een hypotheekaanvraag.
          </p>
          <p style={{ fontSize: 13, color: "var(--text-ter)" }}>
            Een initiatief van Lindenburg Financieel Advies &middot; Amstelveen
          </p>
        </div>
      </div>

      {/* Calculator cards */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
          {calcs.map((c) => (
            <Link key={c.href} href={c.href} style={{ display: "block", padding: 24, borderRadius: 12, background: "var(--surface)", boxShadow: "var(--shadow-sm)", transition: "box-shadow .2s, transform .2s" }}>
              <div style={{ display: "inline-block", padding: "4px 10px", borderRadius: 4, background: c.tag === "NHG" ? "var(--primary-ghost)" : "var(--surface-alt)", color: c.tag === "NHG" ? "var(--primary)" : "var(--text-sec)", fontSize: 11, fontWeight: 600, marginBottom: 12, border: `1px solid ${c.tag === "NHG" ? "var(--primary-border)" : "var(--border)"}` }}>{c.tag}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px", color: "var(--text)" }}>{c.title}</h3>
              <div style={{ fontSize: 12, color: "var(--primary)", fontWeight: 500, marginBottom: 10 }}>{c.sub}</div>
              <p style={{ fontSize: 13, color: "var(--text-sec)", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
              <div style={{ marginTop: 16, fontSize: 13, fontWeight: 600, color: "var(--primary)" }}>Berekenen</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section style={{ marginTop: 64 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", color: "var(--text)", marginBottom: 12, letterSpacing: "-0.025em" }}>Hoe werkt het?</h2>
        <p style={{ textAlign: "center", fontSize: 14, color: "var(--text-sec)", marginBottom: 32, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
          In drie stappen een indicatie van uw toetsinkomen. Geen registratie, geen kosten.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 16 }}>
          {[
            { n: "1", t: "Kies uw situatie", d: "IB-ondernemer of DGA, met of zonder NHG" },
            { n: "2", t: "Vul uw cijfers in", d: "Winst, salaris en balanscijfers van de afgelopen jaren" },
            { n: "3", t: "Ontvang uw indicatie", d: "Toetsinkomen inclusief balanstoets, direct op uw scherm" },
          ].map((s) => (
            <div key={s.n} style={{ padding: 22, borderRadius: "var(--radius)", background: "var(--surface)", boxShadow: "var(--shadow-sm)", textAlign: "center" }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--primary)", color: "#fff", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{s.n}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 5 }}>{s.t}</div>
              <div style={{ fontSize: 13, color: "var(--text-sec)", lineHeight: 1.5 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section style={{ marginTop: 64 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", color: "var(--text)", marginBottom: 32, letterSpacing: "-0.025em" }}>Veelgestelde vragen</h2>
        {[
          { q: "Wat is toetsinkomen?", a: "Het toetsinkomen is het inkomen dat een geldverstrekker hanteert om te bepalen hoeveel hypotheek u kunt krijgen. Voor ondernemers wordt dit berekend op basis van de winst of het salaris van de afgelopen jaren." },
          { q: "Wat is het verschil tussen NHG en regulier?", a: "Bij NHG (Nationale Hypotheek Garantie) wordt 75% van de overwinst meegenomen, bij reguliere geldverstrekkers is dat 100%. NHG biedt een vangnet bij betalingsproblemen maar kent ook een maximale hypotheekgrens." },
          { q: "Wat is de balanstoets?", a: "De balanstoets beoordeelt de financi\u00EBle gezondheid van uw onderneming. Er wordt gekeken naar solvabiliteit (eigen vermogen ten opzichte van het totaal) en liquiditeit (kunt u op korte termijn aan uw verplichtingen voldoen)." },
          { q: "Wat is de dubbele balanstoets bij DGA\u2019s?", a: "Bij DGA\u2019s wordt naast de gewone solvabiliteits- en liquiditeitstoets ook berekend hoeveel er maximaal aan de BV onttrokken kan worden (solvabiliteitsruimte en liquiditeitsruimte). De laagste van deze twee bepaalt de maximale overwinst." },
          { q: "Zijn mijn gegevens veilig?", a: "Ja. Alle berekeningen worden volledig in uw browser uitgevoerd. Er worden geen gegevens verstuurd naar een server en er wordt niets opgeslagen. Uw financi\u00EBle informatie verlaat uw apparaat niet." },
        ].map((faq, i) => (
          <div key={i} style={{ padding: "18px 0", borderBottom: "1px solid var(--border)" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>{faq.q}</h3>
            <p style={{ fontSize: 14, color: "var(--text-sec)", lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
          </div>
        ))}
      </Section>

      {/* CTA */}
      <Section style={{ marginTop: 56 }}>
        <div style={{ padding: 32, borderRadius: 14, background: "var(--primary)", color: "#fff", textAlign: "center" }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.02em" }}>Professionele analyse nodig?</h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: "0 0 22px", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Wij maken een professionele inkomensanalyse op maat en begeleiden u door het volledige hypotheektraject bij alle geldverstrekkers.
          </p>
          <Link href="/contact" style={{ display: "inline-block", padding: "13px 30px", borderRadius: 8, background: "#fff", color: "var(--primary)", fontSize: 14, fontWeight: 600 }}>
            Vrijblijvend contact opnemen
          </Link>
        </div>
      </Section>

      {/* Privacy note */}
      <Section style={{ marginTop: 40 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: 20, borderRadius: "var(--radius)", background: "var(--success-bg)", border: "1px solid rgba(22,101,52,0.1)" }}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M12 2C9.2 2 7 4.2 7 7v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7c0-2.8-2.2-5-5-5zm-3 5c0-1.7 1.3-3 3-3s3 1.3 3 3v3H9V7z" fill="var(--success)" />
          </svg>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--success)", marginBottom: 4 }}>Uw gegevens blijven priv\u00E9</div>
            <div style={{ fontSize: 13, color: "var(--text-sec)", lineHeight: 1.55 }}>
              Alle berekeningen worden lokaal in uw browser uitgevoerd. Er worden geen gegevens verstuurd of opgeslagen. Uw financi\u00EBle informatie verlaat uw apparaat niet.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ── Contact Page ──────────────────────────────────────────── */
export function ContactPage() {
  return (
    <Section style={{ paddingTop: 48, paddingBottom: 64 }}>
      <h1 style={{ fontSize: "clamp(22px, 3.5vw, 28px)", fontWeight: 700, margin: "0 0 8px", color: "var(--text)", letterSpacing: "-0.025em" }}>Vrijblijvend adviesgesprek</h1>
      <p style={{ fontSize: 15, color: "var(--text-sec)", margin: "0 0 32px", lineHeight: 1.6 }}>
        Wilt u een professionele inkomensanalyse en begeleiding bij uw hypotheekaanvraag? Neem vrijblijvend contact op.
      </p>

      <div style={{ padding: 28, borderRadius: 12, background: "var(--surface)", boxShadow: "var(--shadow-md)" }}>
        <h2 style={{ fontSize: 17, fontWeight: 600, margin: "0 0 18px", color: "var(--text)" }}>Wat u kunt verwachten</h2>
        {[
          "Professionele inkomensanalyse op maat",
          "Volledige beoordeling inclusief balanstoets en correcties",
          "Begeleiding bij uw hypotheektraject bij alle geldverstrekkers",
          "Persoonlijk contact en advies over de beste financiering",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
              <circle cx="12" cy="12" r="10" fill="var(--primary-ghost)" stroke="var(--primary)" strokeWidth="1.5" />
              <path d="M8 12l3 3 5-5" stroke="var(--primary)" strokeWidth="2" fill="none" />
            </svg>
            <span style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, padding: 28, borderRadius: 12, background: "var(--primary)", color: "#fff" }}>
        <h2 style={{ fontSize: 17, fontWeight: 600, margin: "0 0 6px" }}>Contact</h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", margin: "0 0 18px" }}>Lindenburg Financieel Advies &middot; Amstelveen</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#fff" strokeWidth="1.5" /></svg>
            <span style={{ fontSize: 14 }}>info@zakelijkinkomenberekenen.nl</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="1.5" /></svg>
            <span style={{ fontSize: 14 }}>Telefoonnummer op aanvraag</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18, fontSize: 13, color: "var(--text-ter)", textAlign: "center" }}>
        Gespecialiseerd in ondernemersfinanciering
      </div>
    </Section>
  );
}
