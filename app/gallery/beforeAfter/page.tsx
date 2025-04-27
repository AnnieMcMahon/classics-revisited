"use client";

import Image from "next/image";
import { useState } from "react";
import { beforeAfterGallery } from "@/app/data/beforeAfterData";

export default function BeforeAfterGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="px-8 mt-24 mb-8">
      <h1 className="text-3xl font-bold text-center mb-8">Before and After Gallery</h1>
      <div className="flex flex-col gap-12">
        {beforeAfterGallery.map((project, index) => (
          <div key={index} className="flex justify-center gap-4">
            {project.photos.map((photo, photoIndex) => (
              <div key={photoIndex} className="flex flex-col items-center">
                <div 
                  onClick={() => setSelectedImage(photo.src)}
                  className="relative w-32 h-24 md:w-64 md:h-56 lg:w-80 lg:h-72 overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-700 text-center">{photo.alt}</p>
              </div>
            ))}
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
