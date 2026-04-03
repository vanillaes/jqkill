/**
 * @typedef {object} Hit
 * @property {string} [path] - the path of the finding
 * @property {string} value - the source of the finding
 * @property {number} col - the column of the finding
 * @property {number} row - the row of the finding of the finding
 */
/**
 * Search a file's contents for calls to jQuery
 * @param {string} contents the the document contents
 * @param {string} path the path of the file being checked
 * @returns {boolean} true if jquery statement(s) have been found
 */
export function jqkill(contents: string | undefined, path: string): boolean;
export type Hit = {
    /**
     * - the path of the finding
     */
    path?: string | undefined;
    /**
     * - the source of the finding
     */
    value: string;
    /**
     * - the column of the finding
     */
    col: number;
    /**
     * - the row of the finding of the finding
     */
    row: number;
};
