import { promises as fs } from 'fs';

export async function readContents (path) {
  if (!await fs.stat(path)) {
    throw Error(`${path} not found, is this a package?`);
  }

  try {
    return await fs.readFile(path, 'utf-8');
  } catch {
    throw Error(`Failed to read ${path}`);
  }
}
