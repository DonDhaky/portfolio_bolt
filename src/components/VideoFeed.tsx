import React from 'react';
import VideoItem from './VideoItem';

const videos = [
  {
    id: 1,
    user: {
      username: 'TikTok',
      name: 'TikTok Official',
      avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
      followers: '215.4M',
      verified: true
    },
    description: 'When the trending sound hits just right #fyp #trending',
    audio: 'original sound - TikTok',
    likes: '3.2M',
    comments: '42.1K',
    shares: '103.5K',
    saved: '198.2K',
    video: 'https://images.pexels.com/photos/5383571/pexels-photo-5383571.jpeg'
  },
  {
    id: 2,
    user: {
      username: 'charlidamelio',
      name: 'Charli D\'Amelio',
      avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg',
      followers: '142.3M',
      verified: true
    },
    description: 'New dance routine! Who wants a tutorial? #dance #tutorial',
    audio: 'Levitating - Dua Lipa',
    likes: '7.5M',
    comments: '156.2K',
    shares: '342.7K',
    saved: '521.3K',
    video: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg'
  },
  {
    id: 3,
    user: {
      username: 'khaby.lame',
      name: 'Khabane Lame',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      followers: '149.5M',
      verified: true
    },
    description: 'Why complicate things? 😂 #comedy #simplicity',
    audio: 'original sound - khaby.lame',
    likes: '9.3M',
    comments: '87.4K',
    shares: '241.9K',
    saved: '378.2K',
    video: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg'
  }
];

const VideoFeed: React.FC = () => {
  return (
    <div className="py-5 px-3 border-l border-gray-800 min-h-[calc(100vh-64px)]">
      <div className="mb-5 flex space-x-8 border-b border-gray-800 pb-2">
        <button className="text-white font-semibold pb-2 relative">
          Projets
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FE2C55]"></div>
        </button>
        <button className="text-gray-400 font-semibold pb-2">Blog</button>
      </div>
      
      <div className="space-y-6">
        {videos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoFeed;