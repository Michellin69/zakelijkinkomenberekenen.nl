"use client";

import { useState, useEffect } from "react";

/* ── Design tokens ─────────────────────────────────────────── */
const C = {
  bg: "#F7F7F5",
  surface: "#FFFFFF",
  surfaceAlt: "#F0EFEC",
  dark: "#0F1419",
  primary: "#1A5632",
  primaryGhost: "rgba(26,86,50,0.06)",
  primaryGhostBorder: "rgba(26,86,50,0.15)",
  text: "#1C2127",
  textSec: "#5C6370",
  textTer: "#9BA1AB",
  border: "#E4E3DF",
  borderLight: "#EEEDEA",
  warn: "#A16207",
  warnBg: "#FFFBEB",
  warnBorder: "#FDE68A",
  success: "#166534",
  successBg: "#F0FDF4",
  danger: "#DC2626",
  dangerBg: "#FEF2F2",
};

const font = "'DM Sans', system-ui, -apple-system, sans-serif";
const fmt = (n) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
const pct = (n) => new Intl.NumberFormat("nl-NL", { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(n) + "%";

/* ── Shared components ─────────────────────────────────────── */
function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "ib-nhg", label: "IB-ondernemer NHG" },
    { id: "ib-reg", label: "IB-ondernemer regulier" },
    { id: "dga-nhg", label: "DGA / BV NHG" },
    { id: "dga-reg", label: "DGA / BV regulier" },
  ];
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(247,247,245,0.85)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <div onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13, fontFamily: font }}>ZI</div>
          <span style={{ fontFamily: font, fontWeight: 600, fontSize: 15, color: C.text, letterSpacing: "-0.01em" }}>zakelijkinkomenberekenen<span style={{ color: C.primary }}>.nl</span></span>
        </div>
        <div className="nav-desktop" style={{ display: "flex", gap: 2 }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => setPage(l.id)} style={{ padding: "6px 12px", borderRadius: 6, border: "none", background: page === l.id ? C.primaryGhost : "transparent", color: page === l.id ? C.primary : C.textSec, fontWeight: page === l.id ? 600 : 400, fontSize: 13, cursor: "pointer", fontFamily: font, transition: "all .15s" }}>{l.label}</button>
          ))}
        </div>
        <button className="nav-mobile-btn" onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6 }}>
          <svg width="22" height="22" fill="none" stroke={C.text} strokeWidth="2">{open ? <path d="M6 6l10 10M6 16L16 6" /> : <path d="M4 7h14M4 12h14M4 17h14" />}</svg>
        </button>
      </div>
      {open && (
        <div style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, padding: "4px 20px 12px" }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => { setPage(l.id); setOpen(false); }} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: 6, border: "none", background: page === l.id ? C.primaryGhost : "transparent", color: page === l.id ? C.primary : C.text, fontWeight: page === l.id ? 600 : 400, fontSize: 14, cursor: "pointer", fontFamily: font, marginBottom: 2 }}>{l.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Section({ children, style }) {
  return <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px", ...style }}>{children}</section>;
}

function Input({ label, value, onChange, hint, prefix = "\u20AC" }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: C.textSec, marginBottom: 5, fontFamily: font, letterSpacing: "0.01em" }}>{label}</label>
      <div style={{ display: "flex", border: `1.5px solid ${C.border}`, borderRadius: 8, overflow: "hidden", background: "#fff", transition: "border-color .15s" }}>
        {prefix && <span style={{ padding: "0 10px", fontSize: 13, color: C.textTer, fontWeight: 500, background: C.surfaceAlt, borderRight: `1px solid ${C.borderLight}`, lineHeight: "40px", fontFamily: font }}>{prefix}</span>}
        <input type="text" inputMode="numeric" value={value} onChange={(e) => onChange(e.target.value.replace(/[^0-9.\-]/g, ""))} placeholder="0" style={{ flex: 1, padding: "0 12px", height: 40, border: "none", outline: "none", fontSize: 14, fontFamily: font, color: C.text, background: "transparent" }} />
      </div>
      {hint && <div style={{ fontSize: 11, color: C.textTer, marginTop: 3, fontFamily: font }}>{hint}</div>}
    </div>
  );
}

function StatusBadge({ ok, label }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 4, fontSize: 12, fontWeight: 600, fontFamily: font, background: ok ? C.successBg : C.dangerBg, color: ok ? C.success : C.danger }}>
      {ok ? "\u2713" : "\u2717"} {label}
    </span>
  );
}

function SectionHeader({ title, collapsed, onToggle }) {
  return (
    <button onClick={onToggle} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderRadius: 10, border: `1px solid ${C.border}`, background: C.surfaceAlt, cursor: "pointer", marginBottom: collapsed ? 0 : 10 }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: font }}>{title}</span>
      <svg width="16" height="16" fill="none" stroke={C.textTer} strokeWidth="2" style={{ transition: "transform .15s", transform: collapsed ? "" : "rotate(180deg)" }}><path d="M4 6l4 4 4-4" /></svg>
    </button>
  );
}

function CTA({ setPage }) {
  return (
    <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: C.primary, color: "#fff" }}>
      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6, fontFamily: font }}>Professionele analyse nodig?</div>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.55, margin: "0 0 14px", fontFamily: font }}>
        Wij maken een professionele inkomensanalyse op maat en begeleiden u door het volledige hypotheektraject bij alle geldverstrekkers.
      </p>
      <button onClick={() => setPage("contact")} style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: "#fff", color: C.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font }}>
        Vrijblijvend adviesgesprek aanvragen
      </button>
    </div>
  );
}

function Disclaimer({ nhg }) {
  return (
    <div style={{ marginTop: 16, padding: 14, borderRadius: 8, background: C.warnBg, border: `1px solid ${C.warnBorder}`, fontSize: 12, lineHeight: 1.55, color: C.warn, fontFamily: font }}>
      <strong>Disclaimer:</strong> Dit is een indicatieve berekening{nhg ? " conform NHG-toetskaders" : ""}. Geldverstrekkers kunnen afwijkende criteria hanteren. Raadpleeg een hypotheekadviseur voor een definitieve beoordeling.
    </div>
  );
}

function ResultLine({ label, value, bold, accent }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${C.borderLight}` }}>
      <span style={{ fontSize: 13, color: accent ? C.primary : C.textSec, fontWeight: bold ? 600 : 400, fontFamily: font }}>{label}</span>
      <span style={{ fontSize: 14, color: accent ? C.primary : C.text, fontWeight: bold || accent ? 600 : 400, fontFamily: font }}>{value}</span>
    </div>
  );
}

/* ── HOME ──────────────────────────────────────────────────── */
function Home({ setPage }) {
  const calcs = [
    { id: "ib-nhg", tag: "NHG", title: "IB-ondernemer", sub: "Eenmanszaak \u00B7 ZZP \u00B7 VoF \u00B7 Maatschap", desc: "Toetsinkomen conform NHG-toetskaders met balanstoets (solvabiliteit en liquiditeit)." },
    { id: "ib-reg", tag: "Regulier", title: "IB-ondernemer", sub: "Eenmanszaak \u00B7 ZZP \u00B7 VoF \u00B7 Maatschap", desc: "Toetsinkomen conform reguliere normen met balanstoets." },
    { id: "dga-nhg", tag: "NHG", title: "DGA / BV", sub: "Holding \u00B7 Werk-BV \u00B7 \u22655% aandeelhouder", desc: "DGA-salaris + overwinst (75%) met dubbele balanstoets." },
    { id: "dga-reg", tag: "Regulier", title: "DGA / BV", sub: "Holding \u00B7 Werk-BV \u00B7 \u22655% aandeelhouder", desc: "DGA-salaris + overwinst (100%) met dubbele balanstoets." },
  ];
  return (
    <div>
      <div style={{ padding: "72px 20px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: C.primary, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16, fontFamily: font }}>Gratis \u00B7 Geen registratie \u00B7 Uw data blijft lokaal</p>
          <h1 style={{ fontFamily: font, fontSize: "clamp(28px,4.5vw,44px)", fontWeight: 700, lineHeight: 1.15, color: C.text, margin: "0 0 16px", letterSpacing: "-0.025em" }}>
            Bereken uw toetsinkomen<br />als ondernemer
          </h1>
          <p style={{ fontSize: 16, color: C.textSec, lineHeight: 1.6, margin: "0 0 32px", fontFamily: font }}>
            Inclusief balanstoets. Weet direct wat uw indicatieve toetsinkomen is voor een hypotheekaanvraag.
          </p>
        </div>
      </div>
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
          {calcs.map((c) => (
            <div key={c.id} onClick={() => setPage(c.id)} style={{ padding: 22, borderRadius: 12, background: C.surface, border: `1px solid ${C.border}`, cursor: "pointer", transition: "all .15s" }}>
              <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: 4, background: c.tag === "NHG" ? C.primaryGhost : C.surfaceAlt, color: c.tag === "NHG" ? C.primary : C.textSec, fontSize: 11, fontWeight: 600, fontFamily: font, marginBottom: 10, border: `1px solid ${c.tag === "NHG" ? C.primaryGhostBorder : C.border}` }}>{c.tag}</div>
              <h3 style={{ fontFamily: font, fontSize: 17, fontWeight: 600, margin: "0 0 3px", color: C.text }}>{c.title}</h3>
              <div style={{ fontSize: 12, color: C.primary, fontWeight: 500, marginBottom: 10, fontFamily: font }}>{c.sub}</div>
              <p style={{ fontSize: 13, color: C.textSec, lineHeight: 1.5, margin: 0, fontFamily: font }}>{c.desc}</p>
              <div style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: C.primary, fontFamily: font }}>Berekenen</div>
            </div>
          ))}
        </div>
      </Section>

      <Section style={{ marginTop: 56 }}>
        <h2 style={{ fontFamily: font, fontSize: 22, fontWeight: 700, textAlign: "center", color: C.text, marginBottom: 32, letterSpacing: "-0.02em" }}>Hoe werkt het?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { n: "1", t: "Kies uw situatie", d: "IB-ondernemer of DGA, met of zonder NHG" },
            { n: "2", t: "Vul uw cijfers in", d: "Winst, salaris en balanscijfers van de afgelopen jaren" },
            { n: "3", t: "Ontvang uw indicatie", d: "Toetsinkomen inclusief balanstoets" },
          ].map((s) => (
            <div key={s.n} style={{ padding: 20, borderRadius: 10, background: C.surface, border: `1px solid ${C.border}`, textAlign: "center" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.primary, color: "#fff", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontFamily: font }}>{s.n}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 4, fontFamily: font }}>{s.t}</div>
              <div style={{ fontSize: 13, color: C.textSec, lineHeight: 1.45, fontFamily: font }}>{s.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section style={{ marginTop: 48 }}>
        <div style={{ padding: 28, borderRadius: 12, background: C.primary, color: "#fff", textAlign: "center" }}>
          <h3 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: "0 0 8px" }}>Professionele analyse nodig?</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.55, margin: "0 0 20px", fontFamily: font, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Wij maken een professionele inkomensanalyse op maat en begeleiden u door het volledige hypotheektraject bij alle geldverstrekkers.
          </p>
          <button onClick={() => setPage("contact")} style={{ padding: "12px 28px", borderRadius: 8, border: "none", background: "#fff", color: C.primary, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font }}>
            Vrijblijvend contact opnemen
          </button>
        </div>
      </Section>

      <Section style={{ marginTop: 40 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 20, borderRadius: 10, background: C.successBg, border: "1px solid rgba(22,101,52,0.12)" }}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 1 }}><path d="M12 2C9.2 2 7 4.2 7 7v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7c0-2.8-2.2-5-5-5zm-3 5c0-1.7 1.3-3 3-3s3 1.3 3 3v3H9V7z" fill={C.success} /></svg>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.success, marginBottom: 3, fontFamily: font }}>Uw gegevens blijven priv\u00E9</div>
            <div style={{ fontSize: 12, color: C.textSec, lineHeight: 1.5, fontFamily: font }}>Alle berekeningen worden lokaal in uw browser uitgevoerd. Er worden geen gegevens verstuurd of opgeslagen.</div>
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ── IB CALCULATOR ─────────────────────────────────────────── */
function IBCalc({ nhg, setPage }) {
  const years = [2023, 2024, 2025];
  const [data, setData] = useState(years.map((y) => ({ year: y, winst: "", bijt: "" })));
  const [bal, setBal] = useState({ ev: "", totaalActiva: "", vlActiva: "", vlPassiva: "", or: "", box3: "", achtergest: "", immat: "", stilleReserve: "" });
  const [showBal, setShowBal] = useState(true);
  const [result, setResult] = useState(null);

  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; setData(n); };
  const updB = (k, v) => setBal({ ...bal, [k]: v });
  const num = (v) => parseFloat(v) || 0;

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

    // Balanstoets
    const ev = num(bal.ev);
    const ta = num(bal.totaalActiva);
    const va = num(bal.vlActiva);
    const vp = num(bal.vlPassiva);
    const or_ = num(bal.or);
    const box3 = num(bal.box3);
    const achtergest = num(bal.achtergest);
    const immat = num(bal.immat);
    const stilleRes = num(bal.stilleReserve);

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
    <Section style={{ paddingTop: 36, paddingBottom: 60 }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: 4, background: nhg ? C.primaryGhost : C.surfaceAlt, border: `1px solid ${nhg ? C.primaryGhostBorder : C.border}`, color: nhg ? C.primary : C.textSec, fontSize: 11, fontWeight: 600, fontFamily: font, marginBottom: 12 }}>{nhg ? "NHG" : "Regulier"}</div>
        <h1 style={{ fontFamily: font, fontSize: 24, fontWeight: 700, margin: "0 0 6px", color: C.text, letterSpacing: "-0.02em" }}>Toetsinkomen IB-ondernemer</h1>
        <p style={{ fontSize: 14, color: C.textSec, margin: 0, lineHeight: 1.5, fontFamily: font }}>
          Berekening inclusief balanstoets{nhg ? " conform NHG-toetskaders" : ""}.
        </p>
      </div>

      {/* Inkomen per jaar */}
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 10, fontFamily: font }}>Inkomen per boekjaar</div>
      {years.map((y, i) => (
        <div key={y} style={{ padding: 20, borderRadius: 10, background: C.surface, border: `1px solid ${C.border}`, marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 12, fontFamily: font }}>Boekjaar {y}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 220px" }}><Input label="Winst uit onderneming" value={data[i].winst} onChange={(v) => upd(i, "winst", v)} hint="Saldo fiscale winstberekening" /></div>
            <div style={{ flex: "1 1 220px" }}><Input label="Bijtelling auto (optioneel)" value={data[i].bijt} onChange={(v) => upd(i, "bijt", v)} hint="Priv\u00E9gebruik auto van de zaak" /></div>
          </div>
        </div>
      ))}

      {/* Balanstoets */}
      <div style={{ marginTop: 20 }}>
        <SectionHeader title="Balanstoets (eindbalans laatste boekjaar)" collapsed={!showBal} onToggle={() => setShowBal(!showBal)} />
        {showBal && (
          <div style={{ padding: 20, borderRadius: 10, background: C.surface, border: `1px solid ${C.border}`, marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginBottom: 12, fontFamily: font }}>Balansposten</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{ flex: "1 1 200px" }}><Input label="Eigen vermogen" value={bal.ev} onChange={(v) => updB("ev", v)} /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Totaal activa (balanstotaal)" value={bal.totaalActiva} onChange={(v) => updB("totaalActiva", v)} /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Vlottende activa" value={bal.vlActiva} onChange={(v) => updB("vlActiva", v)} /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Kort vreemd vermogen" value={bal.vlPassiva} onChange={(v) => updB("vlPassiva", v)} hint="Vlottende passiva / kortlopende schulden" /></div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginTop: 16, marginBottom: 12, fontFamily: font }}>Balanscorrecties (optioneel)</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{ flex: "1 1 200px" }}><Input label="Oudedagsreserve (FOR)" value={bal.or} onChange={(v) => updB("or", v)} hint="Positief op EV" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Box 3 vermogen (liquide)" value={bal.box3} onChange={(v) => updB("box3", v)} hint="Positief op EV, activa en vlottend" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Achtergestelde leningen" value={bal.achtergest} onChange={(v) => updB("achtergest", v)} hint="Positief op EV" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Immateriele vaste activa" value={bal.immat} onChange={(v) => updB("immat", v)} hint="Negatief op EV en balanstotaal" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Stille reserve onroerend goed" value={bal.stilleReserve} onChange={(v) => updB("stilleReserve", v)} hint="Positief op EV en balanstotaal" /></div>
            </div>
          </div>
        )}
      </div>

      <button onClick={calc} style={{ width: "100%", padding: "14px", borderRadius: 8, border: "none", background: C.primary, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font, marginTop: 10 }}>
        Berekenen
      </button>

      {result && (
        <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: C.surface, border: `2px solid ${C.primary}` }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 16, fontFamily: font }}>Resultaat</div>

          {/* Inkomen */}
          <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginBottom: 8, fontFamily: font }}>INKOMEN</div>
          {result.rows.map((r) => (
            <div key={r.year} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 14px", background: C.surfaceAlt, borderRadius: 6, marginBottom: 6, fontSize: 13, fontFamily: font }}>
              <span style={{ color: C.textSec }}>{r.year}</span>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                {r.bijt > 0 && <span style={{ color: C.textTer, fontSize: 11 }}>{fmt(r.winst)} \u2212 {fmt(r.bijt)}</span>}
                <span style={{ fontWeight: 600, color: C.text, minWidth: 72, textAlign: "right" }}>{fmt(r.toets)}</span>
              </div>
            </div>
          ))}
          <ResultLine label={`Gemiddelde (${result.count} jaar)`} value={fmt(Math.round(result.avg))} />
          {result.wasCapped && <div style={{ fontSize: 12, color: C.primary, margin: "6px 0", fontFamily: font }}>Gemaximeerd op laatste jaar: {fmt(Math.round(result.lastYear))}</div>}

          {/* Balanstoets */}
          {result.hasBal && (
            <>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginTop: 20, marginBottom: 8, fontFamily: font }}>BALANSTOETS</div>
              <ResultLine label="Eigen vermogen na correcties" value={fmt(Math.round(result.evCorr))} />
              <ResultLine label="Balanstotaal na correcties" value={fmt(Math.round(result.taCorr))} />
              <ResultLine label="Vlottende activa na correcties" value={fmt(Math.round(result.vaCorr))} />
              <ResultLine label="Kort vreemd vermogen" value={fmt(Math.round(result.vp))} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${C.borderLight}` }}>
                <span style={{ fontSize: 13, color: C.textSec, fontFamily: font }}>Solvabiliteit</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: font }}>{pct(result.solvabiliteit)}</span>
                  <StatusBadge ok={result.solvOk} label={result.solvOk ? "\u226525%" : "<25%"} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${C.borderLight}` }}>
                <span style={{ fontSize: 13, color: C.textSec, fontFamily: font }}>Liquiditeit</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: font }}>{result.liquiditeit >= 999 ? ">99" : result.liquiditeit.toFixed(2)}</span>
                  <StatusBadge ok={result.liqOk} label={result.liqOk ? "\u22651,00" : "<1,00"} />
                </div>
              </div>
              {(!result.solvOk || !result.liqOk) && (
                <div style={{ marginTop: 10, padding: 12, borderRadius: 8, background: C.dangerBg, border: "1px solid #FECACA", fontSize: 12, color: C.danger, fontFamily: font }}>
                  De balanstoets wordt niet gehaald. Dit kan betekenen dat een hypotheek op basis van deze cijfers niet mogelijk is. Neem contact op voor advies over mogelijke oplossingen.
                </div>
              )}
            </>
          )}

          {/* Totaal */}
          <div style={{ marginTop: 16, padding: "14px 18px", borderRadius: 8, background: C.primary, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)", fontFamily: font }}>Indicatief toetsinkomen</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", fontFamily: font }}>{fmt(Math.round(result.capped))}</span>
          </div>

          <Disclaimer nhg={nhg} />
          <CTA setPage={setPage} />
        </div>
      )}
    </Section>
  );
}

/* ── DGA CALCULATOR ────────────────────────────────────────── */
function DGACalc({ nhg, setPage }) {
  const years = [2023, 2024, 2025];
  const [data, setData] = useState(years.map((y) => ({ year: y, salaris: "", winst: "", bijt: "" })));
  const [bal, setBal] = useState({ ev: "", totaalActiva: "", vlActiva: "", vlPassiva: "", rcDga: "", box3: "", achtergest: "", immat: "", stilleReserve: "", pensioen: "", dividend: "" });
  const [showBal, setShowBal] = useState(true);
  const [result, setResult] = useState(null);

  const upd = (i, k, v) => { const n = [...data]; n[i] = { ...n[i], [k]: v }; setData(n); };
  const updB = (k, v) => setBal({ ...bal, [k]: v });
  const num = (v) => parseFloat(v) || 0;

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

    // Box 1
    const avgBox1 = filled.reduce((s, r) => s + r.box1, 0) / filled.length;
    const cappedBox1 = Math.min(avgBox1, last.box1);

    // Winst
    const avgWinst = filled.reduce((s, r) => s + r.winst, 0) / filled.length;
    const cappedWinst = Math.min(avgWinst, last.winst);

    // Balanstoets
    const ev = num(bal.ev);
    const ta = num(bal.totaalActiva);
    const va = num(bal.vlActiva);
    const vp = num(bal.vlPassiva);
    const rcRaw = num(bal.rcDga);
    const rcCorr = Math.max(0, rcRaw - 17500); // vrijstelling tot 17.500
    const box3 = num(bal.box3);
    const achtergest = num(bal.achtergest);
    const immat = num(bal.immat);
    const stilleRes = num(bal.stilleReserve);
    const pensioen = num(bal.pensioen);
    const dividend = num(bal.dividend);

    const evCorr = ev - rcCorr + box3 + achtergest - immat + stilleRes + pensioen;
    const taCorr = ta - rcCorr + box3 - immat + stilleRes;
    const vaCorr = va - rcCorr + box3;

    const solvabiliteit = taCorr > 0 ? (evCorr / taCorr) * 100 : 0;
    const liquiditeit = vp > 0 ? vaCorr / vp : (vaCorr > 0 ? 999 : 0);
    const solvOk = solvabiliteit >= 25;
    const liqOk = liquiditeit >= 1;

    const hasBal = ev > 0 || ta > 0;

    // Dubbele balanstoets
    let solvRuimte = 0;
    let liqRuimte = 0;
    let maxUitkering = 0;
    let beschikbareOverwinst = 0;
    let overwinst = 0;

    if (hasBal && solvOk && liqOk) {
      solvRuimte = (evCorr - 0.25 * taCorr) / 0.75;
      liqRuimte = vaCorr - vp;
      maxUitkering = Math.max(0, Math.min(solvRuimte, liqRuimte));
      beschikbareOverwinst = maxUitkering + dividend;
      // Cap op winst laatste jaar
      beschikbareOverwinst = Math.min(beschikbareOverwinst, last.winst);
      // Cap op gemiddelde winst (max laatste jaar)
      beschikbareOverwinst = Math.min(beschikbareOverwinst, cappedWinst);
      overwinst = beschikbareOverwinst * factor;
    } else if (!hasBal) {
      // Geen balanscijfers ingevuld, toon zonder balanstoets
      overwinst = cappedWinst * factor;
    }

    const totaal = cappedBox1 + overwinst;

    setResult({
      rows, cappedBox1, avgBox1, avgWinst: cappedWinst, overwinst, totaal,
      count: filled.length,
      box1Capped: avgBox1 > last.box1,
      winstCapped: avgWinst > last.winst,
      hasBal, evCorr, taCorr, vaCorr, vp, rcCorr,
      solvabiliteit, liquiditeit, solvOk, liqOk,
      solvRuimte, liqRuimte, maxUitkering, beschikbareOverwinst, dividend,
      factor,
    });
  };

  return (
    <Section style={{ paddingTop: 36, paddingBottom: 60 }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: 4, background: nhg ? C.primaryGhost : C.surfaceAlt, border: `1px solid ${nhg ? C.primaryGhostBorder : C.border}`, color: nhg ? C.primary : C.textSec, fontSize: 11, fontWeight: 600, fontFamily: font, marginBottom: 12 }}>{nhg ? "NHG" : "Regulier"}</div>
        <h1 style={{ fontFamily: font, fontSize: 24, fontWeight: 700, margin: "0 0 6px", color: C.text, letterSpacing: "-0.02em" }}>Toetsinkomen DGA / BV</h1>
        <p style={{ fontSize: 14, color: C.textSec, margin: 0, lineHeight: 1.5, fontFamily: font }}>
          Inclusief dubbele balanstoets{nhg ? " conform NHG-toetskaders (75% overwinst)" : " (100% overwinst)"}.
        </p>
      </div>

      {/* Inkomen per jaar */}
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 10, fontFamily: font }}>Inkomen per boekjaar</div>
      {years.map((y, i) => (
        <div key={y} style={{ padding: 20, borderRadius: 10, background: C.surface, border: `1px solid ${C.border}`, marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 12, fontFamily: font }}>Boekjaar {y}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 160px" }}><Input label="DGA-salaris (bruto jaar)" value={data[i].salaris} onChange={(v) => upd(i, "salaris", v)} hint="Jaarlijks bruto salaris" /></div>
            <div style={{ flex: "1 1 160px" }}><Input label="Winst voor belasting BV" value={data[i].winst} onChange={(v) => upd(i, "winst", v)} hint="Resultaat voor Vpb" /></div>
            <div style={{ flex: "1 1 160px" }}><Input label="Bijtelling auto" value={data[i].bijt} onChange={(v) => upd(i, "bijt", v)} hint="Optioneel" /></div>
          </div>
        </div>
      ))}

      {/* Balanstoets */}
      <div style={{ marginTop: 20 }}>
        <SectionHeader title="Dubbele balanstoets (eindbalans laatste boekjaar)" collapsed={!showBal} onToggle={() => setShowBal(!showBal)} />
        {showBal && (
          <div style={{ padding: 20, borderRadius: 10, background: C.surface, border: `1px solid ${C.border}`, marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginBottom: 12, fontFamily: font }}>Balansposten</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{ flex: "1 1 200px" }}><Input label="Eigen vermogen" value={bal.ev} onChange={(v) => updB("ev", v)} /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Totaal activa (balanstotaal)" value={bal.totaalActiva} onChange={(v) => updB("totaalActiva", v)} /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Vlottende activa" value={bal.vlActiva} onChange={(v) => updB("vlActiva", v)} /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Vlottende passiva" value={bal.vlPassiva} onChange={(v) => updB("vlPassiva", v)} hint="Kortlopende schulden" /></div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginTop: 16, marginBottom: 12, fontFamily: font }}>Balanscorrecties</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{ flex: "1 1 200px" }}><Input label="R/C DGA (vordering op DGA)" value={bal.rcDga} onChange={(v) => updB("rcDga", v)} hint="Vrijstelling tot \u20AC17.500" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Box 3 vermogen (liquide)" value={bal.box3} onChange={(v) => updB("box3", v)} hint="Positief op EV, activa en vlottend" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Achtergestelde leningen" value={bal.achtergest} onChange={(v) => updB("achtergest", v)} hint="Positief op EV" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Immateriele vaste activa" value={bal.immat} onChange={(v) => updB("immat", v)} hint="Negatief op EV en balanstotaal" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Stille reserve onroerend goed" value={bal.stilleReserve} onChange={(v) => updB("stilleReserve", v)} hint="Positief op EV en balanstotaal" /></div>
              <div style={{ flex: "1 1 200px" }}><Input label="Pensioen eigen beheer / stamrecht" value={bal.pensioen} onChange={(v) => updB("pensioen", v)} hint="Positief op EV" /></div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginTop: 16, marginBottom: 12, fontFamily: font }}>Reeds uitgekeerd dividend</div>
            <div style={{ maxWidth: 300 }}>
              <Input label="Uitgekeerd dividend laatste boekjaar" value={bal.dividend} onChange={(v) => updB("dividend", v)} hint="Verhoogt beschikbare overwinst" />
            </div>
          </div>
        )}
      </div>

      <button onClick={calc} style={{ width: "100%", padding: "14px", borderRadius: 8, border: "none", background: C.primary, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font, marginTop: 10 }}>
        Berekenen
      </button>

      {result && (
        <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: C.surface, border: `2px solid ${C.primary}` }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 16, fontFamily: font }}>Resultaat</div>

          {/* Box 1 */}
          <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginBottom: 8, fontFamily: font }}>BOX 1 (SALARIS)</div>
          {result.rows.map((r) => (
            <div key={r.year} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 14px", background: C.surfaceAlt, borderRadius: 6, marginBottom: 6, fontSize: 13, fontFamily: font, flexWrap: "wrap", gap: 6 }}>
              <span style={{ color: C.textSec }}>{r.year}</span>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <span style={{ color: C.textTer, fontSize: 11 }}>Salaris: {fmt(r.salaris)}{r.bijt > 0 ? ` \u2212 bijt: ${fmt(r.bijt)}` : ""}</span>
                <span style={{ fontWeight: 600, color: C.text }}>{fmt(r.box1)}</span>
              </div>
            </div>
          ))}
          <ResultLine label="Box 1 (gem. max laatste jaar)" value={fmt(Math.round(result.cappedBox1))} bold accent />

          {/* Balanstoets */}
          {result.hasBal && (
            <>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginTop: 20, marginBottom: 8, fontFamily: font }}>BALANSTOETS</div>
              <ResultLine label="Eigen vermogen na correcties" value={fmt(Math.round(result.evCorr))} />
              <ResultLine label="Balanstotaal na correcties" value={fmt(Math.round(result.taCorr))} />
              {result.rcCorr > 0 && <ResultLine label="R/C DGA correctie (boven \u20AC17.500)" value={fmt(Math.round(result.rcCorr))} />}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${C.borderLight}` }}>
                <span style={{ fontSize: 13, color: C.textSec, fontFamily: font }}>Solvabiliteit</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: font }}>{pct(result.solvabiliteit)}</span>
                  <StatusBadge ok={result.solvOk} label={result.solvOk ? "\u226525%" : "<25%"} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${C.borderLight}` }}>
                <span style={{ fontSize: 13, color: C.textSec, fontFamily: font }}>Liquiditeit</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: font }}>{result.liquiditeit >= 999 ? ">99" : result.liquiditeit.toFixed(2)}</span>
                  <StatusBadge ok={result.liqOk} label={result.liqOk ? "\u22651,00" : "<1,00"} />
                </div>
              </div>

              {result.solvOk && result.liqOk && (
                <>
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginTop: 16, marginBottom: 8, fontFamily: font }}>DUBBELE BALANSTOETS</div>
                  <ResultLine label="Solvabiliteitsruimte" value={fmt(Math.round(result.solvRuimte))} />
                  <ResultLine label="Liquiditeitsruimte (werkkapitaal)" value={fmt(Math.round(result.liqRuimte))} />
                  <ResultLine label="Max. uitkering (laagste)" value={fmt(Math.round(result.maxUitkering))} bold />
                  {result.dividend > 0 && <ResultLine label="+ Reeds uitgekeerd dividend" value={fmt(Math.round(result.dividend))} />}
                  <ResultLine label="Beschikbare overwinst" value={fmt(Math.round(result.beschikbareOverwinst))} bold />
                  <ResultLine label={`Overwinstfactor (${factorLabel})`} value={fmt(Math.round(result.overwinst))} accent bold />
                </>
              )}

              {(!result.solvOk || !result.liqOk) && (
                <div style={{ marginTop: 10, padding: 12, borderRadius: 8, background: C.dangerBg, border: "1px solid #FECACA", fontSize: 12, color: C.danger, fontFamily: font }}>
                  De balanstoets wordt niet gehaald. Er kan geen overwinst worden meegenomen. Het toetsinkomen bestaat alleen uit Box 1 (DGA-salaris). Neem contact op voor advies over mogelijke oplossingen.
                </div>
              )}
            </>
          )}

          {!result.hasBal && (
            <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: C.warnBg, border: `1px solid ${C.warnBorder}`, fontSize: 12, color: C.warn, fontFamily: font }}>
              Geen balanscijfers ingevuld. De overwinst is berekend zonder balanstoets. In de praktijk kan de dubbele balanstoets de overwinst beperken.
            </div>
          )}

          {/* Samenvatting */}
          <div style={{ fontSize: 12, fontWeight: 600, color: C.textSec, marginTop: 20, marginBottom: 8, fontFamily: font }}>TOTAAL</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: C.primaryGhost, borderRadius: 6, fontSize: 13, fontFamily: font }}>
              <span style={{ color: C.primary }}>Box 1 (salaris \u2212 bijtelling)</span>
              <span style={{ fontWeight: 600, color: C.primary }}>{fmt(Math.round(result.cappedBox1))}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: C.primaryGhost, borderRadius: 6, fontSize: 13, fontFamily: font }}>
              <span style={{ color: C.primary }}>Overwinst ({factorLabel}){result.hasBal && result.solvOk && result.liqOk ? " na balanstoets" : ""}</span>
              <span style={{ fontWeight: 600, color: C.primary }}>{fmt(Math.round(result.overwinst))}</span>
            </div>
          </div>

          <div style={{ padding: "14px 18px", borderRadius: 8, background: C.primary, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)", fontFamily: font }}>Indicatief toetsinkomen</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", fontFamily: font }}>{fmt(Math.round(result.totaal))}</span>
          </div>

          <Disclaimer nhg={nhg} />
          <CTA setPage={setPage} />
        </div>
      )}
    </Section>
  );
}

/* ── CONTACT ──────────────────────────────────────────────── */
function Contact() {
  return (
    <Section style={{ paddingTop: 48, paddingBottom: 60 }}>
      <h1 style={{ fontFamily: font, fontSize: 24, fontWeight: 700, margin: "0 0 6px", color: C.text, letterSpacing: "-0.02em" }}>Vrijblijvend adviesgesprek</h1>
      <p style={{ fontSize: 14, color: C.textSec, margin: "0 0 28px", lineHeight: 1.5, fontFamily: font }}>
        Wilt u een professionele inkomensanalyse en begeleiding bij uw hypotheekaanvraag? Neem contact op voor een persoonlijk adviesgesprek.
      </p>
      <div style={{ padding: 24, borderRadius: 12, background: C.surface, border: `1px solid ${C.border}` }}>
        <h2 style={{ fontFamily: font, fontSize: 16, fontWeight: 600, margin: "0 0 16px", color: C.text }}>Wat u kunt verwachten</h2>
        {[
          "Professionele inkomensanalyse op maat",
          "Volledige beoordeling inclusief balanstoets en correcties",
          "Begeleiding bij uw hypotheektraject bij alle geldverstrekkers",
          "Persoonlijk contact en advies over de beste financiering",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10" fill={C.primaryGhost} stroke={C.primary} strokeWidth="1.5" /><path d="M8 12l3 3 5-5" stroke={C.primary} strokeWidth="2" fill="none" /></svg>
            <span style={{ fontSize: 14, color: C.text, fontFamily: font }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, padding: 24, borderRadius: 12, background: C.primary, color: "#fff" }}>
        <h2 style={{ fontFamily: font, fontSize: 16, fontWeight: 600, margin: "0 0 4px" }}>Contact</h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0 0 16px", fontFamily: font }}>Neem vrijblijvend contact op via onderstaande gegevens.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#fff" strokeWidth="1.5" /></svg>
            <span style={{ fontSize: 14, fontFamily: font }}>info@zakelijkinkomenberekenen.nl</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="1.5" /></svg>
            <span style={{ fontSize: 14, fontFamily: font }}>Telefoonnummer op aanvraag</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16, fontSize: 12, color: C.textTer, textAlign: "center", fontFamily: font }}>
        Gecertificeerd hypotheekadviseur \u00B7 Gespecialiseerd in ondernemersfinanciering
      </div>
    </Section>
  );
}

/* ── FOOTER ────────────────────────────────────────────────── */
function Footer({ setPage }) {
  return (
    <footer style={{ background: C.primary, color: "rgba(255,255,255,0.6)", padding: "40px 20px 28px", marginTop: 64, fontFamily: font, fontSize: 13 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginBottom: 28 }}>
          <div style={{ flex: "1 1 260px" }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>zakelijkinkomenberekenen.nl</div>
            <p style={{ lineHeight: 1.55, maxWidth: 320 }}>Bereken snel en eenvoudig uw toetsinkomen als ondernemer voor een hypotheekaanvraag. Gratis en zonder registratie.</p>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 600, marginBottom: 8, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}>Calculators</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span onClick={() => setPage("ib-nhg")} style={{ cursor: "pointer" }}>IB-ondernemer NHG</span>
              <span onClick={() => setPage("ib-reg")} style={{ cursor: "pointer" }}>IB-ondernemer regulier</span>
              <span onClick={() => setPage("dga-nhg")} style={{ cursor: "pointer" }}>DGA / BV NHG</span>
              <span onClick={() => setPage("dga-reg")} style={{ cursor: "pointer" }}>DGA / BV regulier</span>
            </div>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 600, marginBottom: 8, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span onClick={() => setPage("contact")} style={{ cursor: "pointer" }}>Adviesgesprek aanvragen</span>
              <span>Privacyverklaring</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          <span>\u00A9 2026 zakelijkinkomenberekenen.nl</span>
          <span>Disclaimer: indicatieve berekening \u2014 raadpleeg altijd een hypotheekadviseur.</span>
        </div>
      </div>
    </footer>
  );
}

/* ── APP ───────────────────────────────────────────────────── */
export default function Page() {
  const [page, setPage] = useState("home");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      <Nav page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "ib-nhg" && <IBCalc nhg={true} setPage={setPage} />}
      {page === "ib-reg" && <IBCalc nhg={false} setPage={setPage} />}
      {page === "dga-nhg" && <DGACalc nhg={true} setPage={setPage} />}
      {page === "dga-reg" && <DGACalc nhg={false} setPage={setPage} />}
      {page === "contact" && <Contact />}
      <Footer setPage={setPage} />
    </div>
  );
}
