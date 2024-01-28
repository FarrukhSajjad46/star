'use client'
// Page.tsx
import React, { useState } from 'react';
import VideoPlayer from '@/component/VideoPlayer';
import VideoList from '@/component/VideoList';

const Page: React.FC = () => {
  const videoFileNames = ['farrukh-s.mp4', 'farrukh-t.mp4', 'farrukh-u.mp4', 'farrukh-v.mp4'];
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoSelect = (fileName: string) => {
    // Update the selectedVideo state with the selected video
    setSelectedVideo(fileName);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex">
        <div className="wid1">
          {/* Pass the videoFileNames and the handleVideoSelect callback to VideoList */}
          <VideoList videoFileNames={videoFileNames} onVideoSelect={handleVideoSelect} />
        </div>
        <div className="wid2">
          {/* Pass the selectedVideo state to VideoPlayer */}
          <VideoPlayer selectedVideo={selectedVideo} />
        </div>
      </div>
    </div>
  );
};

export default Page;
