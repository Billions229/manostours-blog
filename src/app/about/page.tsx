import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Image from "next/image";
import type { Person, WithContext } from "schema-dts";

const content = `Né à Cotonou et élevé à Grand-Popo, une ville béninoise chargée d'histoire et de culture, j'ai eu la chance de grandir les pieds dans le sable, bercé par l'histoire du Bénin. C'est ici, sur les bancs de l'école, que j'ai obtenu mon baccalauréat, avec une curiosité grandissante pour le monde qui m'entoure.

Mon amour pour le Bénin, le Togo et le Ghana est bien plus qu'une simple expertise professionnelle. C'est le reflet d'une vie, d'une enfance et d'une passion qui a mûri au fil du temps.

Après le lycée, je me suis installé à Cotonou où j'ai étudié le tourisme à l'École Supérieure de Commerce et de Gestion (HECM). C'était évident : je voulais faire de ma passion pour mon pays et ses voisins mon métier. Avec une formation universitaire et une qualification professionnelle, j'ai eu l'honneur d'être sélectionné comme guide professionnel national.

Aujourd'hui, je partage mon temps entre les trésors cachés du Bénin, les merveilles naturelles du Togo et la richesse culturelle du Ghana. Chaque jour est une nouvelle aventure, une occasion de vous aider à découvrir l'authenticité de ces destinations et de vous offrir des expériences inoubliables.

Mon ambition est simple : vous montrer l'Afrique de l'Ouest comme je la connais et l'aime, avec ses paysages à couper le souffle, ses traditions vibrantes et la chaleur de ses habitants.`;

export async function generateMetadata() {
  const title = "À propos d'Herman AKUE - Guide Touristique Professionnel";
  const description = "Découvrez Herman AKUE, guide touristique professionnel certifié du Bénin, Togo et Ghana. Né à Cotonou et passionné par l'Afrique de l'Ouest, il vous fait découvrir les trésors cachés de ces destinations authentiques.";
  
  return {
    title,
    description,
    keywords: [
      "Herman AKUE",
      "guide touristique Bénin",
      "guide professionnel Togo",
      "guide Ghana",
      "tourisme Afrique de l'Ouest",
      "Cotonou",
      "Grand-Popo",
      "voyage Bénin",
      "découverte culturelle",
      "guide certifié"
    ],
    authors: [{ name: "Herman AKUE" }],
    creator: "Herman AKUE",
    publisher: "MANOS TOURS",
    openGraph: {
      title,
      description,
      type: "profile",
      locale: "fr_FR",
      siteName: config.blog.name,
      images: [
        {
          url: signOgImageUrl({
            title: "Herman AKUE",
            label: "Guide Touristique Professionnel",
            brand: config.blog.name,
          }),
          width: 1200,
          height: 630,
          alt: "Herman AKUE - Guide Touristique Professionnel Bénin, Togo, Ghana"
        },
        {
          url: "/images/manos.jpeg",
          width: 800,
          height: 600,
          alt: "Herman AKUE - Guide Touristique"
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/manos.jpeg"],
    },
    alternates: {
      canonical: `${config.baseUrl}/about`,
    },
  };
}

const Page = async () => {
  // Structured data for SEO
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Herman AKUE",
    jobTitle: "Guide Touristique Professionnel",
    description: "Guide touristique professionnel certifié spécialisé dans les voyages au Bénin, Togo et Ghana",
    image: "/images/manos.jpeg",
    url: `${config.baseUrl}/about`,
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "École Supérieure de Commerce et de Gestion (HECM)"
    },
    knowsAbout: [
      "Tourisme au Bénin",
      "Tourisme au Togo", 
      "Tourisme au Ghana",
      "Culture ouest-africaine",
      "Histoire du Bénin",
      "Grand-Popo"
    ],
    birthPlace: {
      "@type": "Place",
      name: "Cotonou",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cotonou",
        addressCountry: "BJ"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-5">
        <Header />
        
        {/* Hero Section avec image optimisée */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
              À propos d&apos;Herman AKUE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Guide Touristique Professionnel certifié - Spécialiste Bénin, Togo & Ghana
            </p>
          </div>
          
          {/* Image optimisée avec Next.js Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/manos.jpeg"
                alt="Herman AKUE - Guide Touristique Professionnel au Bénin, Togo et Ghana"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 320px, 384px"
              />
            </div>
          </div>
        </div>

        {/* Contenu principal avec structure SEO */}
        <article className="prose lg:prose-lg dark:prose-invert m-auto mb-16 blog-content max-w-4xl">
          <div className="space-y-6 text-lg leading-relaxed">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Section expertise */}
          <div className="mt-16 p-8 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Mon Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">🇧🇯 Bénin</h3>
                <p className="text-sm text-muted-foreground">
                  Trésors cachés, histoire riche, culture vaudou, Grand-Popo
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">🇹🇬 Togo</h3>
                <p className="text-sm text-muted-foreground">
                  Merveilles naturelles, traditions ancestrales, paysages variés
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">🇬🇭 Ghana</h3>
                <p className="text-sm text-muted-foreground">
                  Richesse culturelle, sites historiques, hospitalité légendaire
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center p-8 bg-primary/5 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Prêt pour l&apos;aventure ?</h2>
            <p className="text-lg mb-6">
              Découvrez l&apos;Afrique de l&apos;Ouest authentique avec un guide passionné et expérimenté.
            </p>
            <p className="text-muted-foreground">
              Contactez-moi pour organiser votre voyage inoubliable au Bénin, Togo ou Ghana.
            </p>
          </div>
        </article>
        
        <Footer />
      </div>
    </>
  );
};

export default Page;
