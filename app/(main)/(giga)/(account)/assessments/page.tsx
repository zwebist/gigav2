'use client';
import Comment from '@/components/common/Comment';
import List from '@/components/common/List';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { useMemo } from 'react';
import { getAssessmentData } from '@/actions/Assessments/Assessment';

const Assessments = () => {
    const listItem = useMemo(() => {
        return getAssessmentData();
    }, []);

    return (
        <div className="flex">
            <div className="col-4 flex flex-column gap-3">
                <div className=" p-6 border-round-xl" style={{ backgroundColor: '#FFFFFF' }}>
                    <h2>Grant Williams</h2>
                    <Image src={'/post1.jfif'} alt="Grant Williams" width={400} height={400} className="w-full max-h-20rem border-round-xl" style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-6 border-round-xl" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="font-bold mb-2">Add to the conversation</div>
                    <Link href={'/create-assessments'}>
                        <Button label="Perform summary assessment" />
                    </Link>
                    <div className="mt-3">
                        <p className="font-bold">Create sub-assessments</p>
                        <div className="flex flex-wrap gap-2">
                            <Button size="small" outlined label="Turnovers" className="border-round-3xl" />
                            <Button size="small" outlined label="Steals" className="border-round-3xl" />
                            <Button size="small" outlined label="Midrange shooting" className="border-round-3xl" />
                            <Button size="small" outlined label="Rebounding" className="border-round-3xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-8 p-0 flex gap-3 flex-column">
                <div className="p-2">
                    <List title={'View recent assessments'} listItem={listItem} />
                    <Comment />
                </div>
            </div>
        </div>
    );
};

export default Assessments;
