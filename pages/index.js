import Head from 'next/head'
import { useMoralis } from "react-moralis";
import Login from '../components/Login'
import LoginV2 from '../components/LoginV2';
import Header from '../components/Header';
import Message from '../components/Messages';


export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <LoginV2 />


  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden ">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/m.png" />
      </Head>
     <div className="h-screen overflow-y-scroll">
       <div className="max-w-screen-2xl mx-auto ">
          <Header/>
          <Message />
       </div>
     </div>
      <button onClick={logout}> Logout </button>

    </div>
  )
}
