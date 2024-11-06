/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '@/types';
import { LayoutContext } from './context/layoutcontext';
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    return (
        <div className="layout-topbar">
            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button ml-0 mr-3" 
            onClick={onMenuToggle}
            >
                <i className="pi pi-bars" />
            </button>

            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>
            <Link href="/" className="layout-topbar-logo">
                <Image src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'blue'}.png`} width={300} height={300} alt="Giga Intelligence Logo" className="w-8rem h-4rem" style={{ objectFit: 'contain' }} />
            </Link>

            <div className="layout-topbar-search">
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-search" />
                    <InputText type="text" placeholder="Search Giga" className="w-full" />
                </span>
            </div>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                {false ? (
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                ) : (
                    <div className="layout-topbar-profile">
                        <Image src={'/avatar.jfif'} alt="Avatar" width={120} height={120} className="" />
                    </div>
                )}
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
