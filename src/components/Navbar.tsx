import React from 'react';
import { Search, MessageCircle, Bell, User, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-black border-b border-gray-800 z-50">
      <div className="max-w-[1150px] h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-[#FE2C55]">Tik</span>Tok
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-[500px] mx-4">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search accounts and videos"
              className="w-full py-2.5 pl-4 pr-12 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
            <div className="absolute right-0 top-0 h-full flex items-center px-4 border-l border-gray-700">
              <Search size={20} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="hidden md:flex items-center px-4 py-1.5 text-[#FE2C55] border border-[#FE2C55] rounded-md hover:bg-[#FE2C55]/10 transition-colors">
            <span className="font-medium">Upload</span>
          </button>
          <button className="hidden md:flex items-center px-6 py-1.5 bg-[#FE2C55] text-white rounded-md hover:bg-[#FE2C55]/90 transition-colors">
            <span className="font-medium">Log in</span>
          </button>
          
          <div className="md:hidden flex items-center">
            <Search size={24} className="text-white mr-5" />
          </div>
          
          <div className="hidden sm:flex space-x-5">
            <MessageCircle size={24} className="text-white cursor-pointer hover:text-gray-300" />
            <Bell size={24} className="text-white cursor-pointer hover:text-gray-300" />
            <User size={24} className="text-white cursor-pointer hover:text-gray-300" />
          </div>
          
          <div className="flex items-center text-white cursor-pointer">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;