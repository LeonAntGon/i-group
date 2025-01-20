"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import React from 'react';
import WspLogo from '../../../public/assets/wsp.png';
import Link from 'next/link';

// Define the type for the props
interface WhatsappLiveProps {
  encodedMessage: string;
}
const WhatsappLive: React.FC<WhatsappLiveProps> = ({ encodedMessage }) => {
  const whatsappNumber = "+5493816659628";
  const baseUrl = "https://api.whatsapp.com/send";
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const checkScrollVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } else {
        setIsVisible(true);
      }
    };

    checkScrollVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Link
        href={whatsappLink}
        target='_blank'
        rel='noreferrer noopener'
        style={{
          position: 'fixed',
          bottom: isVisible ? '20px' : '-80px',
          right: '40px',
          zIndex: 50,
          transition: 'bottom 0.3s ease',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: '7px',
            top: '8px',
            zIndex: -50,
          }}
        >
          <span className='flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75'></span>
        </span>
        <Image
          src={WspLogo}
          alt='whatsapp'
          width={55}
          height={55}
          style={{
            zIndex: 60,
          }}
        />
      </Link>
    </div>
  );
};

export default WhatsappLive;