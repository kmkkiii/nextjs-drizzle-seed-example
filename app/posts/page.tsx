import { db } from '@/db/client';
import { postsTable, usersTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

export default async function Home() {
  const results = await db
    .select({
      id: postsTable.id,
      title: postsTable.title,
      description: postsTable.description,
      user: { name: usersTable.name },
    })
    .from(postsTable)
    .innerJoin(usersTable, eq(postsTable.userId, usersTable.id));

  return (
    <div className="w-1/2 m-auto">
      <div className="items-center justify-items-center">
        <h1 className="text-xl py-5">Posts</h1>
        <table className="table-auto">
          <thead>
            <tr className="bg-slate-200">
              <th className="border border-slate-300 p-2 ">Title</th>
              <th className="border border-slate-300 p-2">Description</th>
              <th className="border border-slate-300 p-2">User</th>
            </tr>
          </thead>
          <tbody>
            {results.length !== 0 ? (
              results.map((post) => (
                <tr key={post.id}>
                  <td className="border border-slate-300 p-2">{post.title}</td>
                  <td className="border border-slate-300 p-2">
                    {post.description}
                  </td>
                  <td className="border border-slate-300 p-2">
                    {post.user.name}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="border text-center border-slate-300 p-2"
                >
                  Not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <footer className="py-5">
          <Link href={'/'} className="text-lg underline">
            Home
          </Link>
        </footer>
      </div>
    </div>
  );
}
