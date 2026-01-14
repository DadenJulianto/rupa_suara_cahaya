"use client";

import Link from "next/link";
import { Home, Ticket, User, Search } from "lucide-react";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  icon: React.ElementType;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Beranda", icon: Home, href: "/" },
  { name: "Cari", icon: Search, href: "/search" },
  { name: "Tiket", icon: Ticket, href: "/tickets" },
  { name: "Akun", icon: User, href: "/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden">
      <div className="bg-gradient-to-r from-[#6A5CFF] via-[#4FA3FF] to-[#FF8A00] rounded-xl shadow-lg px-3 py-1.5 flex justify-between items-center">
        {navItems.map((item, i) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={i}
              href={item.href}
              className={`flex flex-col items-center gap-1 flex-1 py-1 rounded-xl transition ${
                active ? "bg-white/20 text-white" : "text-white/80"
              }`}
            >
              <Icon size={22} />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
