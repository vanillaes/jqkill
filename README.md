<h1 align="center">JQKill</h1>

Quickly target, locate, and report each-and-every call to jQuery for elimination. Works like a linter but for jQuery specifically.

[![GitHub Releases](https://badgen.net/github/tag/vanillaes/jqkill)](https://github.com/vanillaes/jqkill/releases)
[![NPM Release](https://badgen.net/npm/v/jqkill)](https://www.npmjs.com/package/jqkill)
[![MIT License](https://badgen.net/github/license/vanillaes/jqkill)](https://raw.githubusercontent.com/vanillaes/jqkill/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/jqkill/workflows/Latest/badge.svg)](https://github.com/vanillaes/jqkill/actions)
[![Release Status](https://github.com/vanillaes/jqkill/workflows/Release/badge.svg)](https://github.com/vanillaes/jqkill/actions)

## Usage

### Arguments

`jqkill [pattern] -i [pattern] -r [path]`

- `[pattern]` - the file matcher pattern (default `**/*.js`)
- `-i` | `--ignore` - the ignore matcher pattern (default `**/node_modules/**`)
- `-r` | `--root` - the root path to run the tests from (default `process.cwd()`)

### Basic Usage

Use the defaults

```sh
jqkill
```

### Advanced Usage

Specify custom parameters

```sh
jqkill "**/*.js" -i "**/lib/**" -r ../kuma/
```

**Note: In Linux/OSX the matcher patterns must be delimited in quotes.**
