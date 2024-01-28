// VideoList.tsx
import React, { useState } from 'react';

interface VideoListProps {
  videoFileNames: string[]; // Array of video file names
  onVideoSelect: (fileName: string) => void; // Callback function to notify parent of video selection
}

const VideoList: React.FC<VideoListProps> = ({ videoFileNames, onVideoSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredVideoFileNames = videoFileNames.filter((fileName) =>
    fileName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVideoClick = (fileName: string) => {
    // Notify the parent component about the selected video
    onVideoSelect(fileName);
  };

  return (
    <div>
      {/* Video Search Bar */}
      <input
        className="video-list-search-bar"
        type="text"
        placeholder="Search videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Video Section */}
      <div className="video-list">
        {filteredVideoFileNames.map((fileName, index) => (
          <div key={index} className="video-list-item" onClick={() => handleVideoClick(fileName)}>
            {/* Video title and like button */}
            <div className="video-details">
              <a href={`/Video/${encodeURIComponent(fileName)}`}>
                {`Video ${index + 1}`}
              </a>
              <button className="like-button">Like</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
