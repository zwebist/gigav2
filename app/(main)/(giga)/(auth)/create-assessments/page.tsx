'use client';
import { getPostData } from '@/actions/posts/Post';
import AssessmentForm from '@/components/common/AssessmentForm';
import SingleCard from '@/components/common/SingleCard';
import Stepper from '@/components/common/Stepper';
import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

function CreateAssessments() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [formData, setFormData] = useState({});
    const router = useRouter();
    const pathname = usePathname();

    const postData = useMemo(() => {
        return getPostData(1);
    }, []);

    const onChange = (e: any) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const items = [
        { label: 'Context', desc: 'Explain the context of the topic', command: () => router.push('') },
        { label: 'Perspective', desc: '', command: () => router.push('') },
        { label: 'Importance', desc: '', command: () => router.push('') },
        { label: 'Wisdom', desc: '', command: () => router.push('') },
        { label: 'Insights', desc: '', command: () => router.push('') },
        { label: 'Knowledge', desc: '', command: () => router.push('') },
        { label: 'News', desc: '', command: () => router.push('') },
        { label: 'Current', desc: '', command: () => router.push('') },
        { label: 'Future', desc: '', command: () => router.push('') },
        { label: 'Risk', desc: '', command: () => router.push('') },
        { label: 'Opportunity', desc: '', command: () => router.push('') }
    ];
    return (
        <div>
            <Stepper items={items} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div className="flex gap-2 flex-column mt-3 lg:flex-row w-full">
                <div className="col-12 lg:col-4 border-round-xl p-5" style={{ backgroundColor: '#ffffff', justifyItems: 'center', maxHeight: 'fit-content' }}>
                    <div>
                        <h2>Preview your assessment</h2>
                        <SingleCard data={postData[0]} formData={formData} />
                    </div>
                </div>
                <div className="flex col-12 lg:col-8 p-0">
                    <AssessmentForm onChange={onChange} title={items[activeIndex].label} maxItemLength={items.length} setActiveIndex={setActiveIndex} />
                </div>
            </div>
        </div>
    );
}

export default CreateAssessments;
