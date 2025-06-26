import React from 'react';

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
    if (!isModelOpen) return null;
    return (
        <div className='fixed inset-0 bg-opacity-60 backdrop-blur-sm  flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative'>
                <button
                    className='absolute top-0 right-6 text-gray-500 text-2xl hover:text-gray-700 hover:cursor-pointer'
                    onClick={() => setIsModelOpen(false)}
                >
                    ×
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;