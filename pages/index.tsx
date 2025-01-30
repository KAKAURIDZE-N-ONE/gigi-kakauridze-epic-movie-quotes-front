import { HeroImage } from "@/components/HeroImage";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const images = [image1, image2, image3];
  const { t } = useTranslation("landingPage");
  return (
    <div className="relative">
      <div className="h-[100vh] flex items-center justify-center bg-black text-white">
        {t("greeting")}
      </div>
      {images.map((image) => (
        <HeroImage key={image.src} alt="The Royal Tenenbaums" url={image} />
      ))}
    </div>
  );
}
