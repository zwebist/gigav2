import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './context/layoutcontext';
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

const AppHeader = forwardRef((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const menu = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        menu.current?.toggle(event);
    };

    const overlayMenuItems = [
        {
            label: 'Settings',
            icon: 'pi pi-cog'
        },
        {
            separator: true
        },
        {
            label: 'Home',
            icon: 'pi pi-home'
        }
    ];

    return (
        <div className="layout-topbar">
            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button ml-0 mr-3" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>

            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>
            <Link href="/" className="layout-topbar-logo">
                <Image src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'blue'}.png`} width={300} height={300} alt="Giga Intelligence Logo" className="w-8rem h-4rem" style={{ objectFit: 'contain' }} />
            </Link>

            <div className="layout-topbar-search flex-order-2 lg:flex-order-0">
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-search" />
                    <InputText type="text" placeholder="Search Giga" className="w-full" />
                </span>
            </div>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                {false ? (
                    <>
                        {/* <Menu ref={menu} model={overlayMenuItems} popup /> */}
                        <Button
                            type="button"
                            className="p-link layout-topbar-button"
                            // onClick={toggleMenu}
                        >
                            <i className="pi pi-user"></i>
                            <span>Profile</span>
                        </Button>
                    </>
                ) : (
                    <div className="layout-topbar-profile">
                        <Menu ref={menu} model={overlayMenuItems} popup />
                        <Button type="button" className="p-link layout-topbar-button" onClick={toggleMenu}>
                            <Image src={'/avatar.jfif'} alt="Avatar" width={120} height={120} className="" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
});

AppHeader.displayName = 'AppHeader';

export default AppHeader;
