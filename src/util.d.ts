/**
 * Match glob(s)
 * @param {string} pattern glob pattern(s) to match
 * @param {string} ignore glob of pattern(s) to ignore
 * @param {string} root the current working directory
 * @returns {Promise<string[]>} an array of paths
 */
export function match(pattern: string, ignore: string, root: string): Promise<string[]>;
/**
 * Read the contents of a source file
 * @param {string} path the path to the source file
 * @returns {Promise<string>} the source file contents
 */
export function readContents(path: string): Promise<string>;
/**
 * Load a test fixture
 * @param {string} path the path to the test fixture
 * @returns {string} the test fixture contents
 */
export function readFixture(path: string): string;
