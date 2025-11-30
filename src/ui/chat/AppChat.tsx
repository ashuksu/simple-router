import {useEffect, useState} from 'react';
import {createConnection, sendMessage} from './chat.ts';
import {clsx} from "clsx";

const serverUrl = 'https://localhost:1234';

function ChatRoom({roomId}: { roomId: string }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
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
                onClick={handleSendClick}>Send</button>
        </>
    );
}

export function AppChat() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);

    const classNameButtonRoom = clsx(
        'flex items-center p-2 border rounded-md cursor-pointer text-center',
        {
            'text-red-300 hover:text-red-400 transition-colors': show,
            'text-green-300 hover:text-green-400 transition-colors': !show,
        }
    );

    return (
        <div className='max-w-xl flex flex-col gap-5'>
            <h3>Chat Room</h3>
            <div className='flex items-center gap-5'>
                <label className='flex items-center gap-2'>
                    Choose the chat room:{' '}
                    <select
                        className='flex items-center p-2 border rounded-md cursor-pointer'
                        value={roomId}
                        onChange={e => setRoomId(e.target.value)}
                    >
                        <option value="general">general</option>
                        <option value="travel">travel</option>
                        <option value="music">music</option>
                    </select>
                </label>
                <button
                    className={classNameButtonRoom}
                    onClick={() => setShow(!show)}>
                    {show ? 'Close chat' : 'Open chat'}
                </button>

            </div>
            {show && <hr/>}
            {show && <ChatRoom roomId={roomId}/>}
        </div>
    );
}
