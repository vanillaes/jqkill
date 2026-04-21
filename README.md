<h1 align="center">JQKill</h1>

Quickly target, locate, and report each-and-every call to jQuery for elimination. Works like a linter but for jQuery specifically.

<div align="center">
  <a href="https://github.com/vanillaes/jqkill/releases"><img src="https://badgen.net/github/tag/vanillaes/jqkill" alt="GitHub Release"></a>
  <a href="https://npmjs.com/package/@vanillaes/jqkill"><img src="https://badgen.net/npm/dw/@vanillaes/jqkill?icon=npm" alt="NPM Weekly Downloads"></a>
  <a href="https://jsr.io/@vanillaes/jqkill"><img src="https://jsr.io/badges/@vanillaes/jqkill/weekly-downloads" alt="JSR Weekly Downloads"></a>
  <a href="https://jsr.io/@vanillaes/jqkill"><img src="https://jsr.io/badges/@vanillaes/jqkill/score" alt="JSR Score"></a>
  <a href="https://github.com/vanillaes/jqkill/actions"><img src="https://github.com/vanillaes/jqkill/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/jqkill/actions"><img src="https://github.com/vanillaes/jqkill/workflows/Release/badge.svg" alt="Release Status"></a>
</div>

## Usage

### Arguments

`jqkill [pattern] -i [pattern] -r [path]`

- `[pattern]` - File(s)/glob(s) to match (default `**/*.js`)
- `--ignore` - Ignore file(s)/glob(s) (default `**/node_modules/**`)
- `--cwd` - Current working directory

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
