import postData from '@/data/posts.json';

const getPostData = (limit: number = 5) => {
    const data = postData.slice(0, limit);
    return data;
};

export { getPostData };
