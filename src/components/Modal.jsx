import React, { useEffect } from 'react';

const Modal = ({ isVisible, onClose, children }) => {
    // モーダルが開いた時に背景をスクロールできないように固定
    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isVisible);
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isVisible]);
    // isVisibleがfalseの時nullを返す
    if (!isVisible) return null;

    // wrapperをクリックしたらモーダルを閉じる
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    };

    return (
        <div className='fixed inset-0 bg-dark-black bg-opacity-50 z-50 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
            <div className='w-[90%] h-[90%] justify-center flex flex-col'>
                {/* ボタン */}
                <button className='text-navy text-5xl place-self-end' onClick={() => onClose()}>&times;</button>
                {/* モーダルのコンテンツ部分 */}
                <div className=' bg-white-2 rounded-xl bg-cover bg-no-repeat bg-center h-[90%] drop-shadow-2xl  overflow-y-scroll'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
