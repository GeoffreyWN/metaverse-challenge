import Head from 'next/head'
import { useMoralis } from "react-moralis";
import Login from '../components/Login'
import LoginV2 from '../components/LoginV2';
import Header from '../components/Header';
import Messages from '../components/Messages';
import HeaderV2 from '../components/HeaderV2';


export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <LoginV2 />


  return (

    // <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden ">
    <div className="main-container" >
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>

      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/m.png" />
      </Head>
      <div className="h-screen overflow-y-scroll">
        <div className="max-w-screen-2xl mx-auto ">
          <HeaderV2 />
          <Messages />
        </div>
      </div>

    </div>

  )
}
