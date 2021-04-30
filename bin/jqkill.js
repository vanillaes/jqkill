#!/usr/bin/env node
import cli from 'commander'
import { join } from 'path'
import jqkill from '../src/jqkill.js'
import { basePath, readContents, readPkg, match } from '../src/util/index.js'

const DEFAULT_PATTERN = '**/*.js'
const DEFAULT_IGNORE = '**/node_modules/**'
const DEFAULT_ROOT = process.cwd();

(async () => {
  const pkg = await readPkg()

  cli.version(pkg.version)
    .arguments('[pattern]')
    .option('-i, --ignore [value]', 'Ignore files pattern')
    .option('-r, --root [value]', 'The root path')
    .parse(process.argv)

  // prep the input
  const pattern = cli.args[0] ? cli.args[0] : DEFAULT_PATTERN
  const ignore = cli.ignore ? cli.ignore : DEFAULT_IGNORE
  const root = cli.root ? cli.root : DEFAULT_ROOT

  // glob match to fetch the test file list
  const files = await match(pattern, ignore, root)
  let globalResult = false

  for (const path of files) {
    const contents = await readContents(path)
    const fullPath = join(basePath, path)
    const result = jqkill(contents, fullPath)
    if (result) { globalResult = true }
  }

  if (globalResult) {
    process.exitCode = 1
    console.error('\x1b[31m%s\x1b[0m %s', 'ERR', 'jQuery found!')
  }
})().catch(e => {
  console.error(e)
})
