import Image from 'next/image';
import React from 'react';


const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <Image src="/whatsapp-icon.png" alt="WhatsApp" width={3900} height={3900} />Whatsapp
        </a>
        
        
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/twitter-icon.png" alt="Twitter" width={64} height={64} />Twitter
        </a>
        
        
        <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
          <Image src="/facebook-icon.png" alt="Facebook" width={64} height={64} />Facebook
        </a>
        
      </div>

      <div className="contact-bar">
  <span>Contact us:</span>
  <a href="mailto:farrukhsajjad46@gmail.com" target="_blank" rel="noopener noreferrer">
    <Image src="/gmail-icon.png" alt="Gmail Icon" width={64} height={64} /> EMail
  </a>
  <span>|</span>
  <span>
    <Image src="/phone-icon.png" alt="Phone Icon" width={64} height={64} /> +1234567890
  </span>
</div>
 </div>
  );
};
export default Footer;