import fs from "fs";
import path from "path";

const inputDir = "./public"; // carpeta base
const validExts = [".jpg", ".jpeg", ".png"];

function removeOldImages(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      removeOldImages(fullPath); // recorrer subcarpetas
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (validExts.includes(ext)) {
        try {
          fs.unlinkSync(fullPath);
          console.log(`🗑️ Eliminado: ${fullPath}`);
        } catch (err) {
          console.error(`❌ Error al eliminar ${fullPath}:`, err);
        }
      }
    }
  });
}

// ejecutar limpieza
removeOldImages(inputDir);
