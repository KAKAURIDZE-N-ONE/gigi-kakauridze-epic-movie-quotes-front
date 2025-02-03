import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import {
  selectOpenedModal,
  updateOpenedModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useIndex() {
  const { t } = useTranslation("landing-page");
  const openedModal = useAppSelector(selectOpenedModal);
  const dispatch = useDispatch();

  function turnOfModal() {
    dispatch(updateOpenedModal(null));
  }

  const imagesData = [
    {
      image: image1,
      quote: t("film_1_quote"),
      description: t("film_1_description"),
      translate: "-translate-y-20",
    },
    {
      image: image2,
      quote: t("film_2_quote"),
      description: t("film_2_description"),
      translate: "-translate-y-0",
    },
    {
      image: image3,
      quote: t("film_3_quote"),
      description: t("film_3_description"),
      translate: "translate-y-24",
    },
  ];

  return { imagesData, openedModal, turnOfModal };
}
