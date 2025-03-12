import Image from "next/image";
import { kitchenGallery } from "@/app/data/kitchenGalleryData";

export default function KitchenGallery() {
  return (
    <div className="px-8 mt-24 mb-8">
      <h1 className="text-3xl font-bold text-center mb-8">Kitchen Gallery</h1>
    <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
      {kitchenGallery.map((img, index) => (
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
