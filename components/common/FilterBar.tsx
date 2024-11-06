import { Button } from 'primereact/button';
import '@/styles/components/common/_filterbar.scss'
import React from 'react';

function FilterBar() {
    return (
        <div className="card filterbar-container my-2 p-0 border-none">
        <span className="p-buttonset flex button-group">
            <Button size='small' text label="Filter by" icon="pi pi-align-center" />
            <Button size='small' label="New" text/>
            <Button size='small' label="Nearby" text/>
            <Button size='small' label="Posts" text/>
            <Button size='small' label="Assessments" text/>
            <Button size='small' label="Podcasts" text/>
            <Button size='small' label="Photos" text/>
            <Button size='small' label="Videos" text/>
            <Button size='small' label="Shorts" text/>
            <Button size='small' label="Music" text/>
        </span>
    </div>

    );
}

export default FilterBar;
