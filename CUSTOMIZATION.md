# Guide de Customisation - MANOS TOURS Blog

## 🎨 Angles de Customisation Disponibles

### 1. **Configuration de Base (.env)**
```env
NEXT_PUBLIC_BLOG_ID=
NEXT_PUBLIC_BLOG_DISPLAY_NAME=
NEXT_PUBLIC_BLOG_COPYRIGHT=
NEXT_DEFAULT_METADATA_DEFAULT_TITLE=
NEXT_PUBLIC_BLOG_DESCRIPTION=
NEXT_PUBLIC_BASE_URL="https://votre-domaine.com"
```

### 2. **Personnalisation Visuelle**

#### **Couleurs et Thème (Tailwind CSS)**
- Modifiez `tailwind.config.js` pour changer les couleurs
- Personnalisez le mode sombre/clair
- Ajustez les polices dans `src/app/layout.tsx`

#### **Images et Assets**
- Logo/Avatar : `public/images/manos.jpeg`
- Images de blog : `public/images/`
- Favicon : Configuré automatiquement avec l'image principale

### 3. **Contenu et Structure**

#### **Page About**
- Contenu : Modifiez `src/app/about/page.tsx`
- Image personnelle : `public/images/manos.jpeg`
- Données structurées SEO incluses

#### **Navigation**
- Menu : `src/components/Header.tsx`
- Ajoutez/supprimez des liens dans `menuItems`

#### **Footer**
- Personnalisez : `src/components/Footer.tsx`
- Liens sociaux, copyright, mentions légales

### 4. **SEO et Métadonnées**

#### **Métadonnées Globales**
- Configuration : `src/app/layout.tsx`
- Mots-clés, descriptions, Open Graph

#### **Données Structurées**
- Organisation : `src/lib/seo.ts`
- Personne (Herman) : `src/app/about/page.tsx`
- Articles de blog : Automatique via Wisp

#### **Sitemap et Robots**
- Sitemap : `src/app/sitemap.ts`
- Robots.txt : `public/robots.txt`

### 5. **Fonctionnalités Blog (Wisp CMS)**

#### **Configuration Wisp**
- ID Blog : Variable d'environnement
- Gestion des articles via https://wisp.blog/
- Tags, catégories, auteurs

#### **Personnalisation des Articles**
- Template : `src/app/blog/[slug]/page.tsx`
- Prévisualisation : `src/components/BlogPostPreview.tsx`
- Pagination : `src/components/BlogPostsPagination.tsx`

### 6. **Optimisations Techniques**

#### **Performance**
- Images optimisées avec Next.js Image
- Lazy loading automatique
- Compression et cache

#### **PWA (Progressive Web App)**
- Manifest : `src/app/manifest.ts`
- Service Worker : À ajouter si nécessaire
- Mode hors-ligne : Configurable

### 7. **Intégrations Possibles**

#### **Analytics**
- Google Analytics : Ajoutez le script dans `layout.tsx`
- Plausible, Fathom : Alternatives privacy-friendly

#### **Réseaux Sociaux**
- Boutons de partage : À ajouter dans les articles
- Flux RSS : Déjà configuré (`/rss`)

#### **Newsletter**
- Mailchimp, ConvertKit : Intégration possible
- Formulaire d'inscription : À créer

#### **Commentaires**
- Disqus, Giscus : Intégration possible
- Système de commentaires natif

### 8. **Déploiement et Domaine**

#### **Plateformes Recommandées**
- Vercel (recommandé pour Next.js)
- Netlify
- Railway
- DigitalOcean App Platform

#### **Configuration Domaine**
- Mettez à jour `NEXT_PUBLIC_BASE_URL`
- Configurez les DNS
- Certificat SSL automatique

### 9. **Maintenance et Mises à Jour**

#### **Dépendances**
```bash
npm update
npm audit fix
```

#### **Sauvegarde**
- Code : Git repository
- Contenu : Export Wisp
- Images : Sauvegarde régulière

### 10. **Extensions Avancées**

#### **Multilingue**
- Next.js i18n
- Contenu en français/anglais
- Détection automatique de langue

#### **E-commerce**
- Stripe pour réservations
- Calendrier de disponibilité
- Système de booking

#### **Carte Interactive**
- Google Maps
- Leaflet
- Itinéraires de voyage

## 🚀 Prochaines Étapes Recommandées

1. **Configurez votre domaine** dans `.env`
2. **Personnalisez les couleurs** selon votre charte graphique
3. **Ajoutez du contenu** via Wisp CMS
4. **Configurez Google Analytics**
5. **Testez le SEO** avec Google Search Console
6. **Optimisez les images** pour la performance
7. **Ajoutez des fonctionnalités** selon vos besoins

## 📞 Support

Pour toute question sur la customisation, consultez :
- Documentation Next.js
- Documentation Wisp CMS
- Documentation Tailwind CSS
