/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import jqkill from '../index.js';
import { readFixture } from './util/index.js';

const consoleError = console.error;
let errorOutput = [];

const basic = readFixture('basic.js');

test('setup', (t) => {
  console.error = e => { errorOutput.push(e); };
  t.end();
});

test('BasicUsage', async (t) => {
  const expect = [
    '0:0: $(\'#test\')'
  ];
  jqkill(basic);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('setup', (t) => {
  console.error = consoleError;
  t.end();
});
