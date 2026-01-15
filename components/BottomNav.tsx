"use client";

import { Home, Info, Briefcase, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  icon: React.ElementType;
  action: "top" | "scroll" | "wa";
  target?: string;
};

const navItems: NavItem[] = [
  { name: "Beranda", icon: Home, action: "top" },
  { name: "About", icon: Info, action: "scroll", target: "tentang-kami" },
  {
    name: "Layanan lain",
    icon: Briefcase,
    action: "scroll",
    target: "grup-usaha",
  },
  { name: "WA ME", icon: MessageCircle, action: "wa" },
];

export default function BottomNav() {
  const pathname = usePathname();

  const handleClick = (item: NavItem) => {
    // Scroll ke atas
    if (item.action === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Scroll ke section
    if (item.action === "scroll" && item.target) {
      const el = document.getElementById(item.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Buka WhatsApp
    if (item.action === "wa") {
      window.open("https://wa.me/6282244020090", "_blank");
    }
  };

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden">
      <div className="bg-gradient-to-r from-[#6A5CFF] via-[#4FA3FF] to-[#FF8A00] rounded-xl shadow-lg px-3 py-1.5 flex justify-between items-center">
        {navItems.map((item, i) => {
          const Icon = item.icon;

          return (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className="flex flex-col items-center gap-1 flex-1 py-1 rounded-xl transition text-white/90 hover:bg-white/20"
            >
              <Icon size={22} />
              <span className="text-xs font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
