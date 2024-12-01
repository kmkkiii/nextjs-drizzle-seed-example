import { seed } from 'drizzle-seed';
import * as schema from './schema';
import { db } from './client';

async function main() {
  await seed(db, schema).refine((f) => ({
    usersTable: {
      count: 5,
      columns: {
        id: f.int({
          minValue: 10000,
          maxValue: 20000,
          isUnique: true,
        }),
        age: f.int({
          minValue: 20,
          maxValue: 100,
        }),
      },
    },
    postsTable: {
      count: 5,
      columns: {
        title: f.valuesFromArray({
          values: [
            'The sun set behind the mountains',
            'Homemade pizza',
            'A good book and a quiet corner',
            'Rainy days',
            'A new hiking trail',
          ],
          isUnique: true,
        }),
        description: f.valuesFromArray({
          values: [
            'The sun set behind the mountains, painting the sky in hues of orange and purple',
            "I can't believe how good this homemade pizza turned out!",
            'Sometimes, all you need is a good book and a quiet corner.',
            'Who else thinks rainy days are perfect for binge-watching old movies?',
            'Tried a new hiking trail today and found the most amazing waterfall!',
          ],
        }),
      },
    },
  }));
}

main();
