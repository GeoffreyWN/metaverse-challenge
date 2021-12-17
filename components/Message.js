import { useMoralis } from "react-moralis";
import TimeAgo from 'timeago-react';
import { CheckIcon } from '@heroicons/react/solid'
import Avatar from "./Avatar";


const Message = ({ message }) => {
    const { user } = useMoralis();
    const isUserMessage = message.get('ethAdress') === user.get('ethAdress')


    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`} >

            <div className={`relative h-8 w-8 rounded-full shadow-sm shadow-lime-300 border border-lime-300  ${isUserMessage && 'order-last ml-2'}`} >
                <Avatar />
            </div>

            <div className={`flex space-x-4 py-3 px-6 rounded-lg ${isUserMessage ?
                'rounded-br-none bg-pink-200'
                :
                'rounded-bl-none bg-blue-400'}`} >
                <p className=" flex items-center text-gray-700 font-medium" >{message.get('message')} <CheckIcon className="h-4 ml-2 text-blue-300 font-bold " />  </p>
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
