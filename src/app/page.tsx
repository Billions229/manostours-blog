import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { wisp } from "@/lib/wisp";

const Page = async (
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;

  try {
    const result = await wisp.getPosts({ limit: 6, page });
    return (
      <>
        <SEO includeOrganization includeWebsite />
        <div className="container mx-auto px-5 mb-10">
          <Header />
          <BlogPostsPreview posts={result.posts} />
          <BlogPostsPagination pagination={result.pagination} />
          <Footer />
        </div>
      </>
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error);
    return (
      <>
        <SEO includeOrganization includeWebsite />
        <div className="container mx-auto px-5 mb-10">
          <Header />
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Erreur de configuration</h2>
            <p className="text-muted-foreground mb-4">
              Impossible de récupérer les articles du blog.
            </p>
            <p className="text-sm text-muted-foreground">
              Vérifiez votre BLOG_ID dans le fichier .env et assurez-vous que votre blog est configuré sur wisp.blog
            </p>
          </div>
          <Footer />
        </div>
      </>
    );
  }
};

export default Page;
