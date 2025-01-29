import { HeroImage } from "@/components/HeroImage";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";

export default function Home() {
  const images = [image1, image2, image3];
  return (
    <div className="relative">
      {images.map((image) => (
        <HeroImage key={image.src} alt="The Royal Tenenbaums" url={image} />
      ))}
    </div>
  );
}
