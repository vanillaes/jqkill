/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import jqkill from '../index.js';
import { readFixture } from './util/index.js';

const consoleError = console.error;
let errorOutput = [];

const basic = readFixture('basic.js');
const chain = readFixture('chain.js');
const util = readFixture('util.js');
const semiColon = readFixture('semi-colon.js');
const mixed = readFixture('mixed.js');
const row1 = readFixture('row1.js');
const row2 = readFixture('row2.js');
const row3 = readFixture('row3.js');
const col1 = readFixture('col1.js');
const col2 = readFixture('col2.js');
const col3 = readFixture('col3.js');

test('setup', (t) => {
  console.error = e => { errorOutput.push(e); };
  t.end();
});

test('Basic - should work with a basic jQuery selector', async (t) => {
  const expect = [
    '1:1: $(\'#test\')'
  ];
  jqkill(basic);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Chain - should work with a jQuery chain', async (t) => {
  const expect = [
    '1:1: $(\'#test\').html( "Next Step..." )'
  ];
  jqkill(chain);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Util - should work with a jQuery utility method', async (t) => {
  const expect = [
    '1:1: $.csv(\'string\')'
  ];
  jqkill(util);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('SemiColon - should work with a semicolon at the end', async (t) => {
  const expect = [
    '1:1: $(\'#test\')'
  ];
  jqkill(semiColon);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Mixed - should work with all jQuery forms intermixed', async (t) => {
  const expect = [
    '1:1: $(\'#test\')',
    '2:1: $(\'#test\').html( "Next Step..." )',
    '3:1: $.csv(\'string\')'
  ];
  jqkill(mixed);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Row1 - should display the correct row value', async (t) => {
  const expect = [
    '3:1: $(\'#test\')'
  ];
  jqkill(row1);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Row2 - should display the correct row value with a chain', async (t) => {
  const expect = [
    '3:1: $(\'#test\').html( "Next Step..." )'
  ];
  jqkill(row2);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Row3 - should display the correct row value with a util method', async (t) => {
  const expect = [
    '3:1: $.csv(\'string\')'
  ];
  jqkill(row3);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Col1 - should display the correct column value', async (t) => {
  const expect = [
    '1:3: $(\'#test\')'
  ];
  jqkill(col1);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Col2 - should display the correct column value with a chain', async (t) => {
  const expect = [
    '1:3: $(\'#test\').html( "Next Step..." )'
  ];
  jqkill(col2);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('Col3 - should display the correct column value with a util method', async (t) => {
  const expect = [
    '1:3: $.csv(\'string\')'
  ];
  jqkill(col3);

  t.deepEqual(errorOutput, expect);

  errorOutput = [];
  t.end();
});

test('setup', (t) => {
  console.error = consoleError;
  t.end();
});
