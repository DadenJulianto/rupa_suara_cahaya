"use client"

export default function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6 animate-slide-in-left">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Rupa Suara Cahaya
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kami menyediakan solusi kreatif dan inovatif untuk kebutuhan acara, produksi, dan bisnis Anda. Dengan
            pengalaman bertahun-tahun, kami siap mewujudkan visi Anda.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
            Mulai Sekarang
          </button>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden bg-muted h-96 animate-slide-in-right hover:shadow-2xl transition-shadow duration-300">
          <img src="/rupa-suara-cahaya-studio.jpg" alt="Rupa Suara Cahaya" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
