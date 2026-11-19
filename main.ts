// gta6-meme-x-01 entry program (Node 22, standard library only).
// Its only job is to copy POST.json from the repository root into the
// output directory, where the gate reads the posted meme's address.
// The post itself is the entry: the house reads the meme from X, so
// nothing this program writes is judged. No network, no clock, no files
// outside the repository: both runs of the entry write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(repoDir, 'POST.json');
const target = join(outDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`no POST.json found in ${repoDir}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
