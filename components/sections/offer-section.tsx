"use client"

export default function OfferSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Ambient light */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-200px] right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto text-center space-y-16">

        {/* Heading */}
        <div className="space-y-4">
          <span className="inline-block text-sm tracking-widest uppercase text-accent">
            Special Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RSCTIX
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Platform tiket digital terpadu untuk pengalaman acara yang lebih cepat,
            aman, dan modern.
          </p>
        </div>

        {/* Product Frame */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />

          <div className="relative max-w-4xl mx-auto p-[2px] rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/5 to-white/20">
            <div className="rounded-[2.3rem] bg-card border border-white/10 shadow-2xl overflow-hidden">

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Image */}
                <div className="aspect-[1/1] lg:aspect-[1/2] bg-muted">
                  <img
                    src="/rsctix-platform-tiket.jpg"
                    alt="RSCTIX"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-center space-y-6 text-left">

                  <h3 className="text-3xl font-bold">
                    Sistem Tiket Digital Modern
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    RSCTIX menghadirkan sistem pemesanan tiket yang cepat, aman, dan
                    dirancang untuk memberikan pengalaman pengguna terbaik, baik
                    untuk penonton maupun penyelenggara acara.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Pemesanan tiket instan",
                      "Pembayaran aman",
                      "Dashboard event organizer",
                      "Support 24/7",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-foreground font-semibold hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105" >
                     <a href="https://rupasuaracahaya.com/">halaman Kami</a>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Reflection */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[70%] h-24 bg-accent/20 blur-[80px] rounded-full" />

        </div>

      </div>
    </section>
  )
}
