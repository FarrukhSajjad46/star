'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src === selectedImage ? null : src);
  };

  return (
    <div>
      <div className="grid grid-flow-col sm:grid-flow-row gap-6">
        {['slum-2.jpg', 'slum-1.jpg', 'slum-3.jpg', 'slum-4.jpg', 'devil.jpg', 'best3.jpg'].map((image, index) => (
          <div
            key={index}
            className={`relative ${selectedImage === image ? 'focus:ring-2 focus:ring-blue-500' : 'hover:ring-2 hover:ring-blue-500'}`}
            onClick={() => handleImageClick(image)}
          >
            <Image src={`/${image}`} alt="" width="384" height="512" />
            {selectedImage === image && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <Image src={`/${image}`} alt="" width="768" height="1024" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
