import { readFileSync } from 'fs'
import { join } from 'path'

/**
 * Load a test fixture
 * @param {string} path the path to the test fixture
 * @returns {string} the test fixture contents
 */
export function readFixture (path) {
  return readFileSync(join(process.cwd(), 'src', '__test__', path), 'utf-8')
}
