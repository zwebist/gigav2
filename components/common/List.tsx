'use client';
import { DataView } from 'primereact/dataview';
import React, { useMemo, useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import Image from 'next/image';
import { format } from '@/utils/date';
import '@/styles/components/common/List.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ListProps {
    title?: string;
    allowHeader?: boolean;
    className?: string;
    childOnly?: boolean;
    parentOnly?: boolean;
    listItem: Assessment[] | AssessmentItem[];
}

function List({ title, className, allowHeader = true, listItem, parentOnly = true, childOnly = false }: ListProps) {
    const [dataViewValue, setDataViewValue] = useState<Assessment[] | AssessmentItem[]>([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filteredValue, setFilteredValue] = useState<any[] | null>(null);
    const [layout, setLayout] = useState<'grid' | 'list' | (string & Record<string, unknown>)>('list');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState<0 | 1 | -1 | null>(null);
    const [sortField, setSortField] = useState('');
    const router = useRouter();
    const sortOptions = [
        { label: 'Newest', value: 'Newest' },
        { label: 'Oldest', value: 'Oldest' },
        { label: 'Great', value: 'Great' },
        { label: 'Natural', value: 'Natural' },
        { label: 'Bad', value: 'Bad' }
    ];

    useMemo(() => {
        setDataViewValue(listItem);
        setGlobalFilterValue('');
    }, [listItem]);

    const onSortChange = (event: DropdownChangeEvent) => {
        const value = event.value;
        console.log(value);
        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const dataViewHeader = (
        <div className="flex border-none flex-column md:flex-row md:justify-content-between align-items-center gap-2">
            {title}
            <Dropdown value={sortKey} filter options={sortOptions} optionLabel="label" onChange={onSortChange} placeholder="Filter" filterIcon={'pi pi-align-center'} className="border-none" style={{ color: '#257ABC', backgroundColor: '#FAFAFA' }} />
        </div>
    );

    const dataviewListItem = (data: Assessment) => {
        return (
            <>
                {parentOnly && (
                    <div onClick={() => router.push(`/assessments/${data.id}`)}  className="cursor-pointer col-12 p-3 border-none my-2 border-round-xl gbg-hover-color5" style={{ backgroundColor: '#FAFAFA' }}>
                        <div className="flex flex-column md:flex-row align-items-start gap-3 p-3 w-full">
                            <Image src={`${data.authorImageUrl}`} alt={data.authorName} width={200} height={200} className="w-3rem h-3rem border-round-3xl shadow-2" />
                            <div className="flex-1 flex flex-column gap-2 align-items-left text-left">
                                <div className="flex justify-content-start align-content-center gap-2">
                                    <div className="font-bold text-lg">{data.authorName}</div>
                                    <div className="font-bold align-self-start text-3xl m-0" style={{ lineHeight: '4px' }}>
                                        .
                                    </div>
                                    <div style={{ color: '#4F4F4F' }}>{format(data.date)}</div>
                                    <div className="font-bold align-self-start text-3xl m-0" style={{ lineHeight: '4px' }}>
                                        .
                                    </div>
                                    <div style={{ color: '#4F4F4F' }}>{data.rating}</div>
                                </div>
                                <div className="mb-2">{data.shortDescription}</div>
                            </div>
                        </div>
                    </div>
                )}
                {childOnly &&
                    data.assessmentList?.map((assess) => (
                        <div key={assess.id} onClick={() => router.push(`/assessments/${data.id}/${assess.type}`)} className="cursor-pointer col-12 p-3 border-none my-2 border-round-xl gbg-hover-color5" style={{ backgroundColor: '#FAFAFA' }}>
                            <div className="flex flex-column md:flex-row align-items-start gap-3 p-3 w-full">
                                <div className="flex-1 flex flex-column gap-2 align-items-left text-left">
                                    <div className="flex justify-content-start align-content-center gap-2">
                                        <div className="font-bold text-lg capitalize">{assess.type}</div>
                                        <div className="font-bold align-self-start text-3xl m-0" style={{ lineHeight: '4px' }}>
                                            .
                                        </div>
                                        <div style={{ color: '#4F4F4F' }}>{format(assess.date)}</div>
                                        <div className="font-bold align-self-start text-3xl m-0" style={{ lineHeight: '4px' }}>
                                            .
                                        </div>
                                        <div style={{ color: '#4F4F4F' }}>{assess.rating}</div>
                                    </div>
                                    <div className="mb-2">{data.shortDescription}</div>
                                    <div className="flex flex-wrap justify-content-start align-items-center  w-full">
                                        {assess?.assessmentSubList?.map((asses) => (
                                            <div key={asses.id} className="col-12 md:col-6" style={{ boxSizing: 'border-box' }}>
                                                <div className="card flex border-1 surface-border p-0 h-full" style={{ boxSizing: 'border-box' }}>
                                                    <div className="col-3 flex justify-content-start align-items-center gap-2 p-0">
                                                        <Image src={`${asses.imageUrl}`} alt={assess.type} width={200} height={200} className="w-full h-6rem border-round-left-xl object-cover" />
                                                    </div>
                                                    <div className="col-9">{asses.shortDescription}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </>
        );
    };

    const itemTemplate = (data: any, layout: 'grid' | 'list' | (string & Record<string, unknown>)) => {
        if (!data) {
            return;
        }

        if (layout === 'list') {
            return dataviewListItem(data);
        }
    };

    return (
        <div className={`card border-none ${className}`}>
            <DataView value={filteredValue || dataViewValue} layout={layout} paginator rows={8} sortOrder={sortOrder} sortField={sortField} itemTemplate={itemTemplate} header={allowHeader && dataViewHeader}></DataView>
        </div>
    );
}

export default List;
