import React from 'react';
import Layout from './components/Layout';
import VideoFeed from './components/VideoFeed';
import Sidebar from './components/Sidebar';
import SuggestedAccounts from './components/SuggestedAccounts';

function App() {
  return (
    <Layout>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <div className="flex max-w-[1150px] mx-auto">
            <div className="flex-1">
              <VideoFeed />
            </div>
            <div className="hidden lg:block w-[356px] flex-shrink-0 pl-4">
              <SuggestedAccounts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;