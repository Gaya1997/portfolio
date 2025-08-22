import * as fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import data from "./src/data/profile.json" with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const replacePlaceholders = (template, replacements) => {
  return Object.entries(replacements).reduce((result, [key, value]) => {
    const placeholder = `%${key.toUpperCase()}%`;
    return result.replace(new RegExp(placeholder, 'g'), value);
  }, template);
};

(async () => {
  const templatePath = path.join(__dirname, "index-template.html");
  const templateContent = await fs.readFile(templatePath, "utf-8");
  // console.log("[LOG] profile data:", data);
  // console.log("[LOG] templateContent:", templateContent);
  const replacements = {
    seo_title: data.seo.title,
    seo_description: data.heading.intro,
  };
  const finalContent = replacePlaceholders(templateContent, replacements);
  // console.log("[LOG] finalContent:", finalContent);

  // Write the final content to index.html
  const outputPath = path.join(__dirname, "index.html");
  await fs.writeFile(outputPath, finalContent, "utf-8");
})();
