/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [
                { label: 'Home', icon: 'pi pi-fw pi-id-card', to: '/home' },
                { label: 'News', icon: 'pi pi-fw pi-check-square', to: '/news' },
                { label: 'Sport', icon: 'pi pi-fw pi-bookmark', to: '/sport' },
                { label: 'Money', icon: 'pi pi-fw pi-exclamation-circle', to: '/money' },
                { label: 'Art', icon: 'pi pi-fw pi-mobile', to: '/art', class: 'rotated-icon' },
                { label: 'My Videos', icon: 'pi pi-fw pi-image', to: '/videos' },
                { label: 'My Assessments', icon: 'pi pi-fw pi-bars', to: '/assessments'},
                { label: 'My Messages', icon: 'pi pi-fw pi-comment', to: '/messages' },
                { label: 'My Photos', icon: 'pi pi-fw pi-file', to: '/photos' },
                { label: 'Notifications', icon: 'pi pi-fw pi-chart-bar', to: '/notifications' },
                { label: 'My Podcasts', icon: 'pi pi-fw pi-circle', to: '/podcasts' }
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
