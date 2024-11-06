'use client';
import { getAssessmentById } from '@/actions/Assessments/Assessment';
import List from '@/components/common/List';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import React, { useMemo } from 'react';

function IndividualAssessment() {
    const params = useParams();
    const router = useRouter();
    const listItem = useMemo(() => {
        return getAssessmentById({ id: params.assessmentId || '' });
    }, [params.assessmentId]);

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
            <div className="col-8 border-round-xl flex gap-3 flex-column">
                <div className="card border-none p-0">
                    <Button
                        label="Back to listing of assessors"
                        text
                        icon="pi pi-arrow-left"
                        onClick={(e) => {
                            router.push('/assessments');
                        }}
                        className="ml-5 mt-5 p-0"
                    />
                    <div className="ml-5 mt-5 border-round-xl flex justify-content-start align-items-center gap-2" style={{ backgroundColor: '#FFFFFF' }}>
                        <Image src={`${listItem[0].authorImageUrl}`} alt="Grant Williams" width={400} height={400} className="w-4rem h-4rem" style={{ objectFit: 'cover', borderRadius: '50%' }} />
                        <p className="font-bold text-xl">{listItem[0].authorName}</p>
                    </div>
                    <List allowHeader={false} listItem={listItem} className={''} childOnly parentOnly={false} />
                </div>
            </div>
        </div>
    );
}

export default IndividualAssessment;
