import {
  Footer,
  Hero,
  HeroImage,
  LogInBody,
  SignUpBody,
} from "@/components/index";
import useIndex from "@/components/index/useIndex";
import { Modal } from "@/components/Modal";

export default function Home() {
  const { imagesData, openedModal, turnOfModal } = useIndex();

  return (
    <>
      {openedModal !== null && (
        <Modal turnOfFn={turnOfModal}>
          {openedModal === "signUp" && <SignUpBody />}
          {openedModal === "logIn" && <LogInBody />}
        </Modal>
      )}
      <div className="relative">
        <Hero />
        {imagesData.map((dataItem) => (
          <HeroImage
            translate={dataItem.translate}
            key={dataItem.image.src}
            quote={dataItem.quote}
            description={dataItem.description}
            alt="The Royal Tenenbaums"
            url={dataItem.image}
          />
        ))}
        <Footer />
      </div>
    </>
  );
}
