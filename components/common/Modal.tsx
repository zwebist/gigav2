import React, { Children, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

interface ModalProps {
    header: any;
    visible: boolean;
    setVisible: any;
    children?: React.ReactNode;
    footer?: any;
}

const Modal = ({ visible, setVisible, header, footer, children }: ModalProps) => {
    return (
        <Dialog
            header={header}
            visible={visible}
            className="lg:w-7"
            breakpoints={{ '992px': '75vw', '641px': '100vw' }}
            onHide={() => {
                if (!visible) return;
                setVisible(false);
            }}
            style={{backgroundColor: "#FAFAFA"}}
            footer={footer}
        >
            {children}
        </Dialog>
    );
};

export default Modal;
