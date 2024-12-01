import { seed } from 'drizzle-seed';
import * as schema from './schema';
import { db } from './client';

async function main() {
  await seed(db, schema).refine((f) => ({
    usersTable: {
      count: 10,
      columns: {
        id: f.int({
          minValue: 1,
          isUnique: true,
        }),
        name: f.fullName(),
        age: f.weightedRandom([
          {
            weight: 0.5,
            value: f.int({ minValue: 20, maxValue: 39 }),
          },
          {
            weight: 0.2,
            value: f.int({ minValue: 40, maxValue: 49 }),
          },
          {
            weight: 0.2,
            value: f.int({ minValue: 50, maxValue: 59 }),
          },
          {
            weight: 0.1,
            value: f.int({ minValue: 60, maxValue: 100 }),
          },
        ]),
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
