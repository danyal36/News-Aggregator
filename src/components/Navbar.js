import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-2 flex items-center justify-between">
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-12" />
                <h2 className='text-white'>
                    NEWS AGGREGATOR
                </h2>
            </div>
        </nav>
    );
};

export default Navbar;