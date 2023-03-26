import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { Card } from "~/components/card";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const {data, isLoading} = api.project.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>
  if(!data) return <div>Something went wrong</div>

  return (
    <>
      <Head>
        <title>T3 portfolio</title>
        <meta name="description" content="Portfolio T3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {/* <AuthShowcase /> */}
          <div className="container flex flex-col items-center justify-center gap-2 px-4 py-16 ">
            {/* {[...data]?.map(({project}) => (<div key={project.id}>{project.title}</div>))} */}
          </div>
        </div>
        <Card/>
      </main>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
