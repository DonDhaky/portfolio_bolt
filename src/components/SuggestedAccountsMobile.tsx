import React from 'react';
import { Check } from 'lucide-react';

const accounts = [
  {
    id: 1,
    username: 'tiktok',
    name: 'TikTok',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
    verified: true
  },
  {
    id: 2,
    username: 'charlidamelio',
    name: 'Charli D\'Amelio',
    avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg',
    verified: true
  },
  {
    id: 3,
    username: 'khaby.lame',
    name: 'Khabane Lame',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    verified: true
  }
];

const SuggestedAccountsMobile: React.FC = () => {
  return (
    <div className="space-y-3">
      {accounts.map(account => (
        <div key={account.id} className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
            <img 
              src={account.avatar} 
              alt={account.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 hidden md:block">
            <div className="flex items-center">
              <p className="font-semibold text-white truncate mr-1">{account.username}</p>
              {account.verified && (
                <div className="bg-[#20D5EC] rounded-full p-0.5">
                  <Check size={10} className="text-white" />
                </div>
              )}
            </div>
            <p className="text-gray-400 text-xs truncate">{account.name}</p>
          </div>
        </div>
      ))}
      <div className="hidden md:block">
        <button className="text-[#FE2C55] text-sm hover:underline">See all</button>
      </div>
    </div>
  );
};

export default SuggestedAccountsMobile;