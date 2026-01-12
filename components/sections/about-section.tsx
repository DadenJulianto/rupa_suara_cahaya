"use client"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-card rounded-2xl p-8 md:p-12 border border-border space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Tentang Kami</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Rupa Suara Cahaya adalah perusahaan kreatif yang berfokus pada penyediaan solusi produksi dan event management
          berkualitas tinggi. Kami memiliki tim profesional yang berpengalaman dalam berbagai bidang industri kreatif,
          termasuk event planning, produksi audio-visual, dan manajemen acara.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Dengan komitmen terhadap keunggulan dan inovasi, kami berkomitmen untuk menghadirkan pengalaman terbaik bagi
          setiap klien kami. Portofolio kami mencakup berbagai proyek skala besar maupun kecil, dari konser musik hingga
          acara korporat.
        </p>
      </div>
    </section>
  )
}
