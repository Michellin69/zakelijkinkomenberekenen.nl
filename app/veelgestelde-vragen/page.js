import Link from "next/link";

export const metadata = {
  title: "Veelgestelde vragen over hypotheek en inkomen als ondernemer",
  description: "Antwoorden op veelgestelde vragen over het toetsinkomen van zzp'ers, IB-ondernemers en DGA's: welke jaren tellen mee, auto van de zaak, balanstoets, winst in de BV en meer.",
  alternates: { canonical: "https://zakelijkinkomenberekenen.nl/veelgestelde-vragen" },
};

/* ── Vragen en antwoorden ──────────────────────────────────────
   Tekst aanpassen? Wijzig alleen wat tussen de aanhalingstekens staat.
   Een vraag toevoegen? Kopieer een regel { q: "...", a: "..." }, en plak
   hem eronder in dezelfde groep. */
const GROEPEN = [
  {
    titel: "Algemeen",
    link: null,
    vragen: [
      { q: "Wat is het toetsinkomen voor een ondernemer?", a: "Het toetsinkomen is het inkomen waarmee een geldverstrekker berekent hoeveel hypotheek u maximaal kunt krijgen. Voor een ondernemer is dat geen vast salaris, maar een berekening op basis van de resultaten van uw onderneming over meerdere jaren. Daarbij wordt ook gekeken of uw onderneming financieel gezond genoeg is om dat inkomen te blijven betalen." },
      { q: "Over hoeveel jaren wordt mijn inkomen beoordeeld?", a: "Meestal wordt gekeken naar de cijfers van de laatste drie volledige boekjaren. Bent u korter ondernemer, dan is een hypotheek vaak nog steeds mogelijk, maar gelden er per geldverstrekker andere voorwaarden." },
      { q: "Telt het laatste boekjaar zwaarder mee?", a: "Ja, in de praktijk wel. Vaak wordt het gemiddelde van de afgelopen jaren genomen, maar is het laatste jaar lager dan dat gemiddelde, dan geldt meestal het laatste jaar als maximum. Een dalende lijn in uw resultaten weegt dus direct door in uw toetsinkomen. Sommige geldverstrekkers werken met een gewogen gemiddelde: de winst van het laatste jaar telt drie keer mee, die van het jaar daarvoor twee keer en die van het jaar daarvoor één keer. Voor groeiende ondernemers levert dat vaak een hoger toetsinkomen op, en daarmee meer mogelijkheden voor een hypotheek." },
      { q: "Kan ik ook tussentijdse cijfers van het lopende jaar gebruiken?", a: "Soms wel. Tussentijdse cijfers over het lopende boekjaar kunnen in bepaalde gevallen worden meegenomen om uw inkomen te verhogen. Bij een hypotheek met NHG kunnen de gerealiseerde cijfers tot heden de winst van drie jaar terug vervangen, als die lager was. Sommige geldverstrekkers rekenen ook met een prognose voor het lopende jaar, als er minimaal zes maanden aan cijfers beschikbaar zijn." },
      { q: "Wat is de NHG-grens in 2026?", a: "In 2026 is een hypotheek met NHG mogelijk bij een maximaal aankoopbedrag van € 470.000. Met NHG profiteert u vaak van een lagere rente, en bij gedwongen verkoop met verlies kan NHG onder voorwaarden de restschuld kwijtschelden. De NHG-grens wordt elk jaar opnieuw vastgesteld." },
      { q: "Kan ik inkomen uit mijn onderneming combineren met inkomen uit loondienst?", a: "Ja. Bij een hypotheek met NHG kunnen het inkomen uit onderneming en het inkomen uit loondienst over de afgelopen drie jaar bij elkaar worden opgeteld. Zonder NHG kunnen de rekenregels per geldverstrekker verschillen." },
      { q: "Ik heb in één jaar verlies gemaakt. Kan ik dan nog een hypotheek krijgen?", a: "Dat hangt af van welk jaar het betreft en wat de oorzaak was. Een verlies in een eerder jaar drukt het gemiddelde, maar kan met een goede toelichting en sterkere recente cijfers vaak nog worden opgevangen. Een verlies in het laatste boekjaar maakt een aanvraag lastiger en vraagt om een zorgvuldige onderbouwing." },
      { q: "Ik ben net gestart als ondernemer. Is een hypotheek dan mogelijk?", a: "Dat is mogelijk, maar niet bij elke geldverstrekker, en de voorwaarden verschillen per geldverstrekker. Vaak geldt wel een ondergrens: u moet minimaal zes tot twaalf maanden als ondernemer actief zijn. Eerdere werkervaring in dezelfde branche en een onderbouwde prognose kunnen uw aanvraag daarbij versterken." },
    ],
  },
  {
    titel: "IB-ondernemer en zzp'er",
    link: { href: "/toetsinkomen-zzp", label: "Bereken uw toetsinkomen als IB-ondernemer" },
    vragen: [
      { q: "Van welke winst wordt uitgegaan?", a: "Uitgangspunt is de winst uit onderneming zoals die in uw aangifte inkomstenbelasting staat, vóór aftrek van de zelfstandigenaftrek en de MKB-winstvrijstelling. Die fiscale aftrekposten verlagen uw toetsinkomen dus niet." },
      { q: "Heeft een auto van de zaak invloed op mijn inkomen?", a: "Ja. Bij een hypotheek met NHG wordt de bijtelling voor privégebruik van de auto in mindering gebracht op de winst. Zonder NHG kan de bijtelling bij sommige geldverstrekkers worden opgeteld bij het toetsinkomen. Daardoor is de leencapaciteit zonder NHG soms hoger." },
      { q: "Telt mijn oudedagsreserve mee?", a: "De oudedagsreserve (FOR) heeft geen invloed op de winst die meetelt voor uw inkomen. Bij de beoordeling van uw balans wordt de oudedagsreserve meestal wel bij het eigen vermogen opgeteld, wat uw solvabiliteit verbetert." },
    ],
  },
  {
    titel: "DGA en BV",
    link: { href: "/toetsinkomen-dga", label: "Bereken uw toetsinkomen als DGA" },
    vragen: [
      { q: "Wanneer word ik voor een hypotheek als DGA gezien?", a: "Bij de meeste geldverstrekkers bent u DGA als u 5% of meer van de aandelen in een BV bezit, direct of via een holding. Enkele geldverstrekkers hanteren een hogere grens. Als DGA wordt uw inkomen beoordeeld als ondernemersinkomen, ook al ontvangt u een salaris uit uw BV." },
      { q: "Hoe wordt mijn inkomen als DGA berekend?", a: "De basis is het salaris dat u uit uw BV ontvangt. Daarnaast kan een deel van de winst van de BV worden meegeteld, maar alleen als de BV die winst ook daadwerkelijk aan u zou kunnen uitkeren zonder in financiële problemen te komen." },
      { q: "Telt de winst in mijn BV mee, ook als ik die niet uitkeer?", a: "Vaak wel, deels. Er wordt dan beoordeeld hoeveel de BV maximaal kan uitkeren met behoud van voldoende eigen vermogen en voldoende geld om de kortlopende schulden te betalen. Dat heet de dubbele balanstoets. Alleen het deel dat binnen beide grenzen past, telt mee voor uw inkomen." },
      { q: "Wat betekent een rekening-courant met de DGA voor mijn hypotheek?", a: "Heeft u geld van uw BV geleend via een rekening-courant, dan is dat een vordering van de BV op u. Geldverstrekkers corrigeren daar vaak voor, omdat dat geld niet vrij beschikbaar is voor de onderneming. Een hoge rekening-courant kan daardoor uw balansratio's en de mee te tellen winst verlagen." },
      { q: "Ik heb een holding en een werkmaatschappij. Waar wordt naar gekeken?", a: "Meestal wordt naar het geheel gekeken: de holding en de BV's waarin zij een belang heeft. Vaak vraagt de geldverstrekker de jaarrekeningen van alle betrokken BV's, of één geconsolideerde jaarrekening. Op basis van de belangen in de verschillende BV's en eventueel het dividendbeleid wordt bepaald welke overwinst kan worden meegenomen." },
    ],
  },
  {
    titel: "Balanstoets",
    link: null,
    vragen: [
      { q: "Wat is de balanstoets?", a: "Met de balanstoets beoordeelt de geldverstrekker of uw onderneming financieel gezond is. Er wordt gekeken naar de solvabiliteit (hoeveel van het totale vermogen eigen vermogen is) en de liquiditeit (of de onderneming haar kortlopende schulden kan betalen uit haar vlottende middelen)." },
      { q: "Mijn solvabiliteit is laag. Betekent dat dat ik geen hypotheek kan krijgen?", a: "Niet automatisch. Een lage solvabiliteit maakt het lastiger om winst mee te tellen voor uw inkomen, maar sluit een hypotheek niet per definitie uit. Correcties kunnen het beeld verbeteren, bijvoorbeeld achtergestelde leningen, privévermogen of stille reserves in vastgoed. Een goede analyse van uw balans maakt hier vaak het verschil." },
    ],
  },
  {
    titel: "Over de calculator en ons advies",
    link: { href: "/contact", label: "Plan een kennismakingsgesprek" },
    vragen: [
      { q: "Hoe betrouwbaar is de uitkomst van de calculator?", a: "De calculator geeft een indicatie op basis van gangbare rekenregels. Iedere geldverstrekker hanteert eigen normen en uitzonderingen, en details in uw jaarcijfers kunnen de uitkomst flink veranderen. Gebruik de uitkomst als startpunt; voor een aanvraag is een professionele inkomensanalyse nodig." },
      { q: "Zijn mijn gegevens veilig?", a: "Ja. Alle berekeningen worden volledig in uw eigen browser uitgevoerd. Er worden geen gegevens naar een server verstuurd en er wordt niets opgeslagen." },
      { q: "Wat kost een kennismakingsgesprek?", a: "Het kennismakingsgesprek is kosteloos en vrijblijvend. We bespreken uw situatie en wat er nodig is voor uw hypotheekaanvraag, zodat u weet waar u aan toe bent." },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROEPEN.flatMap((g) =>
    g.vragen.map((v) => ({
      "@type": "Question",
      name: v.q,
      acceptedAnswer: { "@type": "Answer", text: v.a },
    }))
  ),
};

export default function Page() {
  return (
    <section style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px 64px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, margin: "0 0 10px", color: "var(--text)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
        Veelgestelde vragen
      </h1>
      <p style={{ fontSize: 15, color: "var(--text-sec)", margin: "0 0 36px", lineHeight: 1.6, maxWidth: 620 }}>
        Antwoorden op de vragen die ondernemers het vaakst stellen over hun inkomen en een hypotheek. Staat uw vraag er niet bij? Neem gerust contact op.
      </p>

      {GROEPEN.map((g) => (
        <div key={g.titel} style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "var(--text)", letterSpacing: "-0.02em" }}>{g.titel}</h2>
          {g.vragen.map((v) => (
            <details key={v.q} className="faq-item" style={{ background: "var(--surface)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-sm)", marginBottom: 8 }}>
              <summary style={{ padding: "16px 20px", fontSize: 15, fontWeight: 600, color: "var(--text)", cursor: "pointer", lineHeight: 1.4 }}>
                {v.q}
              </summary>
              <p style={{ padding: "0 20px 18px", margin: 0, fontSize: 14, color: "var(--text-sec)", lineHeight: 1.7 }}>{v.a}</p>
            </details>
          ))}
          {g.link && (
            <Link href={g.link.href} style={{ display: "inline-block", marginTop: 6, fontSize: 14, fontWeight: 600, color: "var(--primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              {g.link.label}
            </Link>
          )}
        </div>
      ))}
    </section>
  );
}
