// Fictional demo content for a fictional developer. No real company, listing,
// or price is represented here. Every Unsplash ID below was fetched and viewed
// before use — no guessed IDs.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  heroVilla: 'photo-1523217582562-09d0def993a6',
  villaPoolHill: 'photo-1580587771525-78b9dba3b914',
  villaPoolBright: 'photo-1600596542815-ffad4c1539a9',
  villaPalms: 'photo-1512917774080-9991f1c4c750',
  villaWood: 'photo-1613490493576-7fde63acd811',
  houseCorten: 'photo-1600047509807-ba8f99d2cdde',
  houseTimber: 'photo-1600566753190-17f0baa2a6c3',
  houseDusk: 'photo-1600585154340-be6161a56a0c',
  interiorLiving: 'photo-1600607687939-ce8a6c25118c',
  interiorLounge: 'photo-1600210492486-724fe5c67fb0',
  interiorStair: 'photo-1502005229762-cf1b2da7c5d6',
};

export const imgUrl = img;

export const PROPERTIES = [
  {
    id: 'casa-pinar',
    name: 'Casa Pinar',
    location: 'Jávea',
    province: 'Alicante',
    price: 1_285_000,
    beds: 4,
    baths: 3,
    m2: 310,
    plot: 900,
    type: 'Villa',
    stage: 'Completed',
    handover: 'Available now',
    cover: IMG.heroVilla,
    gallery: [IMG.heroVilla, IMG.interiorStair, IMG.interiorLiving],
    blurb:
      'A stepped white volume set back into the pines, arranged so every room opens onto shade rather than glare.',
    features: [
      'South-west orientation, 900 m² plot',
      'Structural warranty to 2036',
      'Underfloor climate control throughout',
      'Price fixed at contract — no stage increases',
    ],
    alt: 'Casa Pinar: a white cubist villa stepped between umbrella pines under a hard blue sky',
  },
  {
    id: 'mirador-altea',
    name: 'Mirador de Altea',
    location: 'Altea',
    province: 'Alicante',
    price: 940_000,
    beds: 3,
    baths: 2,
    m2: 214,
    plot: 540,
    type: 'Villa',
    stage: 'Under construction',
    handover: 'Handover Q3 2027',
    cover: IMG.villaPoolHill,
    gallery: [IMG.villaPoolHill, IMG.interiorLounge, IMG.interiorLiving],
    blurb:
      'Cut into the hillside above the old town, with the pool deck cantilevered out to hold the bay view.',
    features: [
      'Infinity deck facing the Bay of Altea',
      'Structure complete, interiors from March',
      'Staged payments held in escrow',
      'Price fixed at contract — no stage increases',
    ],
    alt: 'Mirador de Altea: a white hillside villa with a rectangular pool overlooking the bay',
  },
  {
    id: 'villa-sal',
    name: 'Villa Sal',
    location: 'Estepona',
    province: 'Málaga',
    price: 1_650_000,
    beds: 5,
    baths: 4,
    m2: 402,
    plot: 1_150,
    type: 'Villa',
    stage: 'Completed',
    handover: 'Available now',
    cover: IMG.villaPoolBright,
    gallery: [IMG.villaPoolBright, IMG.interiorLiving, IMG.interiorLounge],
    blurb:
      'Three stacked slabs with a roof terrace that runs the full width of the plot. Built for long light.',
    features: [
      'Full-width roof terrace and summer kitchen',
      '1,150 m² plot with mature planting',
      'Delivered March 2025, snagging closed',
      'Price fixed at contract — no stage increases',
    ],
    alt: 'Villa Sal: a bright white three-storey villa with a long pool and open sky',
  },
  {
    id: 'las-palmeras',
    name: 'Las Palmeras',
    location: 'Mijas Costa',
    province: 'Málaga',
    price: 615_000,
    beds: 3,
    baths: 2,
    m2: 168,
    plot: 320,
    type: 'Townhouse',
    stage: 'Under construction',
    handover: 'Handover Q1 2027',
    cover: IMG.villaPalms,
    gallery: [IMG.villaPalms, IMG.interiorLounge],
    blurb:
      'A terrace of eleven houses sharing a garden spine, each with its own pool and no overlooking windows.',
    features: [
      'Eleven houses, four remaining',
      'Private pool to every house',
      'Shared garden maintained by the community',
      'Price fixed at contract — no stage increases',
    ],
    alt: 'Las Palmeras: a white townhouse with palms and a turquoise pool',
  },
  {
    id: 'costa-lumina',
    name: 'Costa Lúmina',
    location: 'Calpe',
    province: 'Alicante',
    price: 498_000,
    beds: 2,
    baths: 2,
    m2: 112,
    plot: null,
    type: 'Apartment',
    stage: 'Under construction',
    handover: 'Handover Q4 2026',
    cover: IMG.villaWood,
    gallery: [IMG.villaWood, IMG.interiorLiving],
    blurb:
      'Twenty-four apartments over four floors, each with a nine-metre terrace facing the Peñón.',
    features: [
      'Nine-metre terrace to every unit',
      'Communal pool and bicycle store',
      'Twenty-four units, nine remaining',
      'Price fixed at contract — no stage increases',
    ],
    alt: 'Costa Lúmina: a modern apartment building with timber soffits above a long pool',
  },
  {
    id: 'atico-sotogrande',
    name: 'Ático Sotogrande',
    location: 'Sotogrande',
    province: 'Cádiz',
    price: 2_150_000,
    beds: 4,
    baths: 4,
    m2: 288,
    plot: null,
    type: 'Penthouse',
    stage: 'Completed',
    handover: 'Available now',
    cover: IMG.houseCorten,
    gallery: [IMG.houseCorten, IMG.interiorStair, IMG.interiorLounge],
    blurb:
      'The top two floors of a weathered-steel block by the marina, with a private stair to the roof.',
    features: [
      'Private roof terrace, 96 m²',
      'Two parking spaces and a store',
      'Marina berth available separately',
      'Price fixed at contract — no stage increases',
    ],
    alt: 'Ático Sotogrande: a weathered steel and white apartment block with sharp shadows',
  },
  {
    id: 'casa-tramuntana',
    name: 'Casa Tramuntana',
    location: 'Dénia',
    province: 'Alicante',
    price: 875_000,
    beds: 4,
    baths: 3,
    m2: 236,
    plot: 610,
    type: 'Villa',
    stage: 'Planning',
    handover: 'Handover 2028',
    cover: IMG.houseTimber,
    gallery: [IMG.houseTimber, IMG.interiorLiving],
    blurb:
      'Timber and render over a walled courtyard, sited to take the north wind on its blank side.',
    features: [
      'Licence granted, groundworks from June',
      'Walled courtyard with mature olive',
      'Reservation refundable until licence stage',
      'Price fixed at contract — no stage increases',
    ],
    alt: 'Casa Tramuntana: a timber-clad villa behind a rendered courtyard wall',
  },
  {
    id: 'villa-poniente',
    name: 'Villa Poniente',
    location: 'Marbella',
    province: 'Málaga',
    price: 1_980_000,
    beds: 5,
    baths: 5,
    m2: 445,
    plot: 1_400,
    type: 'Villa',
    stage: 'Completed',
    handover: 'Available now',
    cover: IMG.houseDusk,
    gallery: [IMG.houseDusk, IMG.interiorLounge, IMG.interiorStair],
    blurb:
      'A dark-framed pavilion in the hills behind the town, glazed on three sides and shaded on the fourth.',
    features: [
      'Full-height glazing to three elevations',
      '1,400 m² terraced plot with olive terraces',
      'Delivered September 2024',
      'Price fixed at contract — no stage increases',
    ],
    alt: 'Villa Poniente: a dark-framed glazed pavilion lit from within at dusk',
  },
];

export const TYPES = ['Villa', 'Apartment', 'Penthouse', 'Townhouse'];
export const STAGES = ['Completed', 'Under construction', 'Planning'];
export const LOCATIONS = [...new Set(PROPERTIES.map((p) => p.location))].sort();

export const PRICE_BOUNDS = {
  min: Math.min(...PROPERTIES.map((p) => p.price)),
  max: Math.max(...PROPERTIES.map((p) => p.price)),
};

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);

export const formatCompact = (n) =>
  new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(n);
