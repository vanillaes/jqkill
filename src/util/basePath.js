import { dirname, join } from 'path';

export const basePath = join(dirname(new URL(import.meta.url).pathname), '/');
