import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Header } from "~/components/header";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const {data} = api.project.getAll.useQuery();

  return (
    <>
      <Head>
        <title>T3 portfolio</title>
        <meta name="description" content="Portfolio T3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <div className="w-full">
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div>
            <p className="text-2xl text-white">
            </p>
            <AuthShowcase />
          </div>
          <div className="container flex flex-col items-center justify-center gap-2 px-4 py-16 ">
            {data?.map((project) => (<div key={project.id}>{project.title}</div>))}
            {data?.map((project) => (<div key={project.id}>{project.content}</div>))}
          </div>
          <div>
            <p>hello world</p>
          </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
