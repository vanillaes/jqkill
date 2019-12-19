[![GitHub Releases](https://img.shields.io/github/release/vanillaes/jqkill.svg)](https://github.com/vanillaes/jqkill/releases)
[![NPM Release](https://img.shields.io/npm/v/jqkill.svg)](https://www.npmjs.com/package/jqkill)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillaes/jqkill/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/csv-es/workflows/Latest/badge.svg)](https://github.com/vanillaes/jqkill/actions)
[![Release Status](https://github.com/vanillaes/csv-es/workflows/Release/badge.svg)](https://github.com/vanillaes/jqkill/actions)

# JQKill

Locate each-and-every call to jQuery

*Note: Since this is an ES package, it requires Node >= v13.2*

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
