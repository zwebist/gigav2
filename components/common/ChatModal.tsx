import React from 'react';
import ChatCard from './ChatCard';

const data = [
    {
        type: 'sender',
        message: 'Can you write me a paragraph about the history of Alabama Crimson Tide football, and how they will do in the 2023 season.'
    },
    {
        type: 'receiver',
        message:
            'The history of Alabama Crimson Tide football is storied and illustrious, dating back to the program\'s inception in 1892. Under the guidance of legendary head coach Paul "Bear" Bryant, the team achieved unprecedented success, winning multiple national championships and establishing itself as a college football powerhouse. This success has continued into the modern era, with Nick Saban taking the reins and leading the Crimson Tide to further national championships. As for the 2023 season, expectations are as high as ever. With a strong recruiting class and a history of excellence, Alabama is poised to contend for another national title. Their roster is stacked with talent, including standout players on both offense and defense, making them a formidable force in the college football landscape. Alabama fans have reason to believe that the Crimson Tide will once again be a dominant force in the 2023 season.'
    },
    {
        type: 'receiver',
        message:
            'The history of Alabama Crimson Tide football is storied and illustrious, dating back to the program\'s inception in 1892. Under the guidance of legendary head coach Paul "Bear" Bryant, the team achieved unprecedented success, winning multiple national championships and establishing itself as a college football powerhouse. This success has continued into the modern era, with Nick Saban taking the reins and leading the Crimson Tide to further national championships. As for the 2023 season, expectations are as high as ever. With a strong recruiting class and a history of excellence, Alabama is poised to contend for another national title. Their roster is stacked with talent, including standout players on both offense and defense, making them a formidable force in the college football landscape. Alabama fans have reason to believe that the Crimson Tide will once again be a dominant force in the 2023 season.'
    }
];

const ChatModal = () => {
    return <div className="mb-3 overflow-auto flex flex-column gap-3">{data && data.map((c, i) => <ChatCard key={i} chat={c} />)}</div>;
};

export default ChatModal;
