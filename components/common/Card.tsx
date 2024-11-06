import React from 'react';

interface CardProps {
    icon?: React.ReactNode;
    heading: string;
    description: string;
    className?: string;
    style?: object;
}

const Card = ({ icon, heading, description, className, style }: CardProps) => {
    return (
        <div className={`card shadow-1 flex justify-content-start gap-3 align-items-start flex-column border-none ${className}`} style={{ backgroundColor: '#ffffff', ...style }}>
            {icon}
            <div className="" style={{ color: '#257ABC' }}>
                {heading}
            </div>
            <div>{description}</div>
        </div>
    );
};

export default Card;
