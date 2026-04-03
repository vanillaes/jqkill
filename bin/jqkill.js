#!/usr/bin/env node
import { match, readContents } from '../src/index.js'
import { jqkill } from '../src/index.js'
// import { kill } from './commands/index.js'
import { Command } from 'commander'
import { join } from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('../package.json')

const program = new Command()
  .name('jqkill')
  .description('Locate JQuery for removal')
  .version(pkg.version)

program
  .argument('[pattern]', 'Glob pattern', '**/*.js')
  .option('-i, --ignore <value>', 'Ignore files pattern', '**/node_modules/**')
  .option('-r, --root [value]', 'The root path', process.cwd())
  .action((pattern, options) => {
    kill(pattern, options)
  })

program.parse(process.argv)

/**
 * @private
 * @param {string} pattern glob pattern
 * @param {object} options jqkill options
 */
async function kill (pattern, options) {
  // glob match to fetch the test file list
  const files = await match(pattern, options.ignore, options.root)
  let globalResult = false

  for (const path of files) {
    const absPath = join(options?.root, path)
    const contents = await readContents(absPath)
    const result = jqkill(contents, absPath)
    if (result) { globalResult = true }
  }

  if (globalResult) {
    process.exitCode = 1
    console.error('\x1b[31m%s\x1b[0m %s', 'ERR', 'jQuery found!')
  }
}
