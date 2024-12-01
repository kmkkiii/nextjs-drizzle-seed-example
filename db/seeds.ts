import { seed } from 'drizzle-seed';
import * as schema from './schema';
import { db } from './client';

async function main() {
  await seed(db, schema).refine((f) => ({
    usersTable: {
      count: 5,
      columns: {
        id: f.int({
          minValue: 1,
          isUnique: true,
        }),
        name: f.fullName(),
        age: f.int({
          minValue: 20,
          maxValue: 100,
        }),
      },
    },
    postsTable: {
      count: 5,
      columns: {
        title: f.loremIpsum({ sentencesCount: 1 }),
        description: f.loremIpsum({ sentencesCount: 2 }),
      },
    },
  }));
}

main();
