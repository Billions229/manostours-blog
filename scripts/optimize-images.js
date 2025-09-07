const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
        
        console.log(`Optimizing ${file}...`);
        
        await sharp(inputPath)
          .resize(1200, 800, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .webp({ quality: 85 })
          .toFile(outputPath);
          
        console.log(`✓ ${file} optimized`);
      }
    }
    
    console.log('All images optimized!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Exécuter seulement si sharp est installé
try {
  optimizeImages();
} catch (error) {
  console.log('Sharp not installed. Run: npm install sharp --save-dev');
}
