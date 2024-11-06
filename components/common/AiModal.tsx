import React, { useState } from 'react';
import Card from './Card';
import { GigaDIcon } from '@/extra/svg';
import Modal from './Modal';
import ChatModal from './ChatModal';

interface AiModalProps {
    showAiModal: any;
    setShowAiModal: any;
    aiDropdownItem: any;
    modalHeaderTemplate: any;
    selectedItem: any;
    setSelectedItem: any;
    modalFooterTemplate: any;
}

function AiModal({ showAiModal, setShowAiModal, modalHeaderTemplate, aiDropdownItem, selectedItem, setSelectedItem, modalFooterTemplate }: AiModalProps) {
    const [query, setQuery] = useState('');
    const [showChatModal, setShowChatModal] = useState(false);

    return (
        <Modal
            visible={showAiModal}
            setVisible={setShowAiModal}
            header={() =>
                modalHeaderTemplate({
                    heading: 'Ai',
                    icon: <StarSvg fillColor="#257ABC" />,
                    dropdownItem: aiDropdownItem,
                    dropdownPlaceholder: 'Chat Gpt Version 4',
                    selectedItem: selectedItem,
                    setSelectedItem: setSelectedItem
                })
            }
            key={'ai-modal'}
            footer={() => modalFooterTemplate({ setShowChatModal: setShowChatModal, query: query, setQuery: setQuery })}
        >
            {showChatModal ? (
                <ChatModal />
            ) : (
                <>
                    <div className="flex gap-3 mb-3">
                        <Card
                            icon={<GigaDIcon icon="chatgpt" className="w-4rem h-3rem" style={{ objectFit: 'contain' }} />}
                            heading={'Use ChatGPT'}
                            description={'Use the default version of ChatGPT or switch to an older version'}
                            className={'flex-1 w-full mb-0'}
                        />
                        <Card icon={<GigaDIcon icon="bard" className="w-4rem h-3rem " style={{ objectFit: 'contain' }} />} heading={'Use Google’s Bard'} description={'Use Google’s large language model to chat '} className={'flex-1 w-full mb-0'} />
                    </div>
                    <div className="flex gap-3  mb-3">
                        <Card icon={<GigaDIcon icon="magicstick" className="w-2rem h-2rem" />} heading={'Create'} description={'Help me write a poem with vivid imagery that doesn’t rhyme'} className={'flex-1 w-full mb-0'} />
                        <Card icon={<GigaDIcon icon="pencil" className="w-2rem h-2rem" />} heading={'Write'} description={'Compose an invite for a baby shower that includes gift ideas'} className={'flex-1 w-full mb-0'} />
                        <Card icon={<GigaDIcon icon="balance" className="w-2rem h-2rem" />} heading={'Compare'} description={'Compose an invite for a baby shower that includes gift ideas'} className={'flex-1 w-full mb-0'} />
                    </div>
                </>
            )}
        </Modal>
    );
}

export default AiModal;

const StarSvg = ({ fillColor }: { fillColor: string }) => {
    return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.03563 11.8188C5.25281 11.9726 5.51256 12.0547 5.77865 12.0538V12.0503C6.02956 12.0508 6.27508 11.9776 6.48476 11.8399C6.69444 11.702 6.85905 11.5057 6.95816 11.2752L7.50302 9.61837C7.62888 9.24301 7.84025 8.90214 8.12059 8.6226C8.40085 8.34305 8.74234 8.13258 9.11806 8.00778L10.6984 7.49403C10.953 7.40461 11.1729 7.23715 11.3268 7.01547C11.4807 6.79388 11.5608 6.52936 11.5556 6.25959C11.5505 5.98982 11.4604 5.72853 11.2982 5.5129C11.136 5.29728 10.91 5.1383 10.6522 5.05858L9.09228 4.55194C8.71496 4.42638 8.37205 4.21454 8.09091 3.93325C7.80976 3.65196 7.59813 3.30898 7.4728 2.93157L6.95905 1.35209C6.86945 1.10052 6.70368 0.883115 6.48485 0.730065C6.26601 0.577023 6.00496 0.495934 5.73792 0.498085C5.47089 0.500236 5.21115 0.585512 4.9948 0.742064C4.77846 0.898617 4.61625 1.11867 4.53071 1.37164L4.01251 2.96446C3.88756 3.33089 3.68103 3.66418 3.4085 3.93917C3.13597 4.21417 2.80456 4.42368 2.43925 4.55194L0.859773 5.05947C0.671898 5.12518 0.50187 5.23368 0.363139 5.37641C0.224408 5.51913 0.120769 5.69218 0.0604247 5.88185C7.20387e-05 6.07152 -0.0153407 6.27262 0.0154045 6.46928C0.0461586 6.66592 0.122217 6.85272 0.237581 7.01494C0.394809 7.23626 0.61782 7.4023 0.874884 7.48958L2.43392 7.99534C2.81224 8.12191 3.15584 8.33497 3.43743 8.61753C3.51304 8.69255 3.58371 8.77246 3.64897 8.85663C3.82601 9.08577 3.96277 9.34336 4.0534 9.61837L4.56715 11.1961C4.65468 11.4474 4.81846 11.665 5.03563 11.8188ZM11.8501 16.3052C11.6808 16.1845 11.5533 16.0138 11.4857 15.8172L11.1941 14.9221C11.1374 14.7519 11.0422 14.5971 10.9159 14.4697C10.7893 14.3427 10.6346 14.247 10.4644 14.1906L9.58354 13.9035C9.37875 13.8348 9.20099 13.7028 9.07601 13.5266C8.95397 13.3557 8.88865 13.1508 8.88936 12.9409C8.88962 12.7295 8.95575 12.5236 9.07868 12.3516C9.20063 12.1787 9.37431 12.0489 9.57466 11.9809L10.4688 11.6912C10.635 11.6321 10.7855 11.5359 10.9088 11.4097C11.0321 11.2834 11.1248 11.1307 11.1799 10.9632L11.4679 10.0815C11.5356 9.88218 11.6636 9.70877 11.8342 9.58539C12.0047 9.46193 12.2094 9.39456 12.4199 9.39251C12.6304 9.39047 12.8364 9.45385 13.0092 9.57393C13.1821 9.69401 13.3135 9.86485 13.3851 10.0628L13.6776 10.9641C13.7348 11.1331 13.8304 11.2865 13.9568 11.4122C14.0833 11.5381 14.2372 11.6329 14.4064 11.6894L15.2882 11.9765C15.4914 12.04 15.6695 12.166 15.7972 12.3365C15.9248 12.5069 15.9956 12.7132 15.9994 12.9261C16.0032 13.1391 15.94 13.3478 15.8185 13.5228C15.6971 13.6977 15.5236 13.83 15.3228 13.9008L14.4215 14.1933C14.2526 14.2509 14.0991 14.3463 13.9727 14.4724C13.8462 14.5993 13.7509 14.7539 13.6945 14.9239L13.4083 15.803C13.3394 16.0077 13.207 16.1852 13.0305 16.3096C12.8598 16.4323 12.655 16.4982 12.4447 16.498C12.2312 16.498 12.023 16.4305 11.8501 16.3052Z"
                fill={fillColor}
            />
        </svg>
    );
};
