import { readFileSync } from 'fs';
import { join } from 'path';

export function readFixture (path) {
  return readFileSync(join(process.cwd(), 'src', '__test__', path), 'utf-8');
}
