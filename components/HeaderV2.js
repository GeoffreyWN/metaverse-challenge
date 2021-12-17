import { ByMoralis, useMoralis } from "react-moralis";
import Image from 'next/image'
import { ShieldCheckIcon } from '@heroicons/react/solid'
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";


const HeaderV2 = () => {
    const { user } = useMoralis();
    return (
        <div className=" sticky top-0 p-5 z-50 bg-header-hero bg-no-repeat bg-cover bg-center shadow-sm text-pink-500 border-b-4 border-lime-500 rounded-b-none md:rounded-b-3xl " >

            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center ">

                <div className="relative h-20 w-20 mx-auto hidden lg:inline-grid">
                    <Image
                        src="/explosion.jpg"
                        layout="fill"
                        className="rounded-full animate-pulse "
                        objectFit="cover"
                    />

                </div>

                <div className=' col-span-4 text-left space-y-4 lg:text-center' >

                    <div className="hidden md:hidden lg:block absolute top-5 left-5 mt-1" >
                        <ByMoralis style={{ marginLeft: 'auto', marginRight: 'auto' }} variant='dark' />
                    </div>

                    <div className="relative h-32 w-32 md:h-36 md:w-36 lg:h-44 lg:w-44 lg:mx-auto shadow-lg shadow-pink-300 border-lime-500 border-8 rounded-full hover:animate-pulse ">
                        <Avatar logoutOnPress />
                    </div>
                    <h1 className="text-2xl font-specialelite">Welcome to the</h1>

                    <h1 className="glitch font-bold font-specialelite text-4xl" data-text="PAPAFAM Metaverse"> PAPAFAM Metaverse</h1>

                    <h2 className=" group flex  lg:justify-center text-4xl pb-4 font-bold truncate font-specialelite cursor-pointer ">  < ShieldCheckIcon className="h-8 mx-2 text-amber-500 group-hover:animate-bounce " /> Avenger {user.getUsername()}  < ShieldCheckIcon className="h-8 mx-2 text-amber-500 group-hover:animate-bounce" /></h2>

                    <ChangeUsername />

                </div>

                <div className="relative h-20 w-20 mx-auto hidden lg:inline-grid">
                    <Image
                        src="/explosion.jpg"
                        layout="fill"
                        className="rounded-full animate-pulse "
                        objectFit="cover"
                    />

                </div>

            </div>
        </div>
    )
}

export default HeaderV2

//left logo
//https://links.papareact.com/3pi