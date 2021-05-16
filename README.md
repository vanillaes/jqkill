<h1 align="center">JQKill</h1>

Quickly target, locate, and report each-and-every call to jQuery for elimination. Works like a linter but for jQuery specifically.

<div align="center">
  <a href="https://github.com/vanillaes/jqkill/releases"><img src="https://badgen.net/github/tag/vanillaes/jqkill" alt="GitHub Release"></a>
  <a href="https://www.npmjs.com/package/jqkill"><img src="https://badgen.net/npm/v/jqkill" alt="NPM Release"></a>
  <a href="https://github.com/vanillaes/jqkill/actions"><img src="https://github.com/vanillaes/jqkill/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/jqkill/actions"><img src="https://github.com/vanillaes/jqkill/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/aSWYgtybzV"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
</div>

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
