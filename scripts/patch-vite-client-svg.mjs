/**
 * Removes `declare module '*.svg'` from vite's client.d.ts so project-level
 * SVGR typings in src/vite-env.d.ts apply (default import = React component).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientPath = path.resolve(__dirname, '../node_modules/vite/client.d.ts');

let s = fs.readFileSync(clientPath, 'utf8');
const marker = `declare module '*.svg' {
  const src: string
  export default src
}
`;

if (s.includes(marker)) {
  s = s.replace(marker, '');
  fs.writeFileSync(clientPath, s);
  console.log('patched: removed *.svg string module from vite/client.d.ts');
} else if (!s.includes("declare module '*.svg'")) {
  console.log('skip: vite/client.d.ts has no *.svg block (already patched?)');
} else {
  console.warn('patch-vite-client-svg: unexpected vite/client.d.ts format; skip');
}
