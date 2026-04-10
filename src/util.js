import { readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { exists } from '@vanillaes/esmtk'

/**
 * Read the contents of a source file
 * @param {string} path the path to the source file
 * @returns {Promise<string>} the source file contents
 */
export async function readContents (path) {
  const pExists = await exists(path)
  if (!pExists) {
    throw new Error(`${path} No such file or directory`)
  }

  try {
    return await readFile(path, 'utf-8')
  } catch {
    throw new Error(`Failed to read ${path}`)
  }
}

/**
 * Load a test fixture
 * @param {string} path the path to the test fixture
 * @returns {string} the test fixture contents
 */
export function readFixture (path) {
  return readFileSync(join(process.cwd(), 'src', '__test__', path), 'utf-8')
}
