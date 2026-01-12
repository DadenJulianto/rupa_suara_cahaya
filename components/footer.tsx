"use client"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">RSC</span>
              </div>
              <span className="font-semibold">Rupa Suara Cahaya</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Solusi kreatif dan inovatif untuk kebutuhan acara dan bisnis Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Tautan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Halaman Muka
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Produk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@rupasuaracahaya.com</li>
              <li>Telepon: +62 (XXX) XXXX-XXXX</li>
              <li>Alamat: Kediri, Jawa Timur</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2026 Rupa Suara Cahaya. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
