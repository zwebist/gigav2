'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import React, { useState } from 'react';

interface StepperProps {
    activeIndex: number;
    setActiveIndex: any;
    items: {}[];
}

function Stepper({ activeIndex, setActiveIndex, items }: StepperProps) {
    const router = useRouter();

    return (
        <div className="col-12 p-0 border-none">
            <div className="card overflow-hidden">
                <Button
                    label="Back to listing of assessors"
                    text
                    icon="pi pi-arrow-left"
                    onClick={(e) => {
                        router.push('/assessments');
                    }}
                    className="mb-3"
                />
                <div className="stepper flex justify-content-between align-content-center flex-row w-full">
                    {items?.map((item, i) => (
                        <div key={i} style={{ minWidth: i === items.length - 1 ? 'fit-content' : activeIndex === i ? '240px' : '100px' }}>
                            <div className="relative">
                                <div
                                    className={`flex relative z-2 justify-content-center align-items-center border-round-3xl ${activeIndex === i ? 'gbg-color2' : 'gbg-color6'}`}
                                    style={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                >
                                    <div
                                        className="gbg-color5 border-round-3xl"
                                        style={{
                                            width: '7px',
                                            height: '7px'
                                        }}
                                    ></div>
                                </div>
                                {i !== items.length - 1 && <div className="gbg-color6 absolute top-50" style={{ width: activeIndex === i ? '240px' : '100px', height: '2px' }}></div>}
                            </div>
                            <div className="cursor-pointer" onClick={() => setActiveIndex(i)}>
                                {/* @ts-ignore  */}
                                <div className={`font-semibold ${activeIndex === i ? 'gcolor2' : ''}`}>{item.label}</div>
                                {/* @ts-ignore  */}
                                <p className={`${activeIndex === i ? '' : 'max-w-7rem'}`}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stepper;
