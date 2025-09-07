import { config } from "@/config";
import type { Organization, WebSite, WithContext } from "schema-dts";

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MANOS TOURS",
  description: "Agence de voyage spécialisée dans le tourisme en Afrique de l'Ouest",
  url: config.baseUrl,
  logo: `${config.baseUrl}/images/manos.jpeg`,
  founder: {
    "@type": "Person",
    name: "Herman AKUE",
    jobTitle: "Guide Touristique Professionnel",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Bénin",
    },
    {
      "@type": "Country", 
      name: "Togo",
    },
    {
      "@type": "Country",
      name: "Ghana",
    },
  ],
  knowsAbout: [
    "Guide touristique",
    "Voyage organisé",
    "Découverte culturelle",
    "Tourisme en Afrique de l'Ouest",
  ],
};

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: config.blog.name,
  description: config.blog.metadata.description,
  url: config.baseUrl,
  publisher: {
    "@type": "Organization",
    name: "MANOS TOURS",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${config.baseUrl}/search?q={search_term_string}`,
  },
  inLanguage: "fr-FR",
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
