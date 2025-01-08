import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url) // nos da la ruta desde donde se esta haciendo el import

export const __dirname = dirname(__filename)