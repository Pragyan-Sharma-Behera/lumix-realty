// PLACEHOLDER CONTENT — prepared for a real client (Kat Beaton | Dacha Real Estate)
// but not yet backed by her real inventory. Every listing below, every price,
// and every feature bullet is fictional placeholder data written to hold the
// site's structure until real Dubai/RAK listings are supplied. Swap this file
// out before anything here goes live. Photography is also placeholder: the
// stock images are Mediterranean villas carried over from an earlier draft,
// not Dubai/RAK properties — alt text below describes what the photo actually
// shows, not the (fictional) listing location, so accessibility text stays
// honest even though the pairing is a mismatch.

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
    id: 'palm-signature-villa',
    name: 'Palm Signature Villa',
    location: 'Palm Jumeirah',
    province: 'Dubai',
    price: 22_000_000,
    beds: 6,
    baths: 6,
    m2: 620,
    plot: 750,
    type: 'Villa',
    stage: 'Ready',
    handover: 'Ready to move',
    cover: IMG.heroVilla,
    gallery: [IMG.heroVilla, IMG.interiorStair, IMG.interiorLiving],
    blurb:
      'A six-bedroom villa on the Palm, arranged around a private pool and a full-width entertaining terrace.',
    features: [
      'Vacant on transfer',
      'Selling with international freehold title',
      'Viewings available same week',
      'Independent conveyancing available on request',
    ],
    alt: 'A white cubist villa stepped between umbrella pines under a hard blue sky',
  },
  {
    id: 'marina-heights-residence',
    name: 'Marina Heights Residence',
    location: 'Dubai Marina',
    province: 'Dubai',
    price: 2_800_000,
    beds: 2,
    baths: 2,
    m2: 105,
    plot: null,
    type: 'Apartment',
    stage: 'Ready',
    handover: 'Ready to move',
    cover: IMG.houseCorten,
    gallery: [IMG.houseCorten, IMG.interiorLounge],
    blurb: 'A two-bedroom apartment with marina views, sold with a fitted kitchen and covered parking.',
    features: [
      'Marina and skyline outlook',
      'Chiller-free, DEWA connected',
      'Vacant on transfer',
      'Independent conveyancing available on request',
    ],
    alt: 'A weathered steel and white apartment block in sharp sunlight',
  },
  {
    id: 'downtown-sky-suite',
    name: 'Downtown Sky Suite',
    location: 'Downtown Dubai',
    province: 'Dubai',
    price: 9_500_000,
    beds: 3,
    baths: 4,
    m2: 260,
    plot: null,
    type: 'Penthouse',
    stage: 'Ready',
    handover: 'Ready to move',
    cover: IMG.houseDusk,
    gallery: [IMG.houseDusk, IMG.interiorStair, IMG.interiorLounge],
    blurb: 'A high-floor penthouse with a wraparound terrace, sold furnished with skyline views on two sides.',
    features: [
      'Full-height glazing, two elevations',
      'Sold furnished',
      'Two dedicated parking spaces',
      'Independent conveyancing available on request',
    ],
    alt: 'A dark-framed glazed pavilion lit from within at dusk',
  },
  {
    id: 'business-bay-collection',
    name: 'Business Bay Collection',
    location: 'Business Bay',
    province: 'Dubai',
    price: 1_650_000,
    beds: 1,
    baths: 1,
    m2: 68,
    plot: null,
    type: 'Apartment',
    stage: 'Off-plan',
    handover: 'Handover Q2 2028 (est.)',
    cover: IMG.villaWood,
    gallery: [IMG.villaWood, IMG.interiorLiving],
    blurb: 'A one-bedroom off-plan unit in an early-release tower, direct from the developer.',
    features: [
      'Direct from developer — no resale premium',
      'Payments held in a DLD-regulated escrow account',
      'Post-handover payment plan available',
      'Handover date is an estimate — confirm before reserving',
    ],
    alt: 'A modern building with timber soffits above a lit pool',
  },
  {
    id: 'hills-grove-townhouse',
    name: 'Hills Grove Townhouse',
    location: 'Dubai Hills Estate',
    province: 'Dubai',
    price: 4_200_000,
    beds: 4,
    baths: 4,
    m2: 280,
    plot: 320,
    type: 'Townhouse',
    stage: 'Ready',
    handover: 'Ready to move',
    cover: IMG.villaPalms,
    gallery: [IMG.villaPalms, IMG.interiorLounge],
    blurb: 'A four-bedroom townhouse on a landscaped row, close to the community park and golf course.',
    features: [
      'Private garden and covered parking',
      'Community pool and park access',
      'Vacant on transfer',
      'Independent conveyancing available on request',
    ],
    alt: 'A white villa framed by palms above a turquoise pool',
  },
  {
    id: 'jvc-central-apartments',
    name: 'JVC Central Apartments',
    location: 'Jumeirah Village Circle',
    province: 'Dubai',
    price: 980_000,
    beds: 1,
    baths: 1,
    m2: 52,
    plot: null,
    type: 'Apartment',
    stage: 'Off-plan',
    handover: 'Handover Q4 2027 (est.)',
    cover: IMG.villaPoolBright,
    gallery: [IMG.villaPoolBright, IMG.interiorLiving],
    blurb: 'An entry-level off-plan studio-plus-one, aimed at first-time investors and rental yield buyers.',
    features: [
      'Direct from developer — no resale premium',
      'Payments held in a DLD-regulated escrow account',
      'Flexible payment plan available',
      'Handover date is an estimate — confirm before reserving',
    ],
    alt: 'A bright white three-storey building with a long pool and open sky',
  },
  {
    id: 'marjan-island-villas',
    name: 'Marjan Island Villas',
    location: 'Al Marjan Island',
    province: 'Ras Al Khaimah',
    price: 3_600_000,
    beds: 4,
    baths: 5,
    m2: 340,
    plot: 500,
    type: 'Villa',
    stage: 'Off-plan',
    handover: 'Handover Q1 2028 (est.)',
    cover: IMG.villaPoolHill,
    gallery: [IMG.villaPoolHill, IMG.interiorLounge, IMG.interiorLiving],
    blurb: 'An island villa development on Al Marjan, near the new casino resort district.',
    features: [
      'Direct from developer — no resale premium',
      'Payments held in a DLD-regulated escrow account',
      'Post-handover payment plan available',
      'Handover date is an estimate — confirm before reserving',
    ],
    alt: 'A white hillside villa with a rectangular pool overlooking the water',
  },
  {
    id: 'mina-al-arab-retreat',
    name: 'Mina Al Arab Retreat',
    location: 'Mina Al Arab',
    province: 'Ras Al Khaimah',
    price: 2_950_000,
    beds: 3,
    baths: 3,
    m2: 230,
    plot: 400,
    type: 'Villa',
    stage: 'Ready',
    handover: 'Ready to move',
    cover: IMG.houseTimber,
    gallery: [IMG.houseTimber, IMG.interiorStair],
    blurb: 'A three-bedroom villa on the Mina Al Arab lagoon, sold with private garden and mangrove outlook.',
    features: [
      'Lagoon and mangrove outlook',
      'Vacant on transfer',
      'Community beach access',
      'Independent conveyancing available on request',
    ],
    alt: 'A timber-clad villa behind a rendered courtyard wall',
  },
];

export const TYPES = ['Villa', 'Apartment', 'Penthouse', 'Townhouse'];
export const STAGES = ['Ready', 'Off-plan'];
export const LOCATIONS = [...new Set(PROPERTIES.map((p) => p.location))].sort();

export const PRICE_BOUNDS = {
  min: Math.min(...PROPERTIES.map((p) => p.price)),
  max: Math.max(...PROPERTIES.map((p) => p.price)),
};

// The dirham's peg to the dollar (3.6725 AED = 1 USD) is a real, official,
// long-standing rate — using it to derive a secondary USD figure is not the
// same kind of fabrication as inventing a price outright. The AED figure
// itself remains placeholder data; the conversion is just arithmetic on it.
const AED_PER_USD = 3.6725;

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  }).format(n);

export const formatUsd = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(n / AED_PER_USD);

export const formatCompact = (n) =>
  new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(n);
