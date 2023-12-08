import fs from 'fs';
import { test, expect } from '@jest/globals';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getGenDiff from '../index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '.', '__fixtures__', filename);

test('gendiff', () => {
  expect(getGenDiff('filepath1.json', 'filepath2.json')).toEqual(fs.readFileSync(getFixturePath('expected_JSON.txt'), 'utf-8'));
});
