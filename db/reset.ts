import { db } from './client';
import * as schema from './schema';
import { reset } from 'drizzle-seed';

async function main() {
  await reset(db, schema);
}

main();
