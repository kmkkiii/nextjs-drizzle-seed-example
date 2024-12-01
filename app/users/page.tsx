import { db } from '@/db/client';
import { usersTable } from '@/db/schema';
import Link from 'next/link';

export default async function Home() {
  const users = await db.select().from(usersTable);

  return (
    <div className="w-1/2 m-auto">
      <div className="items-center justify-items-center">
        <h1 className="text-xl py-5">Users</h1>
        <table className="table-auto">
          <thead>
            <tr className="bg-slate-200">
              <th className="border border-slate-300 p-2 ">Name</th>
              <th className="border border-slate-300 p-2">Email</th>
              <th className="border border-slate-300 p-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.length !== 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="border border-slate-300 p-2">{user.name}</td>
                  <td className="border border-slate-300 p-2">{user.email}</td>
                  <td className="border border-slate-300 p-2">{user.age}</td>
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
