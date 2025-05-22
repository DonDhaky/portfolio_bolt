import React from 'react';
import { Users, Info, VideoIcon } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="sticky top-16 h-[calc(100vh-64px)] w-[75px] md:w-[240px] bg-black border-r border-gray-800 overflow-y-auto pt-2 flex-shrink-0">
      <div className="px-2">
        <div className="flex flex-col">
          <NavItem icon={<Info size={22} />} label="A propos" active />
        </div>
        
        <div className="px-2 mt-4 mb-2 hidden md:block">
          <p className="text-gray-500 text-xs">Cliquez ici pour me contacter !</p>
          <button className="w-full mt-3 py-2 px-4 border border-[#FE2C55] text-[#FE2C55] rounded-md font-medium hover:bg-[#FE2C55]/10 transition-colors">
            Contact
          </button>
        </div>
        
        <div className="mt-6">
          <p className="text-gray-400 text-sm font-semibold px-2 hidden md:block mb-2">Découvrir</p>
          
          <div className="flex flex-col">
            <NavItem icon={<Users size={22} />} label="Projets web" />
            <NavItem icon={<VideoIcon size={22} />} label="Projets mobile" />
            <NavItem icon={<VideoIcon size={22} />} label="Games" />
          </div>
        </div>
        
        
        <div className="mt-6 hidden md:block pb-8">
          <div className="text-gray-500 text-xs px-2">
            <p className="mb-3">
              Ceci est mon portfolio, grandement inspiré du site web TikTok, crée avec React
            </p>
            <p className="mb-3">
              Stack utilisée : Bolt, Cursor, StackBlitz, Netlify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <div className={`flex items-center py-3 px-2 my-1 rounded-md cursor-pointer transition-colors ${active ? 'text-white hover:bg-gray-800' : 'text-gray-200 hover:bg-gray-800'}`}>
      <div className="flex justify-center md:justify-start items-center w-full md:w-auto">
        <div className="md:mr-2">{icon}</div>
        <span className={`${active ? 'font-semibold' : 'font-medium'} text-lg hidden md:block`}>{label}</span>
      </div>
    </div>
  );
};

export default Sidebar;