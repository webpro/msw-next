import Link from 'next/link';

export default function Other({ user }) {
  return (
    <div>
      <p>{user?.name}</p>
      <Link href="/">
        <a>index</a>
      </Link>
    </div>
  );
}

Other.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/user');
  const user = await res.json();
  return {
    user,
  };
};
