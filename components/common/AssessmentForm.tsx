'use client';
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import NarativeField from './NarativeField';

interface AssessmentFormProps {
    title: string;
    setActiveIndex: any;
    maxItemLength: number;
    onChange: any;
}

const AssessmentForm = ({ title, setActiveIndex, maxItemLength, onChange }: AssessmentFormProps) => {
    const [selectedItem, setSelectedItem] = useState();
    return (
        <div className="col-12 p-0">
            <div className="card border-0">
                <h5>Explain the {title}</h5>
                <form>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 p-3 border-round-xl font-bold flex justify-content-between" style={{ backgroundColor: '#FAFAFA' }}>
                            <label htmlFor="title">
                                <span className="mb-2 block">Topic rating</span>
                                <p className="font-normal">Click to rate this topic</p>
                            </label>
                            <Dropdown onChange={onChange} items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} dropdownPlaceholder="Select Rating" className="border-1" style={{ border: '1px solid #30A8FF' }} />
                        </div>

                        <NarativeField title={`Add narrative for ${title}`} onChange={onChange} />

                        <div className="flex justify-content-start align-items-center gap-2 flex-wrap">
                            <Button
                                label="Next"
                                size="small"
                                style={{ width: 'fit-content' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveIndex((prev: number) => (prev < maxItemLength - 1 ? prev + 1 : 0));
                                }}
                            />
                            <Button
                                label="Done"
                                size="small"
                                style={{ width: 'fit-content' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            />
                            <Button
                                label="Cancel"
                                size="small"
                                outlined
                                style={{ width: 'fit-content' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssessmentForm;

const items = [
    { name: 'Great', value: 'Great' },
    { name: 'Good', value: 'Good' },
    { name: 'Poor', value: 'Poor' },
    { name: 'Bad', value: 'Bad' }
];
