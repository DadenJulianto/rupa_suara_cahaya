"use client";

import Image from "next/image";

interface Business {
  id: string;
  name: string;
  description: string;
  color: string;
  accentColor: string;
  image: string;
}

const businesses: Business[] = [
  {
    id: "wedding-org",
    name: "Wedding Organization",
    description:
      "Layanan pernikahan lengkap dari perencanaan hingga eksekusi sempurna untuk hari istimewa Anda.",
    color: "from-pink-500/10 to-rose-500/10",
    accentColor: "from-pink-500 to-rose-500",
    image: "/logo/",
  },
  {
    id: "rupa-suara-cahaya",
    name: "Rupa Suara Cahaya",
    description:
      "Studio produksi audio-visual dengan peralatan terkini dan tim profesional berpengalaman.",
    color: "from-purple-500/10 to-indigo-500/10",
    accentColor: "from-purple-500 to-indigo-500",
    image: "/logo/",
  },
  {
    id: "kayu-pinus",
    name: "Kayu Pinus Kediri",
    description:
      "Distributor kayu pinus berkualitas dengan berbagai pilihan produk untuk kebutuhan konstruksi Anda.",
    color: "from-amber-500/10 to-orange-500/10",
    accentColor: "from-amber-500 to-orange-500",
    image: "/logo/",
  },
  {
    id: "pancarona",
    name: "Pancarona",
    description:
      "Platform e-commerce terpadu yang menyediakan berbagai produk pilihan dengan kualitas terjamin.",
    color: "from-cyan-500/10 to-blue-500/10",
    accentColor: "from-cyan-500 to-blue-500",
    image: "/logo/s",
  },
  {
    id: "rsctix",
    name: "RSCTIX",
    description:
      "Sistem manajemen tiket digital untuk acara, konser, dan event dengan integrasi pembayaran lengkap.",
    color: "from-green-500/10 to-emerald-500/10",
    accentColor: "from-green-500 to-emerald-500",
    image: "/business/",
  },
  {
    id: "harrum",
    name: "Harrum",
    description:
      "Brand fashion yang menghadirkan gaya kontemporer dengan sentuhan lokal dan berkualitas premium.",
    color: "from-red-500/10 to-pink-500/10",
    accentColor: "from-red-500 to-pink-500",
    image: "/logo/",
  },
  {
    id: "talent",
    name: "Talent Agency",
    description:
      "Agensi talenta yang menghubungkan artis profesional dengan peluang pertunjukan terbaik.",
    color: "from-yellow-500/10 to-amber-500/10",
    accentColor: "from-yellow-500 to-amber-500",
    image: "/business/",
  },
];

export default function BusinessGrid() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Grup Usaha Kami
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Setiap unit di bawah Rupa Suara Cahaya Group memiliki karakter dan
          fokus bisnis yang berbeda.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {businesses.map((business, index) => (
          <div
            key={business.id}
            className="relative group bg-card rounded-3xl border border-white/10 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-28 sm:h-40 lg:h-48 overflow-hidden">
              <Image
                src={business.image}
                alt={business.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 4}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PC9zdmc+"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
<div className="absolute inset-0 bg-black/40" />

            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-2 sm:space-y-3 relative">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br ${business.color} flex items-center justify-center`}
              >
                <div
                  className={`w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md bg-gradient-to-br ${business.accentColor} flex items-center justify-center`}
                >
                  <span className="text-[10px] sm:text-sm font-bold text-white">
                    {business.name.charAt(0)}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold">{business.name}</h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {business.description}
              </p>

              <div className="text-accent font-medium text-sm flex items-center gap-1">
                Selengkapnya <span>→</span>
              </div>
            </div>

            {/* Accent glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
