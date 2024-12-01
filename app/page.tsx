import Link from 'next/link';

export default async function Home() {
  return (
    <div className="w-1/2 m-auto">
      <div className="items-center justify-items-center">
        <h1 className="text-2xl py-5">Home</h1>
        <ul className="p-2">
          <li className="list-disc p-2 text-xl underline text-primary">
            <Link href="/users">Users</Link>
          </li>
          <li className="list-disc p-2 text-xl underline text-primary">
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
