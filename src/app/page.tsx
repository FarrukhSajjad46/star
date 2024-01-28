// Page.tsx
'use client'
import React, { useState } from 'react';

import Link from 'next/link';
import './globals.css';

const Page = () => {
  const [,setSelectedDocument] = useState<string | null>(null);

  const handleDocumentClick = (documentName: string) => {
    setSelectedDocument(documentName);
    // Use Next.js router to navigate to "/nextpage"
    window.location.href = '/nextpage';
  };

  return (
    <div className="container">
      <div className="main-container">
        <div className="left-side">
          <ul>
            <li>
              <div onClick={() => handleDocumentClick('Document 1')}>
                <Link href="/nextpage">Next.Js</Link>
              </div>
            </li>
            {/* Add more list items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};



export default Page;

