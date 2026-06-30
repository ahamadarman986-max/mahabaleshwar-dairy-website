const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\60a32196-41ff-4d10-bb20-e19ca1385a7b';
const destDir = path.join(__dirname, 'public', 'images');

const mapping = {
  'media__1782480327592.png': 'hero-banner.png',
  'media__1782480436579.png': 'product-yellow.png',
  'media__1782480483738.png': 'product-orange.png'
};

for (const [srcFile, destFile] of Object.entries(mapping)) {
  const srcPath = path.join(sourceDir, srcFile);
  const destPath = path.join(destDir, destFile);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcFile} to ${destFile}`);
  } else {
    console.log(`Source not found: ${srcPath}`);
  }
}
