import { Plugin } from "vite";
import sass from "sass";
import fs from "fs/promises";
import path from "path";

const scssToJson = (content: string) => {
  const result = sass.renderSync({ data: content });
  const css = result.css.toString();
  const json: { [key: string]: string } = {};

  // Parse CSS and convert to JSON
  css.replace(/--(.*?): (.*?);/g, (match, key, value) => {
    json[key.trim()] = value.trim();
    return "";
  });

  return json;
};

const resolveImports = async (
  filePath: string,
  seen: Set<string> = new Set(),
) => {
  if (seen.has(filePath)) return "";
  seen.add(filePath);

  const content = await fs.readFile(filePath, "utf-8");
  const importRegex = /@import\s+["'](.+?)["'];/g;
  let match;
  let resolvedContent = "";

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    const absoluteImportPath = path.resolve(path.dirname(filePath), importPath);

    console.log(absoluteImportPath, filePath);

    if (!absoluteImportPath.endsWith(".scss")) {
      continue;
    }

    const importContent = await resolveImports(absoluteImportPath, seen);
    resolvedContent += importContent;
  }

  resolvedContent += content.replace(importRegex, "");

  return resolvedContent;
};

export default function vitePluginScssToJson(): Plugin {
  return {
    name: "vite-plugin-scss-to-json",
    async transform(code, id) {
      if (!id.endsWith(".scss")) return;

      const resolvedContent = await resolveImports(id);
      const variablesContent = await fs.readFile(
        path.resolve(__dirname, "..", "src/styles/variables.scss"),
        "utf-8",
      );
      const fullContent = `${variablesContent}\n${resolvedContent}`;
      const jsonContent = scssToJson(fullContent);
      const jsonFilePath = id.replace(".scss", ".json");

      await fs.writeFile(
        jsonFilePath,
        JSON.stringify(jsonContent, null, 2),
        "utf-8",
      );

      return `export default ${JSON.stringify(jsonContent)};`;
    },
  };
}
