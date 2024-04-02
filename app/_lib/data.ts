import fs from "fs";
import { join } from "path";
import { parseMarkdown } from "./markdown";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import fsp from "fs/promises"; // Importa fs in modo asincrono

const postsDirectory = join(process.cwd(), "Sezioni");

function getMarkdown(mdFileName: String) {
  const fullPath = join(postsDirectory, mdFileName + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
}

export async function getHtml(mdFileName: String) {
  const markdown = getMarkdown(mdFileName);
  const html = await parseMarkdown(markdown);
  //AGGIUNGERE SITUAZIONE IN CUI NON PUO CARICARE IL FILE
  return html;
}

export async function checkIfFileMDExist(mdFileName) {
  const filePath = join(postsDirectory, mdFileName + ".md");

  try {
      await fsp.access(filePath, fsp.constants.F_OK);
      return true;
  } catch (error) {
      return false;
  }
}







