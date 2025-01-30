import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      Click
      <span>&nbsp;</span>
      <Link href="/documents/123" className="underline text-blue-500">
        here
      </Link>
      <span>&nbsp;</span>
      to go to document id
    </div>
  );
};

export default HomePage;
