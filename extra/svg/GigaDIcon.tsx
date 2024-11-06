import React from 'react';
import Image from 'next/image';
import dbalance from './DBalance.png';
import dpencil from './DPencil.png';
import dchatgpt from './DChatGpt.png';
import dbard from './DBard.png';
import dmagicstick from './DMagicStick.png';
import dsearchengine from './DSearchengine.png';
import dgoogle from './DGoogle.png';
import dbing from './DBing.png';
import dyahoo from './DYahoo.png';

const icons: any = {
    chatgpt: dchatgpt,
    pencil: dpencil,
    magicstick: dmagicstick,
    bard: dbard,
    balance: dbalance,
    searchengine: dsearchengine,
    google: dgoogle,
    bing: dbing,
    yahoo: dyahoo
};

interface GigaDIconProps {
    className?: string;
    style?: React.CSSProperties;
    icon: string;
}

function GigaDIcon({ className = '', icon = '', style = {} }: GigaDIconProps) {
    const selectedIcon = icons[icon];
    if (!selectedIcon) {
        console.error(`Icon "${icon}" not found.`);
        return null;
    }

    return <Image src={selectedIcon} alt={`${icon} Icon`} width={45} height={45} className={className} style={style} />;
}

export default GigaDIcon;
