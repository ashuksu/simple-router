import {useState} from 'react';
import {clsx} from "clsx";
import {ChatRoom} from "./ChatRoom.tsx";

export function AppChat() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    const [isDark, setIsDark] = useState(false);

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
                <label className='flex items-center gap-2'>
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={e => setIsDark(e.target.checked)}
                    />
                    Use dark theme
                </label>
                <button
                    className={classNameButtonRoom}
                    onClick={() => setShow(!show)}>
                    {show ? 'Close chat' : 'Open chat'}
                </button>

            </div>
            {show && <hr/>}
            {show && <ChatRoom
                roomId={roomId}
                isDark={isDark}
                theme={isDark ? 'dark' : 'light'}
            />}
        </div>
    );
}
