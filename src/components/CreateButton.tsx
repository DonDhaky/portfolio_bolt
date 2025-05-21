import React from 'react';
import { Plus } from 'lucide-react';

const CreateButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="w-12 h-12 md:w-14 md:h-14 bg-[#FE2C55] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#FE2C55]/90 transition-transform hover:scale-105">
        <Plus size={26} strokeWidth={3} />
      </button>
    </div>
  );
};

export default CreateButton;