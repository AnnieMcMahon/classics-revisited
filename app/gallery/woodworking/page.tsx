import Image from "next/image";
import { woodworkingGallery } from "@/app/data/woodworkingGalleryData";

export default function WoodworkingGallery() {
  return (
    <div className="px-8 mt-24 mb-8">
      <h1 className="text-3xl font-bold text-center mb-8">Woodworking Gallery</h1>
    <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
      {woodworkingGallery.map((img, index) => (
        <div key={index} className="mb-4">
          <Image
            src={img.photo}
            alt={img.title}
            width={img.width}
            height={img.height}
            className="rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
    </div>
  );
}
