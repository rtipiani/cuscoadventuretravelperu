import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./public"; // carpeta base
const validExts = [".jpg", ".jpeg", ".png"];

function convertImagesInDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // recorrer subcarpetas
      convertImagesInDir(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (validExts.includes(ext)) {
        const outputPath = path.join(dir, `${path.parse(entry.name).name}.avif`);

        sharp(fullPath)
          .avif({ quality: 50 }) // puedes ajustar calidad (30–60 recomendado)
          .toFile(outputPath)
          .then(() => console.log(`✅ ${fullPath} → ${outputPath}`))
          .catch((err) => console.error(`❌ Error en ${fullPath}:`, err));
      }
    }
  });
}

// ejecutar conversión en toda la carpeta public
convertImagesInDir(inputDir);
