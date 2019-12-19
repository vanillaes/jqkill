/* eslint-disable no-new-func */
/**
 * Search a file's contents for calls to jQuery
 *
 * @param {string} contents the the document contents
 * @returns an object containing 'meta' and 'body' fields
 */
export default function JQKill (contents = '', path = null) {
  let matches = [];
  let match = '';
  let state = 0;
  const hit = {
    path,
    value: '',
    col: null,
    row: null
  };
  let row = 1;
  let col = 1;
  let result = false;

  const lexer = RegExp(/\$|\(|\w+\(|\.|\)|\r\n|\n|\r|[^$.)\r\n]+/y);

  while ((matches = lexer.exec(contents)) !== null) {
    match = matches[0];

    switch (state) {
      case 0: // start
        switch (true) {
          case match === '$':
            state = 1;
            hit.value += match;
            hit.row = row;
            hit.col = col;
            col += match.length;
            break;
          case /^(\r\n|\n|\r)$/.test(match):
            state = 0;
            col = 1;
            row += 1;
            break;
          default:
            state = 0;
            col += match.length;
            break;
        }
        break;
      case 1: // is function?
        switch (true) {
          case match === '(':
            state = 2;
            hit.value += match;
            col += match.length;
            break;
          case /\w+\(/.test(match):
            state = 2;
            hit.value += match;
            col += match.length;
            break;
          case match === '.':
            state = 1;
            hit.value += match;
            break;
          default:
            state = 0;
            flush(hit);
            break;
        }
        break;
      case 2: // value
        switch (true) {
          case match === ')' && lexer.lastIndex === contents.length:
            hit.value += match;
            result = true;
            kill(hit);
            break;
          case match === ')':
            state = 3;
            hit.value += match;
            break;
          default:
            state = 2;
            hit.value += match;
            break;
        }
        break;
      case 3: // is end?
        switch (true) {
          case match === '.':
            state = 1;
            hit.value += match;
            break;
          case /^(\r\n|\n|\r)$/.test(match):
            state = 0;
            col = 1;
            row += 1;
            result = true;
            kill(hit);
            break;
          default:
            state = 0;
            result = true;
            kill(hit);
            break;
        }
        break;
    }
  }
  return result;
}

function kill (hit) {
  const path = hit.path
    ? `${hit.path}:`
    : '';
  console.error(`${path}${hit.row}:${hit.col}: ${hit.value}`);
  flush(hit);
}

function flush (hit) {
  hit.value = '';
  hit.row = null;
  hit.col = null;
}
