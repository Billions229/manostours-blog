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

export const Header: FunctionComponent = () => {
  return (
    <section className="flex items-start justify-between mt-8 md:mt-16 mb-12">
      <div className="flex-1">
        <Link href="/">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
            {config.blog.name}
          </h1>
        </Link>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Retrouvez ici des conseils de voyages, les lieux emblématiques à découvrir en Afrique de l'Ouest et soyez au courant de mes réductions sur les circuits pour vos vacances en Afrique de l'Ouest. Pour réserver votre tour, veuillez visiter{" "}
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
      <div className="ml-8">
        <Navigation />
      </div>
    </section>
  );
};
