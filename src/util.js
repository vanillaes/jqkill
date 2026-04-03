import { readFileSync } from 'node:fs'
import { access, constants, readFile } from 'node:fs/promises'
import { join } from 'node:path'

import glob from 'glob'
import { promisify } from 'util'
const globAsync = promisify(glob)

/**
 * Check if a file/folder exists
 * @param {string} path the path to the file/folder
 * @returns {Promise<boolean>} trie if the file/folder exists, false otherwise
 */
async function fileExists (path) {
  try {
    await access(path, constants.F_OK)
    return true
  } catch (error) {
    return false
  }
}

/**
 * Match glob(s)
 * @param {string} pattern glob pattern(s) to match
 * @param {string} ignore glob of pattern(s) to ignore
 * @param {string} root the current working directory
 * @returns {Promise<string[]>} an array of paths
 */
export async function match (pattern, ignore, root) {
  const ignores = ignore.includes(',') ? ignore.split(',') : [ignore]

  return globAsync(pattern, { cwd: root, ignore: ignores })
}

/**
 * Read the contents of a source file
 * @param {string} path the path to the source file
 * @returns {Promise<string>} the source file contents
 */
export async function readContents (path) {
  const exists = await fileExists(path)
  if (!exists) {
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
