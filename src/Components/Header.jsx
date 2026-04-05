import React from 'react';
import PhoenixLogo from '../assets/logo (1).png';

const Header = () => {
    return (
        <nav className="bg-[#0a0a0a] text-white px-10 py-4 border-b border-gold/20 w-full">
            {/* Main Wrapper: 3 Columns */}
            <div className="grid grid-cols-3 items-center w-full max-w-[1400px] mx-auto">

                {/* 1. Left Links */}
                <ul className="flex gap-10 justify-start items-center text-l font-boldonse tracking-[0.2em]">
                    <li className="relative cursor-pointer transition-all font-bold duration-300 hover:text-[#D4AF37]  hover:scale-105">
                        HOME
                    </li>
                    <li className="relative cursor-pointer font-bold transition-all duration-300 hover:text-[#D4AF37] hover:scale-105">
                        EVENT
                    </li>
                </ul>

                {/* 2. Centered Logo & Brand */}
                <div className="flex items-center justify-center gap-4 group cursor-default">
                    <img
                        src={PhoenixLogo}
                        alt="Logo"
                        className="w-12 h-12 object-contain transition-transform duration-500 group-hover:rotate-[360deg] filter ]"
                    />
                    <h1 className="text-3xl font-boldonse font-bold tracking-tighter text-white ]">
                        HACK<span className="">SERIES</span>
                    </h1>
                </div>

                {/* 3. Right Links */}
                <ul className="flex gap-10 justify-end items-center text-sm font-bold font-boldonse tracking-[0.2em]">
                    <li className="relative cursor-pointer transition-all duration-300 hover:text-[#D4AF37]  hover:scale-105">
                        CONTACT US
                    </li>
                    <li className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-500 cursor-pointer font-bold shadow-[inset_0_0_10px_rgba(212,175,55,0.2)] ]">
                        REGISTRATION
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;