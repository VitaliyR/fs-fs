/* global test, expect */

const fsOriginal = require('fs');
const fs = require('./index.js');

const testFile = './test/test.txt';
const wrongFile = './wrongDir/test.txt';

test('Original methods exists', () => {
  Object.keys(fsOriginal).forEach((prop) => {
    expect(fs.native[prop]).toEqual(fsOriginal[prop]);
  });
});

test('writeFile', async () => {
  await fs.writeFile(testFile, 'test');
  try {
    await fs.writeFile(wrongFile, 'test');
  } catch (e) {
    expect(e).not.toBeUndefined();
  }
});

test('readFile', async () => {
  const file = await fs.readFile(testFile, 'utf-8');
  expect(file).not.toBeNull();
  try {
    await fs.readFile(wrongFile);
  } catch (e) {
    expect(e).not.toBeUndefined();
  }
});

test('exists', async () => {
  expect(await fs.exists(testFile)).toBeTruthy();
  expect(await fs.exists(wrongFile)).toBeFalsy();
});
