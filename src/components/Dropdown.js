import React, { useState } from 'react';

const Dropdown = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                <img src="/filter-white.png" alt="Logo" className="h-6" />
            </button>
            {isOpen && (
                <div className="absolute right-0 p-3 mt-2 w-96 bg-white border rounded shadow-lg z-10">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;