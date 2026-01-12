"use client"

export default function VideoSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Ambient lights */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-200px] right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto text-center space-y-10">

        {/* Text */}
        <div className="space-y-4">
          <span className="inline-block text-sm tracking-widest uppercase text-primary/80">
            Visual Identity
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Rupa Suara Cahaya
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Sebuah representasi visual dan suara yang membentuk karakter kreatif kami.
          </p>
        </div>

        {/* Video */}
        <div className="relative">

          {/* Frame glow */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 blur-2xl" />

          {/* Outer glass frame */}
          <div className="relative p-[2px] rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/5 to-white/20">
            <div className="rounded-[2.3rem] overflow-hidden bg-black shadow-2xl">

              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9_XD7s3Q7Vk"
                  title="Rupa Suara Cahaya Profile"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

            </div>
          </div>

          {/* Reflection */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[70%] h-24 bg-primary/20 blur-[80px] rounded-full" />

        </div>

      </div>
    </section>
  )
}


