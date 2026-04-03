import glob from 'glob'
import { promisify } from 'util'
const globAsync = promisify(glob)

/**
 * Match glob(s)
 * @param {string} pattern glob pattern(s) to match
 * @param {string} ignore glob of pattern(s) to ignore
 * @param {string} root the current working directory
 * @returns {Promise<Array>} an array of paths
 */
export async function match (pattern, ignore, root) {
  // multiple ignore patters
  if (ignore.includes(',')) {
    ignore = ignore.split(',')
  }

  return globAsync(pattern, { cwd: root, ignore })
}
