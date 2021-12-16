import Head from 'next/head'
import { useMoralis } from "react-moralis";
import Login from '../components/Login'
import LoginV2 from '../components/LoginV2';


export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <LoginV2 />


  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the app</h1>
      <button onClick={logout}> Logout </button>

    </div>
  )
}
