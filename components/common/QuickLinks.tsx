import React from 'react';
import '@/styles/components/common/_quicklink.scss';
import { Button } from 'primereact/button';
import Image from 'next/image';
import Link from 'next/link';
const QuickLinks = () => {
    return (
        <div className="surface-0 quicklinks-container">
            <div className="quicklinks">
                <div className="quicklinks-avatar">
                    <Image src="/avatar.jfif" alt="avatar" width={200} height={200} className="" />
                </div>
                <div className="quicklinks-content">
                    <div>
                        <div className="font-medium text-3xl text-900">Hello, Anthony.</div>
                        <div className="flex align-items-center text-700 flex-wrap">What would you like to create today?</div>
                    </div>
                    <div className="flex gap-3 mt-3 justify-content-start align-items-center flex-wrap">
                        <Link href={'/create-post'}><Button label="Create post" severity='secondary' size="small" className="p-button-outlined" /></Link>
                        <Link href={'/create-message'}><Button label="Send message" severity='secondary' size="small" className="p-button-outlined" /></Link>
                        <Link href={'/create-photo'}><Button label="Add photos" severity='secondary' size="small" className="p-button-outlined" /></Link>
                        <Link href={'/create-assessments'}><Button label="Write assessment" severity='secondary' size="small" className="p-button-outlined" /></Link>
                        <Link href={'/create-document'}><Button label="Add dcoument" severity='secondary' size="small" className="p-button-outlined" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
