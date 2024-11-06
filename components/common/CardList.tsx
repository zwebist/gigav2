import Image from 'next/image';
import React, { useMemo } from 'react';

interface CardListProps {
    data: CardListDataProps[];
}

const CardList = ({ data }: CardListProps) => {
    const listCard = useMemo(() => {
        return data;
    }, [data]);

    return (
        <div className="flex flex-wrap justify-content-start w-full" style={{ boxSizing: 'border-box' }}>
            {listCard?.length > 0 &&
                listCard.map((c) => (
                    <div key={c.id} className="col-12 sm:col-6 lg:col-3 xl:col-2 p-2" style={{ boxSizing: 'border-box' }}>
                        <div className="card border-0 surface-border p-0 h-full" style={{ boxSizing: 'border-box' }}>
                            <Image src={`${c.imageUrl}`} alt={c.title} width={200} height={200} className="w-full border-round-top-xl object-cover" />
                            <div className="flex flex-column gap-2 text-left p-3">
                                <div className="flex justify-content-start align-items-center gap-2">
                                    <Image src={`${c.authorImageUrl}`} alt={c.authorName} width={200} height={200} className="object-cover" style={{ width: '24px', height: '24px', borderRadius: '100%' }} />
                                    <div style={{ fontSize: '.8rem' }}>{c.authorName}</div>
                                </div>
                                <div className="mb-2 font-bold">{c.title}</div>
                                <div className="">{c.shortDescription}</div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CardList;
