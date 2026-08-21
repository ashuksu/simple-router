import {useEffect, useEffectEvent, useState} from "react";
import {showNotification} from "./notifications.ts";
import {createConnection, sendMessage} from "./chat.ts";

const serverUrl = 'https://localhost:5173';

type Props = {
    roomId: string
    theme: 'light' | 'dark'
    isDark: boolean
}

export function ChatRoom({roomId, theme}: Props) {
    const [message, setMessage] = useState('');

    const onConnected = useEffectEvent(() => {
        showNotification('Connected!', theme);
    });

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on('connected', () => {
            onConnected();
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    function handleSendClick() {
        sendMessage(message);
    }

    return (
        <>
            <h3>Welcome to the {roomId} room!</h3>
            <input
                className='flex items-center p-2 border rounded-md'
                value={message} onChange={e => setMessage(e.target.value)}/>
            <button
                className='flex items-center justify-center p-2 border rounded-md cursor-pointer text-center text-bold text-orange-300 hover:text-orange-400 transition-colors'
                onClick={handleSendClick}>Send
            </button>
        </>
    );
}