export const products = [
  {
    id: 1,
    name: "Rouge Dior Lipstick",
    brand: "Dior",
    subtitle: "Velvet Finish – Iconic Red 999",
    price: 49.0,
    currency: "EUR",
    thumbnail: "/images/header/hd1.avif",
    gallery: [
      "/images/header/hd2.avif",
      "/images/header/hd3.avif",
      "/images/header/hd1.avif",
    ],
    video: {
      url: "/videos/bs1.mp4",
      poster: "/images/header/hd1.avif",
    },
    banner: "/images/header/hd1.avif",
    background: "/images/header/hd1.avif",
    description: `
      Discover the new Rouge Dior: a timeless lipstick that embodies elegance,
      femininity, and Parisian style. Formulated with floral care for 24h comfort.
    `,
    highlights: [
      "Velvety matte finish",
      "Infused with peony extract",
      "Long-lasting, hydrating formula",
      "Refillable luxury case",
    ],
    usage: `
      Apply directly to the lips from the bullet or use a brush for precision.
      For extra longevity, blot with tissue and reapply.
    `,
    variants: {
      shades: [
        {
          name: "999 Red",
          hex: "#b20d1d",
          image: "/images/header/hd3.avif",
        },
        {
          name: "720 Icone",
          hex: "#a3475a",
          image: "/images/header/hd2.avif",
        },
        {
          name: "100 Nude Look",
          hex: "#c89f91",
          image: "/images/header/hd1.avif",
        },
      ],
      finishes: ["Matte", "Satin", "Velvet"],
    },
    sku: "DIOR-LIP-999",
    availability: "in_stock",
    category: "Lipstick",
    tags: ["beauty", "makeup", "lip", "premium"],
    releaseDate: "2025-04-15",
    mood: ["elegant", "romantic", "night"],
    colorPalette: ["#000", "#fff", "#b20d1d"],
    meta: {
      title: "Rouge Dior Lipstick – Iconic Red 999 | Dior Beauty",
      description:
        "Explore the legendary Rouge Dior Lipstick in shade 999. Rich color, velvety texture, and timeless elegance.",
      keywords: ["dior", "lipstick", "rouge", "999", "red", "luxury makeup"],
    },
  },
  {
    id: 2,
    name: "Sublimage Eye Cream",
    thumbnail: "/images/header/hd2.avif",
    description: `
      Experience the luxury of Sublimage Eye Cream, a rich formula that targets dark circles and fine lines.
      Infused with the power of Vanilla Planifolia, it rejuvenates and brightens the delicate eye area.
    `,
  },
  {
    id: 3,
    name: "Black Orchid Perfume",
    thumbnail: "/images/header/hd3.avif",
    description: `
      Indulge in the opulence of Black Orchid, a fragrance that combines dark florals with rich spices.
      Perfect for evening wear, it leaves a lasting impression with its unique blend of notes.
    `,
  },
  {
    id: 4,
    name: "Luminous Silk Foundation",
    thumbnail: "/images/header/hd4.avif",
    description: `
      Achieve a flawless complexion with Luminous Silk Foundation. This lightweight formula provides buildable coverage
      and a radiant finish, making it a favorite among makeup artists and beauty enthusiasts.
    `,
  },
  {
    id: 5,
    name: "Crème de La Mer",
    thumbnail: "/images/header/hd5.avif",
    description: `
      Discover the legendary Crème de La Mer, known for its transformative properties. This rich moisturizer
      hydrates and soothes the skin, leaving it soft, supple, and radiant.
    `,
  },
  {
    id: 6,
    name: "Virtue Hair Treatment",
    thumbnail: "/images/header/hd6.avif",
    description: `
      Restore your hair's natural beauty with Virtue Hair Treatment. Infused with Alpha Keratin 60ku,
      it repairs damage and strengthens hair from within, leaving it healthy and vibrant.
    `,
  },
];
