"use client";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-gray-800",
  },
  {
    label: "Conversación",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-gray-800",
  },
  {
    label: "Generador de Imagen",
    icon: ImageIcon,
    href: "/image",
    color: "text-gray-800",
  },
  {
    label: "Generador de Video",
    icon: VideoIcon,
    href: "/video",
    color: "text-gray-800",
  },
  {
    label: "Generador de Música",
    icon: Music,
    href: "/music",
    color: "text-gray-800",
  },
  {
    label: "Generador de código",
    icon: Code,
    href: "/code",
    color: "text-gray-800",
  },
  {
    label: "Configuracíon",
    icon: Settings,
    href: "/settings",
  },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="text-gray-600 space-y-4 flex flex-col h-full bg-stone-50">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-xl font-bold", montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full hover:bg-gray-200 cursor-pointer hover:text-slate-700 justify-start rounded-lg transition",
                route.href === pathname
                  ? "bg-gray-200 text-slate-700 font-semibold"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
