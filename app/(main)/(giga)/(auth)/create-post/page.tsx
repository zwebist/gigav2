'use client';
import { getPostData } from '@/actions/posts/Post';
import Form from '@/components/common/Form';
import SingleCard from '@/components/common/SingleCard';
import React, { useMemo, useState } from 'react';

function CreatePost() {
    const [formData, setFormData] = useState({});
    const postData = useMemo(() => {
        return getPostData(1);
    }, []);

    const onChange = (e: any) => {
        if (e.files) {
            const file = e.files[0];
            setFormData({
                ...formData,
                file: file
            });
        } else {
            e.preventDefault();
            const name = e.target.name;
            const value = e.target.value;
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    return (
        <div className="flex gap-2 flex-column lg:flex-row w-full">
            <div className="col-12 lg:col-4 border-round-xl p-5" style={{ backgroundColor: '#ffffff', justifyItems: 'center', maxHeight: 'fit-content' }}>
                <div>
                    <h2>Preview your post</h2>
                    <SingleCard data={postData[0]} formData={formData} />
                </div>
            </div>
            <div className="flex col-12 lg:col-8 p-0">
                <Form onChange={onChange} />
            </div>
        </div>
    );
}

export default CreatePost;
