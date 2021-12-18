import { useMoralis } from "react-moralis";
import TimeAgo from 'timeago-react';
import { CheckIcon } from '@heroicons/react/solid'
import Avatar from "./Avatar";


const Message = ({ message }) => {
    const { user } = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get('ethAddress')

    console.log('isUserMessage->', isUserMessage)
    console.log('message->', message)
    console.log('user->', user)


    return (
        <div className={`flex items-end space-x-2 relative font-mulish ${isUserMessage && 'justify-end'}`} >

            <div className={`relative h-8 w-8 rounded-full shadow-sm shadow-lime-300 border border-lime-300  ${isUserMessage && 'order-last ml-2'}`} >
                <Avatar />
            </div>

            <div className={`flex space-x-4 py-3 px-6 rounded-lg ${isUserMessage ?
                'rounded-br-none bg-pink-200 border-l border-b border-cyan-300 shadow-sm shadow-cyan-300 '
                :
                'rounded-bl-none bg-blue-300 border-r border-b border-amber-300 shadow-sm shadow-amber-300'}`} >
                <p className=" flex items-center text-gray-800 font-medium" >{message.get('message')} <CheckIcon className="h-4 ml-2 text-blue-300 font-bold " />  </p>
            </div>

            <TimeAgo
                className={`text-[10px] italic text-gray-400 ${isUserMessage && 'order-first pr-1 '}`}

                datetime={message.createdAt} />

            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? 'text-pink-300' : 'text-blue-400'}`} >
                {message.get('username')}
            </p>


        </div>
    )
}

export default Message
