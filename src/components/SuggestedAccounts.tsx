import React from 'react';
import { Check } from 'lucide-react';

const accounts = [
  {
    id: 1,
    username: 'tiktok',
    name: 'TikTok',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
    verified: true,
    followers: '215.4M',
    likes: '10.9B'
  },
  {
    id: 2,
    username: 'charlidamelio',
    name: 'Charli D\'Amelio',
    avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg',
    verified: true,
    followers: '142.3M',
    likes: '11B'
  },
  {
    id: 3,
    username: 'khaby.lame',
    name: 'Khabane Lame',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    verified: true,
    followers: '149.5M',
    likes: '2.3B'
  },
  {
    id: 4,
    username: 'bellapoarch',
    name: 'Bella Poarch',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    verified: true,
    followers: '90.4M',
    likes: '2.2B'
  },
  {
    id: 5,
    username: 'addisonre',
    name: 'Addison Rae',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    verified: true,
    followers: '88.7M',
    likes: '5.8B'
  }
];

const SuggestedAccounts: React.FC = () => {
  return (
    <div className="pt-5 sticky top-20">
      <div className="pb-5 border-b border-gray-800">
        <div className="mb-4">
          <p className="font-semibold">Quizz conseillés</p>
        </div>
        <div className="space-y-3">
          {accounts.map(account => (
            <div key={account.id} className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src={account.avatar} 
                  alt={account.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <p className="font-semibold text-white truncate mr-1">{account.username}</p>
                  {account.verified && (
                    <div className="bg-[#20D5EC] rounded-full p-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-sm truncate">{account.name}</p>
              </div>
              <button className="text-[#FE2C55] font-medium text-sm">Jouer</button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button className="text-[#FE2C55] text-sm hover:underline">Voir tous les quizz</button>
        </div>
      </div>
      
      <div className="py-5 border-b border-gray-800">
        <div className="mb-4">
          <p className="font-semibold">Following accounts</p>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <p className="text-gray-400 text-center">Accounts you follow will appear here</p>
          <button className="mt-4 py-1.5 px-8 bg-[#FE2C55] text-white rounded-md font-medium text-sm hover:bg-[#FE2C55]/90 transition-colors">
            Find accounts
          </button>
        </div>
      </div>
      
      <div className="py-4 text-gray-500 text-xs">
        <p className="mb-3">
          About Newsroom TikTok Shop Contact Careers ByteDance
        </p>
        <p className="mb-3">
          TikTok for Good Advertise Developers Transparency
        </p>
        <p className="mb-3">
          TikTok Rewards Safety Terms Privacy Creator Portal Guidelines
        </p>
        <p>© 2025 TikTok</p>
      </div>
    </div>
  );
};

export default SuggestedAccounts;