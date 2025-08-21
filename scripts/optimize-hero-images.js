import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações de otimização para imagens do hero
const HERO_SIZES = [
  { width: 480, suffix: '-mobile' },
  { width: 768, suffix: '-tablet' },
  { width: 1024, suffix: '-desktop' },
  { width: 1440, suffix: '-large' },
  { width: 1920, suffix: '-xl' }
];

const QUALITY_SETTINGS = {
  webp: { quality: 85, effort: 6 },
  avif: { quality: 75, effort: 4 }
};

const inputDir = path.join(__dirname, '../public/slides');
const outputDir = path.join(__dirname, '../public/slides/optimized');

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const baseName = path.parse(filename).name;
  
  console.log(`Otimizando ${filename}...`);
  
  // Gerar versões em diferentes tamanhos
  for (const size of HERO_SIZES) {
    try {
      // WebP otimizado
      await sharp(inputPath)
        .resize(size.width, Math.round(size.width * 0.6), {
          fit: 'cover',
          position: 'center'
        })
        .webp(QUALITY_SETTINGS.webp)
        .toFile(path.join(outputDir, `${baseName}${size.suffix}.webp`));
      
      // AVIF para navegadores modernos (ainda melhor compressão)
      await sharp(inputPath)
        .resize(size.width, Math.round(size.width * 0.6), {
          fit: 'cover',
          position: 'center'
        })
        .avif(QUALITY_SETTINGS.avif)
        .toFile(path.join(outputDir, `${baseName}${size.suffix}.avif`));
        
      console.log(`✓ Gerado ${baseName}${size.suffix} (${size.width}px)`);
    } catch (error) {
      console.error(`Erro ao processar ${baseName}${size.suffix}:`, error.message);
    }
  }
}

async function main() {
  try {
    const files = fs.readdirSync(inputDir)
      .filter(file => file.endsWith('.webp') && !file.includes('optimized'));
    
    console.log(`Encontradas ${files.length} imagens para otimizar...\n`);
    
    for (const file of files) {
      await optimizeImage(path.join(inputDir, file), file);
      console.log('');
    }
    
    console.log('✅ Otimização concluída!');
    console.log(`📁 Imagens salvas em: ${outputDir}`);
    
  } catch (error) {
    console.error('❌ Erro durante a otimização:', error.message);
    process.exit(1);
  }
}

// Executar sempre quando o script for chamado diretamente
main();

export { optimizeImage, HERO_SIZES };