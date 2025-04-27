"use client";

import Image from "next/image";
import { useState } from "react";
import { woodworkingGallery } from "@/app/data/woodworkingGalleryData";

export default function WoodworkingGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="px-8 mt-24 mb-8">
      <h1 className="text-3xl font-bold text-center mb-8">Woodworking Gallery</h1>
    <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
      {woodworkingGallery.map((img, index) => (
        <div key={index} className="mb-4" onClick={() => setSelectedImage(img.photo)}>
          <Image
            src={img.photo}
            alt={img.title}
            width={img.width}
            height={img.height}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
    {/* Modal */}
              {selectedImage && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                  onClick={() => setSelectedImage(null)}
                >
                  <div className="relative w-11/12 max-w-4xl">
                    <Image
                      src={selectedImage}
                      alt="Expanded view"
                      width={1600}
                      height={1200}
                      className="rounded-lg max-w-full max-h-screen object-contain"
                    />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
                >
                  ✕
                </button>
                  </div>
                </div>
              )}
    </div>
  );
}
