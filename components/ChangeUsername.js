import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useMoralis } from "react-moralis";
import { PencilIcon } from '@heroicons/react/outline'



const ChangeUsername = () => {
    // let [isOpen, setIsOpen] = useState(false)
    const [username, setUsername] = useState('')
    const { setUserData, isUserUpdating, userError, user } = useMoralis();



    const updateUsername = (e) => {
        e.preventDefault()
        // const username = prompt(`Enter your new username: (current: ${user.getUsername()})`)

        if (!username) return

        setUserData({
            username
        })

        setUsername('')

        // closeModal()
    }

    return (
        <>
            <div className="text-sm absolute top-5 right-5" >

                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={`
                ${open ? '' : 'text-opacity-90'}
                group flex flex-row bg-black border font-mulish text-red-100 border-red-400 shadow-md shadow-pink-300 py-2 px-3 rounded-full transform-gpu transition duration-300 ease-in-out scale-100 hover:text-white hover:bg-pink-70 hover:bg-pink-400 hover:scale-110 hover:-mt-1"`}
                            >
                                <PencilIcon className="h-5 text-red-400 pr-2 group-hover:text-white" />
                                <span>Edit Username</span>
                                <ChevronDownIcon
                                    className={`${open ? '' : ' text-red-400 text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute top-12 left-10 z-10 w-68 max-w-sm px-4 mt-3 transform -translate-x-1/2 sm:px-0 lg:max-w-3xl">

                                    <form className="overflow-hidden w-full rounded-xl shadow-md shadow-pink-300">
                                        <div className="relative bg-pink-100 p-3">

                                            <div className=" p-3 mx-auto rounded-full border-2 border-green-300  "  >
                                                <input type="text" value={username} placeholder="Enter username..." className=" text-gray-700 outline-none bg-transparent" onChange={(e) => setUsername(e.target.value)} />
                                            </div>

                                        </div>

                                        <button
                                            type="submit"
                                            className=" hidden m-auto w-1/2 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={updateUsername}
                                        >
                                            Update
                                        </button>

                                    </form>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>

        </>
    )
}

export default ChangeUsername
