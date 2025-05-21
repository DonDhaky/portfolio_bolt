import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import CreateButton from './CreateButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">{children}</main>
      <CreateButton />
    </div>
  );
};

export default Layout;