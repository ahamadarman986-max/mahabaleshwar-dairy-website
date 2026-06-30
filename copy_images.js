const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\60a32196-41ff-4d10-bb20-e19ca1385a7b';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);

const mapping = {
  'hero_product': 'hero.png',
  'product_badam': 'product1.png',
  'product_almond': 'product2.png',
  'product_dairy': 'product3.png',
  'gallery_1': 'gallery1.png',
  'gallery_2': 'gallery2.png'
};

files.forEach(file => {
  for (const [prefix, destName] of Object.entries(mapping)) {
    if (file.startsWith(prefix) && file.endsWith('.png')) {
      fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, destName));
      console.log(`Copied ${file} to ${destName}`);
    }
  }
});
