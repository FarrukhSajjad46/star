// LogoComponent.tsx
import Image from 'next/image';
import React from 'react';

const LogoComponent: React.FC = () => {
    return (
        <div className="logo">
            <Image 
            src="/logo.png" 
            alt="Logo" 
            width={80}
            height={80}
            />
        </div>
    );
}

export default LogoComponent;
