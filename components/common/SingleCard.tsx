import Image from 'next/image';
import React, { useMemo } from 'react';

interface SingleCardProps {
    data: CardListDataProps;
    formData: any;
}

function SingleCard({ data, formData }: SingleCardProps) {
    const cardData = useMemo(() => {
        return { imageUrl: data.imageUrl, authorImageUrl: data.authorImageUrl, authorName: data.authorName, ...formData };
    }, [data, formData]);

    return (
        <div key={cardData.id} className="max-w-14rem sm:max-w-20rem lg:max-w-22rem xl:max-w-27rem  w-full overflow-hidden" style={{ boxSizing: 'border-box' }}>
            <div className="card border-0 surface-border p-0 h-full shadow-1" style={{ boxSizing: 'border-box' }}>
                <Image src={`${cardData.imageUrl || '/'}`} alt={cardData.title} width={200} height={200} className="w-full border-round-top-xl object-cover" />
                <div className="flex flex-column gap-2 text-left p-3">
                    <div className="flex justify-content-start align-items-center gap-2">
                        <Image src={`${cardData.authorImageUrl || '/'}`} alt={cardData.authorName} width={200} height={200} className="object-cover" style={{ width: '24px', height: '24px', borderRadius: '100%' }} />
                        <div style={{ fontSize: '.8rem' }}>{cardData.authorName}</div>
                    </div>
                    <div className="mb-2 font-bold">{cardData.title || cardData.rating}</div>
                    <div className="w-full" style={{ textWrap: 'wrap' }}>
                        {cardData.description}
                    </div>
                    <div className="w-full" style={{ textWrap: 'wrap' }}>
                        {cardData.narrative}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCard;
