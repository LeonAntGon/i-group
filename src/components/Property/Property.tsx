"use client";
import { formatPrice } from "@/utils/formatPrice";
import { PropertyProps } from "./Property.types";
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
import { Form } from "../Form";
import React, { useEffect, useState } from 'react';

export function Property(props: PropertyProps) {
  const { house } = props;

  // Initialize without accessing `window` to prevent server-side errors
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    // Ensure `window` is defined (only runs on the client)
    if (typeof window !== 'undefined') {
      // Set initial state based on current window width
      setIsLargeScreen(window.innerWidth >= 768);
      
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 768);
      };
      
      window.addEventListener('resize', handleResize);
        
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <main className="max-w-5xl mx-auto">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isLargeScreen ? '70% 1fr' : '1fr', // Switch to single column on small screens
          margin: '0.75rem 0', // Equivalent to my-3
          padding: '1.25rem 0' // Equivalent to py-5
        }}
      >
        <div className="px-6">
          <h1 className="text-3xl mb-4 text-secondary flex justify-between">
            <span>House {house.id}</span>
            <span className="font-semibold">{formatPrice(house.price)}</span>
          </h1>
          <div className="flex gap-5 my-4">
            <h2 className="flex gap-3 text-xl items-center">
              <TfiLocationPin />
              {house.location}
            </h2>
          </div>
          <Image
            src={`/assets/properties/${house.image}`}
            alt={`Casa en ${house.location}`}
            width={1200}
            height={1200}
            className="w-full h-auto rounded-2xl"
            priority
          />
          <div className="gap-4 lg:flex mt-4">
            <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300/30">
              <LiaBedSolid />
              <span className="ml-2">{house.bedrooms}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300/30">
              <LiaBathSolid />
              <span className="ml-2">{house.bathroom}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300/30">
              <LiaRulerCombinedSolid />
              <span className="ml-2">{house.meters}</span>
            </div>
          </div>
          <div className="my-3">
            {house.description}
          </div>
        </div>
        <Form />     
      </div>
    </main>
  );
}
