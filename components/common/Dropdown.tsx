import React, { useMemo, useState } from 'react';
import { Dropdown as PDropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface ItemProps {
    name: string;
    value: string;
}

interface DropdownProps {
    items: Array<ItemProps>;
    dropdownPlaceholder: string;
    setSelectedItem: any;
    selectedItem: any;
    style?: object;
    className?: string;
    onChange: any;
}

const Dropdown = ({ items, dropdownPlaceholder, setSelectedItem, selectedItem, className, style, onChange }: DropdownProps) => {
    const options = useMemo(() => items, [items]);

    return (
        <PDropdown
            value={selectedItem}
            onChange={(e: DropdownChangeEvent) => {
                setSelectedItem(e.value);
                onChange(e);
            }}
            options={options}
            optionLabel="name"
            name="rating"
            placeholder={dropdownPlaceholder}
            className={`w-full md:w-14rem border-none p-0 focus:outline-none ${className}`}
            style={{ ...style }}
        />
    );
};

export default Dropdown;
