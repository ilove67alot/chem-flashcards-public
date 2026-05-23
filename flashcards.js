// HKDSE Chemistry Section 5 – Fossil Fuels and Carbon Compounds
// Flashcard data: { id, topic, question, answer, difficulty }

const flashcards = [

  // ── 5.1 Hydrocarbons from Fossil Fuels ──────────────────────────────────
  {
    id: 1,
    topic: "Fossil Fuels",
    question: "What are the three main fossil fuels?",
    answer: "Natural gas, petroleum (crude oil), and coal.",
    difficulty: "easy"
  },
  {
    id: 2,
    topic: "Fossil Fuels",
    question: "How are fossil fuels formed?",
    answer: "From large quantities of dead marine organisms (planktons, algae) buried under sedimentary rock and subjected to intense heat and pressure over a long time.",
    difficulty: "easy"
  },
  {
    id: 3,
    topic: "Fossil Fuels",
    question: "What is a fuel?",
    answer: "A substance that burns in oxygen, converting stored chemical energy into heat (an exothermic reaction).",
    difficulty: "easy"
  },
  {
    id: 4,
    topic: "Fossil Fuels",
    question: "What is petroleum (crude oil)?",
    answer: "A mixture of thousands of hydrocarbons with different molecular sizes (mainly C₁–C₄₀ alkanes, small amounts of alkenes and alkynes).",
    difficulty: "easy"
  },
  {
    id: 5,
    topic: "Fractional Distillation",
    question: "Why is fractional distillation used on crude oil?",
    answer: "Crude oil is a complex mixture. Fractional distillation separates it into useful fractions based on different boiling points (which depend on molecular size).",
    difficulty: "easy"
  },
  {
    id: 6,
    topic: "Fractional Distillation",
    question: "Why do larger hydrocarbon molecules have higher boiling points?",
    answer: "Larger molecules have stronger intermolecular van der Waals' forces, so more energy is needed to separate them.",
    difficulty: "medium"
  },
  {
    id: 7,
    topic: "Fractional Distillation",
    question: "In a fractionating tower, where do high-boiling-point fractions collect?",
    answer: "At the bottom (lower levels), because they condense first. Low-boiling-point fractions rise to higher, cooler levels.",
    difficulty: "medium"
  },
  {
    id: 8,
    topic: "Fractional Distillation",
    question: "Name the petroleum fraction with C₁–C₄, its boiling point range, and main use.",
    answer: "Refinery gas; b.p. below 40 °C; used as LPG (liquefied petroleum gas).",
    difficulty: "medium"
  },
  {
    id: 9,
    topic: "Fractional Distillation",
    question: "Name the petroleum fraction with C₅–C₁₀, its b.p. range, and main uses.",
    answer: "Gasoline/petrol and naphtha; b.p. 40–170 °C; used as motor car fuel and to make town gas/chemicals.",
    difficulty: "medium"
  },
  {
    id: 10,
    topic: "Fractional Distillation",
    question: "Name the petroleum fraction with C₁₀–C₁₄ and its main use.",
    answer: "Kerosene (paraffin oil); b.p. 170–250 °C; used as jet fuel and domestic fuel.",
    difficulty: "medium"
  },
  {
    id: 11,
    topic: "Fractional Distillation",
    question: "What happens to color, viscosity, and ease of ignition as petroleum fractions get heavier?",
    answer: "Color changes from colorless to brown; viscosity increases; ease of ignition decreases; flame becomes more sooty (less complete combustion).",
    difficulty: "medium"
  },
  {
    id: 12,
    topic: "Fractional Distillation",
    question: "Why is rocksil used in the laboratory fractional distillation of crude oil?",
    answer: "To hold the crude oil, ensure uniform heating, and prevent the oil from boiling too rapidly.",
    difficulty: "medium"
  },

  // ── 5.2 Environmental Problems ──────────────────────────────────────────
  {
    id: 13,
    topic: "Air Pollution",
    question: "State THREE pollutants produced by incomplete combustion of fuels.",
    answer: "Carbon monoxide (CO), carbon particles (soot), and unconsumed hydrocarbons.",
    difficulty: "easy"
  },
  {
    id: 14,
    topic: "Air Pollution",
    question: "Why is carbon monoxide (CO) toxic to humans?",
    answer: "CO binds with haemoglobin to form stable carboxyhaemoglobin, preventing haemoglobin from carrying oxygen. At low concentrations → dizziness/headache; at high concentrations → death.",
    difficulty: "medium"
  },
  {
    id: 15,
    topic: "Air Pollution",
    question: "What is the chemical test for carbon monoxide (CO)?",
    answer: "CO turns citrated blood from dull red to bright/cherry red.",
    difficulty: "medium"
  },
  {
    id: 16,
    topic: "Air Pollution",
    question: "State THREE ways to reduce CO emissions.",
    answer: "(1) Burn fuel at higher temperature with sufficient air. (2) Use a catalytic converter (cars with unleaded petrol). (3) Use alcohol or hydrogen as fuel (burn more completely).",
    difficulty: "medium"
  },
  {
    id: 17,
    topic: "Air Pollution",
    question: "What is the source of sulphur dioxide (SO₂) pollution?",
    answer: "Combustion of sulphur-containing impurities in fuel oil, diesel, and coal.",
    difficulty: "easy"
  },
  {
    id: 18,
    topic: "Air Pollution",
    question: "Give TWO harmful effects of SO₂.",
    answer: "(1) Toxic; causes respiratory tract disease. (2) Dissolves in rainwater to form sulphurous/sulphuric acid → acid rain.",
    difficulty: "easy"
  },
  {
    id: 19,
    topic: "Air Pollution",
    question: "How do wet scrubbers remove SO₂? Give the equation.",
    answer: "Basic CaO or Ca(OH)₂ reacts with acidic SO₂:\nCa(OH)₂(aq) + SO₂(g) → CaSO₃(s) + H₂O(l)\nThe CaSO₃ can be further oxidised to CaSO₄, used in cement.",
    difficulty: "hard"
  },
  {
    id: 20,
    topic: "Air Pollution",
    question: "How and why are nitrogen oxides (NOₓ) produced during combustion?",
    answer: "At very high combustion temperatures, N₂ and O₂ in air combine:\nN₂ + O₂ → 2NO → 2NO₂\nThis is a thermally-driven reaction.",
    difficulty: "medium"
  },
  {
    id: 21,
    topic: "Air Pollution",
    question: "What is photochemical smog and how does it form?",
    answer: "In the presence of sunlight, NOₓ reacts with unconsumed hydrocarbons to form yellow, irritating photochemical smog that reduces visibility and attacks the respiratory system.",
    difficulty: "medium"
  },
  {
    id: 22,
    topic: "Air Pollution",
    question: "How does a catalytic converter work? Give the equation for CO + NO.",
    answer: "Platinum catalyst converts pollutants:\n2CO(g) + 2NO(g) → 2CO₂(g) + N₂(g)\nIt removes CO, NO, and unburned hydrocarbons. Only works with unleaded petrol.",
    difficulty: "hard"
  },
  {
    id: 23,
    topic: "Air Pollution",
    question: "Give TWO disadvantages of the Pt catalytic converter.",
    answer: "(1) Lead (Pb) poisons the Pt catalyst — only cars using unleaded petrol can install it. (2) Too expensive.",
    difficulty: "medium"
  },
  {
    id: 24,
    topic: "Acid Rain",
    question: "What is acid rain and what is its pH?",
    answer: "Rain with pH below 5.7 (normal rain pH ≈ 5.7 due to dissolved CO₂). Acid rain is caused by SO₂ and NOₓ dissolving in rainwater to form stronger acids.",
    difficulty: "easy"
  },
  {
    id: 25,
    topic: "Acid Rain",
    question: "State FOUR harmful effects of acid rain.",
    answer: "(1) Destroys vegetation (washes away Mg²⁺, Ca²⁺; dissolves toxic Al³⁺, Cu²⁺). (2) Destroys aquatic life. (3) Corrodes metals and speeds up rusting of iron structures. (4) Attacks limestone/marble buildings (dissolves CaCO₃).",
    difficulty: "medium"
  },
  {
    id: 26,
    topic: "Acid Rain",
    question: "Write the equation for how H₂SO₄ attacks limestone.",
    answer: "H₂SO₄(aq) + CaCO₃(s) → CaSO₄(s) + CO₂(g) + H₂O(l)",
    difficulty: "hard"
  },

  // ── 5.3 Homologous Series & Naming ──────────────────────────────────────
  {
    id: 27,
    topic: "Homologous Series",
    question: "Define a homologous series.",
    answer: "A family of related organic compounds with the same general formula, similar chemical properties (same functional group), and physical properties that vary gradually. Each member differs from the next by a –CH₂– unit.",
    difficulty: "medium"
  },
  {
    id: 28,
    topic: "Homologous Series",
    question: "Give the general formula, functional group, and an example of each: alkane, alkene, alkanol, alkanoic acid.",
    answer: "Alkane: CₙH₂ₙ₊₂, no functional group, e.g. CH₄\nAlkene: CₙH₂ₙ, C=C double bond, e.g. C₂H₄\nAlkanol: CₙH₂ₙ₊₁OH, –OH, e.g. C₂H₅OH\nAlkanoic acid: CₙH₂ₙ₊₁COOH, –COOH, e.g. CH₃COOH",
    difficulty: "medium"
  },
  {
    id: 29,
    topic: "Homologous Series",
    question: "Why do boiling points and viscosity increase as the number of carbon atoms increases in a homologous series?",
    answer: "Larger molecules have stronger van der Waals' intermolecular forces, requiring more energy to overcome, so boiling point and viscosity increase.",
    difficulty: "medium"
  },
  {
    id: 30,
    topic: "Homologous Series",
    question: "What are structural isomers?",
    answer: "Compounds with the same molecular formula but different structural formulae. E.g. butane and 2-methylpropane are both C₄H₁₀.",
    difficulty: "easy"
  },
  {
    id: 31,
    topic: "IUPAC Naming",
    question: "What do the stem names meth-, eth-, prop-, but-, pent- represent?",
    answer: "The number of carbons in the parent chain: meth=1, eth=2, prop=3, but=4, pent=5.",
    difficulty: "easy"
  },
  {
    id: 32,
    topic: "IUPAC Naming",
    question: "How is an alkene named? Give the rule for numbering the chain.",
    answer: "Root name + '-n-' + '-ene'. Number the chain so the C=C bond gets the lowest possible number. E.g. CH₃CH=CH₂ = propene; CH₃CH₂CH=CH₂ = but-1-ene.",
    difficulty: "medium"
  },
  {
    id: 33,
    topic: "IUPAC Naming",
    question: "How is an alkanol named? Give an example.",
    answer: "Root name + '-an-' + '-ol' with position number. E.g. CH₃CH₂CH₂OH = propan-1-ol (NOT propanol).",
    difficulty: "medium"
  },
  {
    id: 34,
    topic: "IUPAC Naming",
    question: "How is an alkanoic acid named? Why is no position number needed for –COOH?",
    answer: "Root name + '-anoic acid'. No number needed because the –COOH carbon is always assigned C-1. E.g. CH₃COOH = ethanoic acid.",
    difficulty: "medium"
  },

  // ── 5.4 General Properties of Organic Compounds ─────────────────────────
  {
    id: 35,
    topic: "Organic Properties",
    question: "State THREE general properties of organic compounds.",
    answer: "(1) Usually insoluble in water (except lower alkanols and alkanoic acids with C₁–C₄). (2) Usually flammable (except haloalkanes). (3) Boiling point, viscosity, and density increase as carbon chain length increases.",
    difficulty: "medium"
  },
  {
    id: 36,
    topic: "Organic Properties",
    question: "Why does crude oil remain a liquid despite >55% of its molecules being solid hydrocarbons (>C₁₇)?",
    answer: "A mixture of different molecular sizes leads to poor packing of molecules, lowering the overall melting point.",
    difficulty: "hard"
  },

  // ── 5.5 Alkanes ──────────────────────────────────────────────────────────
  {
    id: 37,
    topic: "Alkanes",
    question: "What does 'saturated' mean for a hydrocarbon?",
    answer: "A saturated hydrocarbon has no carbon–carbon multiple bonds (no C=C or C≡C); all carbon–carbon bonds are single bonds.",
    difficulty: "easy"
  },
  {
    id: 38,
    topic: "Alkanes",
    question: "Write the balanced equation for the complete combustion of ethane (C₂H₆).",
    answer: "2C₂H₆(g) + 7O₂(g) → 4CO₂(g) + 6H₂O(l)  ΔH < 0",
    difficulty: "medium"
  },
  {
    id: 39,
    topic: "Alkanes",
    question: "Under what conditions do alkanes react with halogens? What type of reaction is it?",
    answer: "In the presence of diffused sunlight (UV light), at room temperature. It is a free-radical substitution reaction (e.g. CH₄ + Cl₂ → CH₃Cl + HCl).",
    difficulty: "medium"
  },
  {
    id: 40,
    topic: "Alkanes",
    question: "State the THREE stages of the free-radical mechanism for bromination of methane.",
    answer: "1. Initiation: Br₂ → 2Br• (UV light breaks Br–Br bond)\n2. Propagation: CH₄ + Br• → CH₃• + HBr; CH₃• + Br₂ → CH₃Br + Br•\n3. Termination: Two radicals combine, e.g. 2CH₃• → C₂H₆; CH₃• + Br• → CH₃Br",
    difficulty: "hard"
  },
  {
    id: 41,
    topic: "Alkanes",
    question: "Why does chlorination of methane give a mixture of products when excess Cl₂ is used?",
    answer: "The product CH₃Cl can undergo further substitution, producing CH₂Cl₂, CHCl₃, and CCl₄, so a mixture results.",
    difficulty: "medium"
  },
  {
    id: 42,
    topic: "Alkanes",
    question: "Why should diffused sunlight (not direct sunlight) be used in chlorination of methane?",
    answer: "Direct sunlight causes a violent reaction: CH₄ + Cl₂ → C(s) + 4HCl(g), forming soot and HCl explosively.",
    difficulty: "medium"
  },
  {
    id: 43,
    topic: "Alkanes",
    question: "What is cracking? What are its products?",
    answer: "Cracking is the thermal and/or catalytic breakage of large (long-chain) hydrocarbon molecules into smaller ones. Products include smaller alkanes, alkenes, and hydrogen.",
    difficulty: "easy"
  },
  {
    id: 44,
    topic: "Alkanes",
    question: "Can a large alkane be cracked into two smaller alkanes only? Why?",
    answer: "No. For each cracking reaction, at least one product must be an alkene (a C–C double bond is formed due to hydrogen loss).",
    difficulty: "medium"
  },
  {
    id: 45,
    topic: "Alkanes",
    question: "Compare thermal cracking vs catalytic cracking (catalyst, temperature, pressure).",
    answer: "Thermal: no catalyst, >700 °C, ~30 atm, fair product control.\nCatalytic: Al₂O₃/SiO₂ catalyst, ~500 °C, ~1 atm, better product control.",
    difficulty: "hard"
  },
  {
    id: 46,
    topic: "Alkanes",
    question: "State TWO precautions for the laboratory cracking experiment.",
    answer: "(1) Remove the delivery tube from water BEFORE stopping heating, to prevent water sucking back and cracking the hot glass. (2) Do NOT heat the sample oil directly — heat the Al₂O₃/broken porcelain catalyst instead.",
    difficulty: "medium"
  },
  {
    id: 47,
    topic: "Alkanes",
    question: "Why is cracking industrially important?",
    answer: "(1) Converts excess heavy fractions into lighter, more useful fractions (e.g. petrol). (2) Produces alkenes as raw materials for plastics manufacture.",
    difficulty: "easy"
  },

  // ── 5.6 Alkenes ──────────────────────────────────────────────────────────
  {
    id: 48,
    topic: "Alkenes",
    question: "What does 'unsaturated' mean for a hydrocarbon?",
    answer: "It contains at least one carbon–carbon multiple bond (C=C double bond for alkenes or C≡C for alkynes).",
    difficulty: "easy"
  },
  {
    id: 49,
    topic: "Alkenes",
    question: "Define an addition reaction.",
    answer: "A reaction in which two molecules combine to give only one product molecule. The C=C double bond breaks and atoms add across it.",
    difficulty: "easy"
  },
  {
    id: 50,
    topic: "Alkenes",
    question: "What is the test for unsaturation (alkene/alkyne) using bromine? State observations for alkene vs alkane.",
    answer: "Shake with bromine dissolved in CCl₄ in the ABSENCE of light.\n• Alkene: orange Br₂ decolorises quickly → colourless product (dibromoalkane).\n• Alkane: no decolorisation in the dark (only reacts in light via substitution).",
    difficulty: "medium"
  },
  {
    id: 51,
    topic: "Alkenes",
    question: "Write the equation for ethene reacting with bromine in CCl₄.",
    answer: "CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (1,2-dibromoethane)\n(orange → colourless)  ΔH < 0",
    difficulty: "medium"
  },
  {
    id: 52,
    topic: "Alkenes",
    question: "What is the test for alkenes using KMnO₄? State conditions and observations.",
    answer: "Cold dilute (1%) neutral/alkaline/acidified KMnO₄:\n• Alkene: purple KMnO₄ decolorises; brown ppt (MnO₂) forms; diol product.\n• Hot/concentrated acidified KMnO₄: diol further oxidised to carboxylic acids.",
    difficulty: "medium"
  },
  {
    id: 53,
    topic: "Alkenes",
    question: "How is ethanol manufactured industrially from ethene?",
    answer: "Catalytic hydration:\nCH₂=CH₂(g) + H₂O(g) → CH₃CH₂OH(g)\nConditions: 300 °C, 65 atm, H₃PO₄ catalyst.",
    difficulty: "medium"
  },
  {
    id: 54,
    topic: "Alkenes",
    question: "What conditions are required for catalytic hydrogenation of alkenes? Give an application.",
    answer: "Finely divided Pt, Pd, or Ni catalyst; 25–200 °C; ~5 atm pressure.\nApplication: hardening vegetable oils to produce margarine (adding H₂ across C=C bonds).",
    difficulty: "medium"
  },
  {
    id: 55,
    topic: "Alkenes",
    question: "Why do vegetable oils have lower melting points than animal fats?",
    answer: "Oils have more unsaturated hydrocarbon chains (C=C bonds), so molecules pack less efficiently → lower melting point. Fats have more saturated chains → pack more easily → higher melting point.",
    difficulty: "medium"
  },

  // ── 5.7 & 5.8 Addition Polymers ──────────────────────────────────────────
  {
    id: 56,
    topic: "Polymers",
    question: "Define: monomer, polymer, repeating unit, and addition polymerisation.",
    answer: "Monomer: smallest unit used to build the polymer.\nPolymer: very large molecule (Mr > 5000) made of many monomers.\nRepeating unit: smallest structural unit that repeats throughout the chain.\nAddition polymerisation: alkene monomers join together; no small molecule is eliminated.",
    difficulty: "medium"
  },
  {
    id: 57,
    topic: "Polymers",
    question: "What must be true of the monomer for addition polymerisation?",
    answer: "The monomer MUST be unsaturated (contain a C=C double bond).",
    difficulty: "easy"
  },
  {
    id: 58,
    topic: "Polymers",
    question: "Write the equation for the addition polymerisation of ethene to form polyethene.",
    answer: "n CH₂=CH₂ → [–CH₂–CH₂–]ₙ (polyethene)\nConditions: high temperature, high pressure, catalyst.",
    difficulty: "easy"
  },
  {
    id: 59,
    topic: "Polymers",
    question: "Do the polymer and its monomer have the same percentage composition by mass? Explain.",
    answer: "YES. Addition polymerisation adds no atoms — only bonds change. E.g. ethene has 85.7% C, so polyethene also has 85.7% C.",
    difficulty: "medium"
  },
  {
    id: 60,
    topic: "Polymers",
    question: "State the monomer, key properties, and uses of polyethene (PE).",
    answer: "Monomer: ethene (CH₂=CH₂).\nProperties: transparent, waxy, soft/flexible (LDPE) or rigid (HDPE), non-toxic, low m.p., flammable.\nUses: LDPE → plastic bags, food wrap; HDPE → bottles, bowls, lunch boxes.",
    difficulty: "medium"
  },
  {
    id: 61,
    topic: "Polymers",
    question: "State the monomer, key properties, and uses of polyvinyl chloride (PVC).",
    answer: "Monomer: chloroethene (CH₂=CHCl).\nProperties: transparent, hard, weather-resistant, not easily burned, denser than water. May contain toxic plasticiser or residual monomer.\nUses: electrical insulation, water pipes, rain-coats, floor tiles.",
    difficulty: "medium"
  },
  {
    id: 62,
    topic: "Polymers",
    question: "Why is burning PVC by incineration a serious environmental problem?",
    answer: "Burning PVC produces toxic gases including dioxin and hydrogen chloride (HCl) or chlorine.",
    difficulty: "medium"
  },
  {
    id: 63,
    topic: "Polymers",
    question: "State the monomer, key properties, and uses of polystyrene (PS).",
    answer: "Monomer: styrene (phenylethene, C₆H₅CH=CH₂).\nProperties: transparent, hard; expanded form is soft (shock absorber), heat-insulating, low toxicity.\nUses: packaging foam, insulating food containers, toys, refrigerator parts.",
    difficulty: "medium"
  },
  {
    id: 64,
    topic: "Polymers",
    question: "State the monomer and main uses of Perspex (poly(methyl 2-methylpropenoate)).",
    answer: "Monomer: methyl 2-methylpropenoate.\nProperties: highly transparent, hard, tough.\nUses: safety glass (cars, aircraft), camera lenses, optical fibres, advertising signs.",
    difficulty: "medium"
  },
  {
    id: 65,
    topic: "Polymers",
    question: "What is Teflon? Give its monomer and a notable property.",
    answer: "Teflon is poly(tetrafluoroethene) / PTFE.\nMonomer: tetrafluoroethene (CF₂=CF₂).\nNotable property: extremely non-stick and chemically resistant; used as non-stick coating on cooking pans.",
    difficulty: "medium"
  },
  {
    id: 66,
    topic: "Polymers",
    question: "Why is the relative molecular mass of a polymer expressed as a range?",
    answer: "Because a polymer sample is a mixture of chains with different lengths, giving a range of molecular masses rather than a single fixed value.",
    difficulty: "medium"
  },
  {
    id: 67,
    topic: "Polymers",
    question: "Briefly describe how polypropene can be produced from naphtha. (3 steps)",
    answer: "1. Cracking naphtha → mixture of hydrocarbons including propene.\n2. Fractional distillation of gaseous products → isolate propene.\n3. Addition polymerisation of propene (high T, high P, catalyst) → polypropene.",
    difficulty: "hard"
  },

  // ── Bonus: Key Equations ─────────────────────────────────────────────────
  {
    id: 68,
    topic: "Key Equations",
    question: "Write the equation for complete combustion of methane (CH₄).",
    answer: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)  ΔH < 0",
    difficulty: "easy"
  },
  {
    id: 69,
    topic: "Key Equations",
    question: "Write the equation for the formation of sulphuric acid from SO₂ in the atmosphere.",
    answer: "SO₂ + H₂O → H₂SO₃; then 2H₂SO₃ + O₂ → 2H₂SO₄\n(Sulphur dioxide → sulphurous acid → sulphuric acid)",
    difficulty: "hard"
  },
  {
    id: 70,
    topic: "Key Equations",
    question: "Write the equation for the formation of acids from NO₂ in rainwater.",
    answer: "2NO₂(g) + H₂O(l) → HNO₂(aq) + HNO₃(aq)\n(nitrous acid + nitric acid → acid rain)",
    difficulty: "hard"
  }
];

// Topics list (auto-derived)
const allTopics = ["All", ...new Set(flashcards.map(f => f.topic))];
