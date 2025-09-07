"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Blog", href: "/" },
  { name: "À propos", href: "/about" },
];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent<{ showDescription?: boolean }> = ({ showDescription = false }) => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      {/* Header avec titre et navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            {config.blog.name}
          </h1>
        </Link>
        <Navigation />
      </div>

      {/* Texte descriptif centré */}
      {showDescription && (
        <div className="text-center">
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Retrouvez ici des conseils de voyages, les lieux emblématiques à découvrir en Afrique de l&apos;Ouest et soyez au courant de mes réductions sur les circuits pour vos vacances en Afrique de l&apos;Ouest. Pour réserver votre tour, veuillez visiter{" "}
            <a
              href="https://manos-tours.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              https://manos-tours.vercel.app/
            </a>
          </p>
        </div>
      )}
    </section>
  );
};
