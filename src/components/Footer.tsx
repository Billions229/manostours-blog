"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      {/* Lien de réservation centré */}
      <div className="text-center mb-8 p-6 bg-primary/5 rounded-lg">
        <p className="text-lg font-medium mb-3">
          Prêt à découvrir l&apos;Afrique de l&apos;Ouest ?
        </p>
        <Link
          href="https://manos-tours.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Réserver votre voyage sur MANOS TOURS
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        <div className="text-xs text-muted-foreground hidden lg:block">
          <Link
            href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
          >
            Propulsé par wisp
          </Link>
        </div>
        <div>
          <Link href="/rss">
            <Button variant="ghost" className="p-2">
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
          <DarkModeToggle />
        </div>
      </div>
      <div className="text-xs text-muted-foreground lg:hidden">
        <Link
          href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
        >
          Propulsé par wisp
        </Link>
      </div>
    </section>
  );
};
