'use client';
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadSelectEvent, FileUploadUploadEvent, ItemTemplateOptions } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import '@/styles/components/common/fileuploader.scss';

interface FileUploadProps {
    onChange: any;
}

const FileUploader = ({ onChange }: FileUploadProps) => {
    const toast = useRef<Toast>(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef<FileUpload>(null);
    const [chooseButtonRef, setChooseButtonRef] = useState<any>(null);

    const onTemplateSelect = (e: FileUploadSelectEvent) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const invalidFiles = e.files.filter((file) => !allowedTypes.includes(file.type));

        if (invalidFiles.length) {
            toast.current?.show({ severity: 'warn', summary: 'Invalid File Type', detail: 'Only JPEG, PNG, and GIF are supported' });
            return;
        }

        onChange(e);

        let _totalSize = totalSize;
        let files = e.files;

        for (let i = 0; i < files.length; i++) {
            _totalSize += files[i].size || 0;
        }

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e: FileUploadUploadEvent) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const invalidFiles = e.files.filter((file) => !allowedTypes.includes(file.type));

        if (invalidFiles.length) {
            toast.current?.show({ severity: 'warn', summary: 'Invalid File Type', detail: 'Only JPEG, PNG, and GIF are supported' });
            return;
        }

        onChange(e);
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file: File, callback: Function) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { chooseButton } = options;

        if (!chooseButtonRef) {
            setChooseButtonRef(chooseButton);
        }

        return <div style={{ display: 'none' }}>{chooseButton}</div>;
    };

    const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
        const file = inFile as File;
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    {/* @ts-ignore */}
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto w-3rem h-3rem" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-cloud-upload mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'transparent', color: '#257ABC' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5 font-semibold">
                    Drag & drop files or{' '}
                    <span className="underline cursor-pointer" style={{ color: '#257ABC' }}>
                        {chooseButtonRef}
                    </span>
                </span>
                <p className="font-light" style={{ color: '#676767' }}>
                    Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                </p>
            </div>
        );
    };

    const chooseOptions = { label: 'Browse', icon: 'pi pi-none', className: 'custom-choose-btn outlined-none border-none p-0 text-lg underline', style: { color: '#257ABC', backgroundColor: 'transparent' } };

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <FileUpload
                ref={fileUploadRef}
                name="file[]"
                url="/api/upload"
                multiple
                accept="image/*"
                maxFileSize={1000000}
                onUpload={onTemplateUpload}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
            />
        </div>
    );
};

export default FileUploader;
