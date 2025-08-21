import { generate as critical } from 'critical';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const distPath = path.join(projectRoot, 'dist');
const criticalCssPath = path.join(projectRoot, 'src', 'styles', 'critical.css');

async function extractCriticalCSS() {
  try {
    console.log('🔍 Extraindo Critical CSS...');
    
    // Verificar se o build existe
    if (!fs.existsSync(distPath)) {
      console.log('📦 Build não encontrado. Executando build primeiro...');
      const { exec } = await import('child_process');
      const { promisify } = await import('util');
      const execAsync = promisify(exec);
      
      await execAsync('npm run build', { cwd: projectRoot });
      console.log('✅ Build concluído!');
    }

    // Criar diretório de estilos se não existir
    const stylesDir = path.dirname(criticalCssPath);
    if (!fs.existsSync(stylesDir)) {
      fs.mkdirSync(stylesDir, { recursive: true });
    }

    // Extrair CSS crítico para diferentes viewports
    const { css } = await critical.generate({
      base: distPath,
      src: 'index.html',
      target: {
        css: criticalCssPath,
        html: path.join(distPath, 'index-critical.html')
      },
      width: 1300,
      height: 900,
      dimensions: [
        {
          width: 480,
          height: 800
        },
        {
          width: 768,
          height: 1024
        },
        {
          width: 1024,
          height: 768
        },
        {
          width: 1440,
          height: 900
        }
      ],
      penthouse: {
        blockJSRequests: false,
        timeout: 30000
      },
      extract: true,
      inlineImages: false,
      minify: true,
      ignore: {
        atrule: ['@font-face'],
        rule: [/\.embla/, /\.carousel/],
        decl: (node, value) => {
          // Ignorar animações complexas no CSS crítico
          return /animation|transform|transition/.test(node.prop) && 
                 value.includes('carousel');
        }
      }
    });

    console.log('✅ Critical CSS extraído com sucesso!');
    console.log(`📁 Arquivo salvo em: ${criticalCssPath}`);
    console.log(`📏 Tamanho do CSS crítico: ${(css.length / 1024).toFixed(2)}KB`);
    
    // Criar versão minificada adicional
    const minifiedPath = criticalCssPath.replace('.css', '.min.css');
    fs.writeFileSync(minifiedPath, css);
    
    return css;
    
  } catch (error) {
    console.error('❌ Erro ao extrair Critical CSS:', error.message);
    throw error;
  }
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  extractCriticalCSS()
    .then(() => {
      console.log('🎉 Processo concluído!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Falha no processo:', error);
      process.exit(1);
    });
}

export { extractCriticalCSS };