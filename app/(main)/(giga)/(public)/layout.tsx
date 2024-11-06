import QuickLinks from '@/components/common/QuickLinks';
import React from 'react';

interface AppLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: AppLayoutProps) {
    return (
        <>
            <QuickLinks />
            {children}
        </>
    );
}

export default MainLayout;
