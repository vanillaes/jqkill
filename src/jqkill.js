/* eslint-disable no-new-func */
/**
 * Search a file's contents for calls to jQuery
 *
 * @param {string} contents the the document contents
 * @returns an object containing 'meta' and 'body' fields
 */
export default function JQKill (contents = '', path) {
  let matches = [];
  let match = '';
  let state = 0;
  let value = '';
  let row = 0;
  let col = 0;

  const lexer = RegExp(/\$|\(|\.|\)|\r\n|\n|\r|[^\$\\.\)\r\n]+/y);

  while ((matches = lexer.exec(contents)) !== null) {
    match = matches[0];

    switch (state) {
      case 0: // start
        switch (true) {
          case match === '$':
            state = 1;
            value += match;
            break;
          default:
            state = 0;
            break;
        }
        break;
      case 1: // is function?
        switch (true) {
          case match === '(':
            state = 2;
            value += match;
            break;
          default:
            state = 0;
            value = '';
            break;
        }
        break;
      case 2: // value
        switch (true) {
          case match === ')':
            state = 3;
            break;
          default:
            state = 2  
            value += match;
            break;
        }
        break;
      case 3: // is end?
        switch (true) {
          case match === '.':
            state = 1;
            value += match;
            break;
          default:
            state = 0;
            hit(value);
            value = '';
            break;
        }
        break;
    }
  }
}

function hit(path, value) {
  console.error(`${path}: ${value}`)
}