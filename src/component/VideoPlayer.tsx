// VideoPlayer.tsx
import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  videoFileNames?: string[]; // Make videoFileNames optional
  selectedVideo: string | null; // Selected video file name
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ selectedVideo }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // When the selected video changes, reset the video player
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => console.error('Error playing video', error));
    }
  }, [selectedVideo]);

  return (
    <div className="video-player">
      {/* Your video player UI goes here */}
      <video ref={videoRef} width="640" height="360" controls>
        {selectedVideo && (
          <source src={`/videos/${encodeURIComponent(selectedVideo)}`} type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
