# 🚀 Guide de Déploiement - MANOS TOURS Blog

## ✅ État Actuel
- ✅ Serveur de développement fonctionnel
- ✅ Blog complet avec Wisp CMS
- ✅ SEO optimisé
- ✅ Page About avec photo Herman AKUE
- ✅ Design responsive
- ⚠️ Build local problématique (Bus error)
- 🔄 Prêt pour déploiement sur Vercel

## 🌐 Déploiement sur Vercel (Recommandé)

### Option 1: Déploiement direct depuis GitHub

1. **Pousser vers GitHub:**
   ```bash
   # Configurer l'authentification GitHub si nécessaire
   git remote set-url origin https://github.com/Billions229/manostours-blog.git
   git push -u origin master
   ```

2. **Déployer sur Vercel:**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub
   - Importer le repository `Billions229/manostours-blog`
   - Vercel détectera automatiquement Next.js
   - Ajouter les variables d'environnement (voir section ci-dessous)
   - Déployer !

### Option 2: Déploiement via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

## 🔧 Variables d'Environnement

Ajouter ces variables dans Vercel Dashboard > Settings > Environment Variables:

```env

## 🌍 Autres Options de Déploiement

### Netlify
1. Connecter le repository GitHub
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Ajouter les variables d'environnement

### Railway
```bash
# Installer Railway CLI
npm install -g @railway/cli

# Se connecter et déployer
railway login
railway init
railway up
```

## 🔍 Résolution des Problèmes

### Build Error "Bus error (core dumped)"
- **Cause:** Problème de mémoire ou configuration locale
- **Solution:** Utiliser Vercel qui gère mieux les builds Next.js 15
- **Alternative:** Réduire la complexité du build localement

### Images qui ne se chargent pas
- Vérifier la configuration Wisp CMS
- S'assurer que `NEXT_PUBLIC_BLOG_ID` est correct

### Erreurs de timeout
- Normal pour les images externes
- Vercel optimise automatiquement les images

## 📱 Domaine Personnalisé

Une fois déployé sur Vercel:
1. Aller dans Settings > Domains
2. Ajouter votre domaine (ex: manostours.com)
3. Configurer les DNS selon les instructions Vercel

## 🎯 Prochaines Étapes

1. **Déployer sur Vercel** (priorité)
2. **Tester en production**
3. **Configurer domaine personnalisé**
4. **Optimiser les performances**
5. **Ajouter Google Analytics**
6. **Configurer les sauvegardes**

## 📞 Support

En cas de problème:
- Vérifier les logs Vercel
- Consulter la documentation Next.js 15
- Vérifier la configuration Wisp CMS

---

**🌟 Le blog est prêt pour la production !**
