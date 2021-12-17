import { useMoralis } from 'react-moralis';
import Image from 'next/image'


const Avatar = ({username, logoutOnPress}) => {
    const { user, logout } = useMoralis();

    return (
        <div className="" >
            <Image 
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get('username')}.svg`}
            layout="fill"
            onClick={() => logoutOnPress && logout()}
            // objectFit="cover"
            className="rounded-full bg-black cursor-pointer hover:opacity-75 "
            />
        </div>
    )
}

export default Avatar
