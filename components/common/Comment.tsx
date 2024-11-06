import React, { useMemo } from 'react';
import NarativeField from './NarativeField';
import { Button } from 'primereact/button';
import List from './List';
import { getAssessmentData } from '@/actions/Assessments/Assessment';

function Comment() {
    const listItem = useMemo(() => {
        return getAssessmentData(3);
    }, []);
    const onChange = ()=>{}
    return (
        <div className="p-5 border-round-xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2>Comments</h2>
            <div>
                <List allowHeader={false} listItem={listItem} className={'p-0'} />
            </div>
            <NarativeField title="Leave a comment" onChange={onChange} />
            <Button label="Save comment" />
        </div>
    );
}

export default Comment;
