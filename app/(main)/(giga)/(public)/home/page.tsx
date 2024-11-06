import { getPostData } from '@/actions/posts/Post';
import CardList from '@/components/common/CardList';
import FilterBar from '@/components/common/FilterBar';
import { useMemo } from 'react';

const Home = () => {
    const postData = useMemo(() => {
        return getPostData(6);
    }, []);

    return (
        <div>
            <FilterBar />
            <div className='mt-3'>
                <h2>Alabama football posts</h2>
                <CardList data={postData} />
            </div>
            <div className='mt-3'>
                <h2>Sports posts</h2>
                <CardList data={postData} />
            </div>
            <div className='mt-3'>
                <h2>Recently viewed</h2>
                <CardList data={postData} />
            </div>
        </div>
    );
};

export default Home;

// import { getPostData } from '@/actions/posts/Post';
// import CardList from '@/components/common/CardList';
// import FilterBar from '@/components/common/FilterBar';
// import { useMemo } from 'react';

// const Home = () => {

//     return (
//         <div>
//            new
//         </div>
//     );
// };

// export default Home;
