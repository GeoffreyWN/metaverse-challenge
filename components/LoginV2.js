import { useMoralis } from "react-moralis";
import Image from 'next/image'
import Atropos from 'atropos/react';
import Typewriter from 'typewriter-effect';
import { LoginIcon } from '@heroicons/react/outline'


const LoginV2 = () => {
    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative" >

            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center opacity-95	 " >
                <div className="mt-28 text-2xl md:text-6xl font-bold font-specialelite text-gray-300">

                    <Typewriter

                        options={{
                            strings: ['Avengers Assemble!', 'Welcome to the Metaverse!'],
                            autoStart: true,
                            loop: true,
                            devMode: false
                        }}
                    />

                </div>


                <Atropos
                    activeOffset={60}
                    // alwaysActive={true}
                    shadowScale={1.05}
                    shadowOffset={50}
                    shadow={true}
                    // style={{ width: '600px', height: '380px', marginTop: 90 }}
                    className=" w-2/3 md:w-1/3 mt-32"
                >

                    <div
                        className="flex flex-col items-center justify-center space-y-8 p-6 md:p-4 bg-indigo-800 opacity-75 rounded-3xl "
                        data-atropos-opacity="1;0.9"
                        data-atropos-offset="-8"
                    >
                        <div className="p-4" >
                            <Image
                                src="/explosion.jpg"
                                width={200}
                                height={200}
                                className="object-cover p-2 mb-2 shadow-sm shadow-red-400 rounded-full"
                                data-atropos-offset="-5"
                            />
                        </div>


                        <button
                            data-atropos-offset="5"
                            className="group flex flex-row items-center bg-gray-900 text-white rounded-2xl p-5 font-bold font-mulish animate-bounce shadow-lg shadow-red-400 transform-gpu transition delay-150 duration-300 ease-in-out hover:bg-red-400 hover:text-gray-900 hover:shadow-gray-900"
                            onClick={authenticate}> <LoginIcon className="h-5 text-red-400 pr-2 group-hover:text-gray-900" />Login into the Metaverse</button>
                    </div>
                </Atropos>
            </div>



            <div className="w-full h-screen" >
                <Image src="https://cdn.pixabay.com/photo/2021/10/11/17/38/light-6701427_960_720.jpg" layout='fill' objectFit='cover'
                />
            </div>
        </div>
    )
}


// top logo
// https://cdn.pixabay.com/photo/2017/07/08/10/16/explosion-2483998_960_720.jpg
// https://links.papareact.com/3pi

// cover
// https://cdn.pixabay.com/photo/2021/10/11/17/38/light-6701427_960_720.jpg



export default LoginV2
