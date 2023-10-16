import React from 'react';
import Links from '../links/Links';

const NavBar = () => {
    return (
        <div className='hidden md:flex  justify-center items-center bg-white dark:bg-slate-800 col-span-6 rounded-md px-4 py-2'>
            <ul className="w-full flex items-center text-base gap-x-10 transition-all  duration-500">
                <Links iconStyle = "text-rose-500 dark:text-yellow-400 text-2xl xl:text-2xl ml-4" backStyle="bg-gradient-to-l from-slate-300  dark:from-yellow-300 opacity-60" width="w-auto mt-0"/>
            </ul>
        </div>
    );
};

export default NavBar;