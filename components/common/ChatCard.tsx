// import React from 'react';

// interface ChatCardProps {
//     icon?: React.ReactNode;
//     name?: string;
//     chat: {
//         type: string;
//         message: string;
//     };
//     className?: string;
//     style?: object;
// }

// function ChatCard({ icon, name, chat, className, style }: ChatCardProps) {
//     return (
//         <div className={`flex w-full  ${chat.type === 'sender' ? 'justify-content-end' : 'justify-content-start'}`}>
//             <div
//                 className={`card shadow-1 flex justify-content-start gap-3 p-3 align-items-start flex-column border-none w-30rem ${className}`}
//                 style={{
//                     backgroundColor: chat.type === 'sender' ? 'rgba(23, 81, 125, 1)' : '#ffffff',
//                     color: chat.type === 'sender' ? '#ffffff' : '#0F0F0F',
//                     ...style
//                 }}
//             >
//                 <div>{chat.message}</div>
//             </div>
//         </div>
//     );
// }

// export default ChatCard;

import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';

interface ChatCardProps {
    icon?: React.ReactNode;
    name?: string;
    chat: {
        type: string;
        message: string;
    };
    className?: string;
    style?: React.CSSProperties; // Use React.CSSProperties for better type checking
}

function ChatCard({ icon, name, chat, className, style }: ChatCardProps) {
    const toast = useRef(null);
    const handleCopy = () => {
        navigator.clipboard
            .writeText(chat.message)
            .then(() => {
                // @ts-ignore 
                toast?.current?.show({ severity: 'success', summary: 'Success', detail: 'Message copied to clipboard!' }); // Optional: Show a success message
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div className={`flex w-full ${chat.type === 'sender' ? 'justify-content-end' : 'justify-content-start'}`}>
            <Toast ref={toast}></Toast>
            <div
                className={`card shadow-1 flex justify-content-start gap-3 p-3 align-items-start flex-column border-none w-30rem relative ${className}`}
                style={{
                    backgroundColor: chat.type === 'sender' ? 'rgba(23, 81, 125, 1)' : '#ffffff',
                    color: chat.type === 'sender' ? '#ffffff' : '#0F0F0F',
                    ...style
                }}
            >
                <div>{chat.message}</div>
                {chat.type !== 'sender' && (
                    <Button
                        className="card absolute right-0 -mr-7 -mt-2 p-3 flex flex-column border-none shadow-1"
                        onClick={handleCopy}
                        icon={'pi pi-copy'}
                        style={{
                            backgroundColor: '#ffffff',
                            color: '#0F0F0F'
                        }}
                    >
                        Copy
                    </Button>
                )}
            </div>
        </div>
    );
}

export default ChatCard;
