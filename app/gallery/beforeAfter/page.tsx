import Image from "next/image";
import { beforeAfterGallery } from "@/app/data/beforeAfterData";

export default function BeforeAfterGallery() {
  return (
    <div className="px-8 mt-24 mb-8">
      <h1 className="text-3xl font-bold text-center mb-8">Before and After Gallery</h1>
      <div className="flex flex-col gap-12">
        {beforeAfterGallery.map((project, index) => (
          <div key={index} className="flex justify-center gap-4">
            {project.photos.map((photo, photoIndex) => (
            <div>
              <div 
                key={photoIndex} 
                className="relative w-32 h-24 md:w-64 md:h-56 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                  />
              </div>
              <p className="mt-2 text-sm text-gray-700 text-center">{photo.alt}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};