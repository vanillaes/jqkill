#!/usr/bin/env node
import { jqkill, readContents } from '../src/index.js'
import { join } from 'node:path'
import { match, Package } from '@vanillaes/esmtk'
import { Command } from 'commander'

const pkg = new Package()
const program = new Command()
  .name('jqkill')
  .version(pkg?.version || '')
  .description('Locate all references to jQuery for easy removal')
  .argument('[pattern]', 'File(s)/glob(s) to match (default: **/*.js)')
  .option('--ignore <pattern>', 'Ignore file(s)/glob(s) (default: **/node_modules/**)')
  .option('--cwd <dir>', 'Current working directory')
  .action((pattern, options) => {
    kill(pattern, options)
  })

program.parse(process.argv)

/**
 * @private
 * @param {string} pattern File(s)/glob(s) to match
 * @param {object} [options] 'jqkill' options
 * @param {string} [options.cwd] Current working directory
 * @param {string} [options.ignore] Ignore file(s)/glob(s)
 */
async function kill (pattern = '**/*.js', options = {}) {
  const {
    cwd = process.cwd(),
    ignore = '**/node_modules/**'
  } = options

  // glob match to fetch the test file list
  const files = await match(pattern, ignore, cwd)
  let globalResult = false

  for (const path of files) {
    const absPath = join(cwd, path)
    const contents = await readContents(absPath)
    const result = jqkill(contents, absPath)
    if (result) { globalResult = true }
  }

  if (globalResult) {
    process.exitCode = 1
    console.error('\x1b[31m%s\x1b[0m %s', 'ERR', 'jQuery found!')
  }
}
