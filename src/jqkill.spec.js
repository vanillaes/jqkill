/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import jqkill from '../index.js';
import { readFixture } from './util/index.js';

const consoleError = console.error;
let errorOutput = [];

const basic = readFixture('basic.js');
const chain = readFixture('chain.js');
const semiColon = readFixture('semi-colon.js');
const row1 = readFixture('row1.js');
const col1 = readFixture('col1.js');

test('setup', (t) => {
  console.error = e => { errorOutput.push(e); };
  t.end();
});

test('Basic - should work with a basic jQuery selector', async (t) => {
  const expect = [
    '0:0: $(\'#test\')'
  ];
  jqkill(basic);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Chain - should work with a jQuery chain', async (t) => {
  const expect = [
    '0:0: $(\'#test\').html( "Next Step..." )'
  ];
  jqkill(chain);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('SemiColon - should work with a semicolon at the end', async (t) => {
  const expect = [
    '0:0: $(\'#test\')'
  ];
  jqkill(semiColon);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Row1 - should display the correct row value', async (t) => {
  const expect = [
    '2:0: $(\'#test\')'
  ];
  jqkill(row1);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Col1 - should display the correct column value', async (t) => {
  const expect = [
    '0:2: $(\'#test\')'
  ];
  jqkill(col1);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('setup', (t) => {
  console.error = consoleError;
  t.end();
});
