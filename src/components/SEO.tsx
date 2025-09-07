import { organizationSchema, websiteSchema } from "@/lib/seo";

interface SEOProps {
  structuredData?: object;
  includeOrganization?: boolean;
  includeWebsite?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  structuredData, 
  includeOrganization = false, 
  includeWebsite = false 
}) => {
  return (
    <>
      {includeOrganization && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      )}
      {includeWebsite && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      )}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
};
