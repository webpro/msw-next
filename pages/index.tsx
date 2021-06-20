import Link from 'next/link';

export default function Index({ user }) {
  return (
    <div>
      <p>{user?.name}</p>
      <Link href="/other">
        <a>other</a>
      </Link>
    </div>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/user');
  const user = await res.json();
  return {
    user,
  };
};
