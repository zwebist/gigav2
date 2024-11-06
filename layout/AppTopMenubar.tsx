import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { TabMenu } from 'primereact/tabmenu';
import { usePathname, useRouter } from 'next/navigation';

const AppTopMenubar = forwardRef((props) => {
    const [activeLeftIndex, setLeftActiveIndex] = useState(-1);
    const [activeRightIndex, setRightActiveIndex] = useState(-1);
    const router = useRouter();
    const pathname = usePathname();

    const checkLeftActiveIndex = useCallback(() => {
        const currentPath = pathname.split('/')[0];

        switch (currentPath) {
            case 'news':
                setLeftActiveIndex(1);
                break;
            case 'sport':
                setLeftActiveIndex(2);
                break;
            case 'money':
                setLeftActiveIndex(3);
                break;
            case 'art':
                setLeftActiveIndex(4);
                break;
            default:
                break;
        }
    }, [pathname]);

    const leftMenuItem = [
        { label: 'Home', command: () => router.push('/home') },
        { label: 'News', command: () => router.push('/news') },
        { label: 'Sport', command: () => router.push('/sport') },
        { label: 'Money', command: () => router.push('/money') },
        { label: 'Art', command: () => router.push('/art') }
    ];

    useEffect(() => {
        checkLeftActiveIndex();
    }, [checkLeftActiveIndex]);

    const checkRightActiveIndex = useCallback(() => {
        const currentPath = pathname.split('/')[0];

        switch (currentPath) {
            case 'videos':
                setLeftActiveIndex(0);
                break;
            case 'podcasts':
                setLeftActiveIndex(1);
                break;
            case 'assessments':
                setLeftActiveIndex(2);
                break;
            case 'photos':
                setLeftActiveIndex(3);
                break;
            case 'messages':
                setLeftActiveIndex(4);
                break;
            default:
                break;
        }
    }, [pathname]);

    useEffect(() => {
        checkRightActiveIndex();
    }, [checkRightActiveIndex]);

    const rightMenuItem = [
        { label: 'My Videos', command: () => router.push('/videos') },
        { label: 'My Podcasts', command: () => router.push('/podcasts') },
        { label: 'My Assessments', command: () => router.push('/assessments') },
        { label: 'My Photos', command: () => router.push('/photos') },
        { label: 'My Messages', command: () => router.push('/messages'), icon: 'pi pi-envelope' },
        { label: 'Notifications', icon: 'pi pi-bell' }
    ];
    return (
        <div className="layout-topmenubar">
            <TabMenu model={leftMenuItem} activeIndex={activeLeftIndex} onTabChange={(e) => setLeftActiveIndex(e.index)} className="layout-topmenubar-component" />
            <TabMenu model={rightMenuItem} activeIndex={activeRightIndex} onTabChange={(e) => setRightActiveIndex(e.index)} className="layout-topmenubar-component" />
        </div>
    );
});

AppTopMenubar.displayName = 'AppTopMenubar';

export default AppTopMenubar;
