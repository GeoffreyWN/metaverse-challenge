import { useState } from "react";
import { useMoralis } from "react-moralis";
import { PaperAirplaneIcon, EmojiHappyIcon } from '@heroicons/react/outline'


const SendMessage = ({ endOfMessagesRef }) => {
    const [message, setMessage] = useState('')
    const { user, Moralis } = useMoralis();

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return

        const Messages = Moralis.Object.extend('Messages')
        const messages = new Messages()

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress'),

        }).then((message) => {
            // notify message was sent
        }, error => {
            //catch error
            console.log(error.message)
        })

        endOfMessagesRef.current.scrollIntoView({
            behavior: 'smooth'
        })

        setMessage('')


    }

    return (
        <form className="flex fixed bottom-10 bg-stone-800 opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-lg rounded-full border-4 border-lime-400 shadow-pink-300 " >

            <EmojiHappyIcon className=" mt-1 h-6 text-red-400 mr-2 hover:animate-pulse cursor-pointer " />

            <input type="text" value={message} onChange={e => setMessage(e.target.value)} className=" flex-grow outline-none bg-transparent text-white text-lg font-semi-bold placeholder-gray-500 pr-5 "
                placeholder={`What's poppin', ${user.getUsername()} ?`}
            />

            <button type="submit" onClick={sendMessage} className=" flex items-center font-bold text-pink-500"> <PaperAirplaneIcon className=" rotate-45 h-6 text-red-400 cursor-pointer hover:animate-pulse" /> </button>
        </form>
    )
}

export default SendMessage
