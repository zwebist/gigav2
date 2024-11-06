import { GigaDIcon } from '@/extra/svg';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { InputText } from 'primereact/inputtext';
import Modal from './Modal';

interface SearchModalProps {
    modalHeaderTemplate: any;
    showSearchModal: any;
    setShowSearchModal: any;
    searchDropdownItem: any;
    selectedItem: any;
    setSelectedItem: any;
    modalFooterTemplate: any;
}

function SearchModal({ modalHeaderTemplate, showSearchModal, setShowSearchModal, searchDropdownItem, selectedItem, setSelectedItem, modalFooterTemplate }: SearchModalProps) {
    const [iframeUrl, setIframeUrl] = useState<string | null>(null);
    const [query, setQuery] = useState('');

    useEffect(() => {
        setIframeUrl('');
        setQuery('');
    }, [selectedItem]);

    const handleSearch = async () => {
        let searchUrl;
        switch (selectedItem) {
            case 'google':
                searchUrl = `https://programmablesearchengine.google.com/docs/element/results-only_url.html?q=${encodeURIComponent(query)}`;
                break;
            case 'bing':
                searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
                break;
            case 'yahoo':
                searchUrl = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
                break;
            default:
                searchUrl = '';
        }

        setIframeUrl(searchUrl);
    };

    return (
        <Modal
            visible={showSearchModal}
            setVisible={setShowSearchModal}
            header={() =>
                modalHeaderTemplate({
                    heading: 'Search',
                    dropdownItem: searchDropdownItem,
                    dropdownPlaceholder: 'All search engines',
                    selectedItem: selectedItem,
                    setSelectedItem: setSelectedItem
                })
            }
            key={'ai-modal'}
            footer={() => modalFooterTemplate({ query: query, setQuery: setQuery, handleSearch: handleSearch })}
        >
            {iframeUrl ? (
                <div className="iframe-container col-12">
                    <iframe
                        src={iframeUrl}
                        title="Search Result"
                        style={{
                            width: '100%',
                            height: '500px',
                            border: 'none'
                        }}
                    />
                </div>
            ) : selectedItem !== 'all' ? (
                <>
                    <div className="flex gap-3 mb-3">
                        <Card
                            icon={<GigaDIcon icon="google" className="w-3rem h-3rem" style={{ objectFit: 'contain' }} />}
                            heading={'Google'}
                            description={'Use Google’s search engine'}
                            className={`flex-1 w-full mb-0 ${selectedItem === 'google' ? 'selected-card' : ''}`}
                        />
                        <Card
                            icon={<GigaDIcon icon="bing" className="w-3rem h-3rem" style={{ objectFit: 'contain' }} />}
                            heading={'Bing'}
                            description={'Use Bing’s search engine'}
                            className={`flex-1 w-full mb-0 ${selectedItem === 'bing' ? 'selected-card' : ''}`}
                        />
                        <Card
                            icon={<GigaDIcon icon="yahoo" className="w-3rem h-3rem" style={{ objectFit: 'contain' }} />}
                            heading={'Yahoo'}
                            description={'Use Yahoo’s search engine'}
                            className={`flex-1 w-full mb-0 ${selectedItem === 'yahoo' ? 'selected-card' : ''}`}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex gap-3 justify-content-center align-items-center text-center mb-3 flex-column">
                        <GigaDIcon icon="searchengine" className="w-8rem h-3rem" style={{ objectFit: 'contain' }} />
                        <p>Our multi-search engine provides unbiased results by searching multiple search engines at once</p>
                    </div>
                    <div className="flex gap-3 mb-3">
                        <Card heading={'Discover new content'} description={'By searching multiple search engines at once, you can find content that is not available on a single search engine.'} className={'flex-1 w-full mb-0'} />
                        <Card heading={'Unbiased results'} description={'Our multi-search engine provides unbiased results by searching multiple search engines at once'} className={'flex-1 w-full mb-0'} />
                        <Card heading={'The best of all worlds'} description={'Our multisearch engine combines the best features of different search engines to give you the most comprehensive results.'} className={'flex-1 w-full mb-0'} />
                    </div>
                </>
            )}
        </Modal>
    );
}

export default SearchModal;

// import { GigaDIcon } from '@/extra/svg';
// import React, { useState } from 'react';
// import Card from './Card';
// import { InputText } from 'primereact/inputtext';
// import Modal from './Modal';

// interface SearchModalProps {
//     modalHeaderTemplate: any;
//     showSearchModal: any;
//     setShowSearchModal: any;
//     searchDropdownItem: any;
//     selectedItem: any;
//     setSelectedItem: any;
// }

// function SearchModal({
//     modalHeaderTemplate,
//     showSearchModal,
//     setShowSearchModal,
//     searchDropdownItem,
//     selectedItem,
//     setSelectedItem
// }: SearchModalProps) {
//     const [query, setQuery] = useState('');
//     const [iframeUrl, setIframeUrl] = useState<string | null>(null);

//     const handleSearch = async () => {
//         // You can call the relevant API (Google, Bing, or Yahoo) based on `selectedItem`
//         // For example:
//         let searchUrl;
//         switch (selectedItem) {
//             case 'google':
//                 searchUrl = `https://programmablesearchengine.google.com/docs/element/results-only_url.html?q=${encodeURIComponent(query)}`;
//                 break;
//             case 'bing':
//                 searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
//                 break;
//             case 'yahoo':
//                 searchUrl = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
//                 break;
//             default:
//                 searchUrl = '';
//         }

//         setIframeUrl(searchUrl);
//     };

//     return (
//         <Modal
//             visible={showSearchModal}
//             setVisible={setShowSearchModal}
//             heading={() =>
//                 modalHeaderTemplate({
//                     heading: 'Search',
//                     dropdownItem: searchDropdownItem,
//                     dropdownPlaceholder: 'All search engines',
//                     selectedItem: selectedItem,
//                     setSelectedItem: setSelectedItem
//                 })
//             }
//             key={'ai-modal'}
//         >
//             <div className="flex gap-3 justify-content-center align-items-center text-center mb-3 flex-column">
//                 <GigaDIcon icon="searchengine" className="w-8rem h-3rem" style={{ objectFit: 'contain' }} />
//                 <p>Our multi-search engine provides unbiased results by searching multiple search engines at once</p>
//             </div>
//             <div className="col-12 mb-3">
//                 <span className="p-input-icon-right w-full">
//                     <InputText
//                         type="text"
//                         placeholder="Ask anything"
//                         className="w-full"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         style={{ border: '2px solid rgba(48, 168, 255, 1)' }}
//                     />
//                     <i className="pi pi-send" onClick={handleSearch} />
//                 </span>
//             </div>
//             {iframeUrl && (
//                 <div className="iframe-container">
//                     <iframe
//                         src={iframeUrl}
//                         title="Search Result"
//                         style={{
//                             width: '100%',
//                             height: '500px',
//                             border: 'none'
//                         }}
//                     />
//                 </div>
//             )}
//         </Modal>
//     );
// }

// export default SearchModal;
