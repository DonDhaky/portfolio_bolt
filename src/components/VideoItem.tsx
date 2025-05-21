import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Check, Music } from 'lucide-react';

interface User {
  username: string;
  name: string;
  avatar: string;
  followers: string;
  verified: boolean;
}

interface Video {
  id: number;
  user: User;
  description: string;
  audio: string;
  likes: string;
  comments: string;
  shares: string;
  saved: string;
  video: string;
}

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const handleLike = () => {
    setLiked(!liked);
  };
  
  const handleSave = () => {
    setSaved(!saved);
  };
  
  return (
    <div className="flex flex-col md:flex-row py-3 border-b border-gray-800">
      <div className="mr-3 mb-3 md:mb-0">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={video.user.avatar} 
            alt={video.user.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center">
              <h3 className="font-semibold text-white mr-1">{video.user.username}</h3>
              {video.user.verified && (
                <div className="bg-[#20D5EC] rounded-full p-0.5">
                  <Check size={12} className="text-white" />
                </div>
              )}
              <p className="ml-1 text-gray-400">{video.user.name}</p>
            </div>
            <p className="mt-1 mb-2 max-w-[400px]">{video.description}</p>
            <div className="flex items-center mb-3">
              <Music size={16} className="mr-2" />
              <p className="text-sm">{video.audio}</p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 border border-[#FE2C55] text-[#FE2C55] rounded-md text-sm font-medium hover:bg-[#FE2C55]/10 transition-colors">
              Follow
            </button>
          </div>
        </div>
        
        <div className="flex">
          <div className="relative bg-gray-900 rounded-md flex-grow h-[500px] max-w-[334px] overflow-hidden group cursor-pointer">
            <img src={video.video} className="h-full w-full object-cover" alt="Video thumbnail" />
            
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-black bg-opacity-50 rounded-full p-4">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-end space-y-3 ml-4">
            <button 
              className="flex flex-col items-center"
              onClick={handleLike}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 ${liked ? 'text-[#FE2C55]' : 'text-white'}`}>
                <Heart size={24} fill={liked ? '#FE2C55' : 'none'} />
              </div>
              <span className="text-xs mt-1">{video.likes}</span>
            </button>
            
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800">
                <MessageCircle size={24} />
              </div>
              <span className="text-xs mt-1">{video.comments}</span>
            </button>
            
            <button 
              className="flex flex-col items-center"
              onClick={handleSave}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 ${saved ? 'text-[#FE2C55]' : 'text-white'}`}>
                <Bookmark size={24} fill={saved ? '#FE2C55' : 'none'} />
              </div>
              <span className="text-xs mt-1">{video.saved}</span>
            </button>
            
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800">
                <Share2 size={24} />
              </div>
              <span className="text-xs mt-1">{video.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;