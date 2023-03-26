import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header = () => {
    const { data: sessionData } = useSession();

    return(
    <div className="navbar bg-base-300">
      <div className="flex-1 pl-5 text-3xl font-bold">
        <Link href="/">{sessionData?.user?.name ? ` ${sessionData.user.name} Portfolio` : ""}</Link>
      </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal text-xl px-1">
      <li><Link href="/">Projects</Link></li>
      <li><Link href="/about">About me</Link></li>
      <li><Link href="/cv">CV</Link></li>
    </ul>
  </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </label>
          ) : (
            <button
              className="btn-ghost rounded-btn btn"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
    );
}