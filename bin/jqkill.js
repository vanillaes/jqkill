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
  .argument('[pattern]', 'Glob pattern', '**/*.js')
  .option('-i, --ignore <value>', 'Ignore files pattern', '**/node_modules/**')
  .option('-r, --root [value]', 'The root path', process.cwd())
  .action((pattern, options) => {
    kill(pattern, options)
  })

program.parse(process.argv)

/**
 * @private
 * @param {string} pattern Glob pattern
 * @param {object} [options] 'jqkill' options
 * @param {string} [options.cwd] Current working directory
 * @param {string} [options.ignore] Ignore pattern
 */
async function kill (pattern, options = {}) {
  const {
    cwd = process.cwd(),
    ignore
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
