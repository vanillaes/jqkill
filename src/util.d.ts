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
