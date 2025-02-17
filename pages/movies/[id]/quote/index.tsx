import { useAddQuotePage } from "@/components/AddQuotePage";
import DarkModalLayout from "@/components/DarkModalLayout/DarkModalLayout";
import { InnerInput } from "@/components/InnerInput";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import React from "react";

const AddQuotePage: React.FC = () => {
  const { movieId } = useAddQuotePage();

  return (
    <Modal>
      <DarkModalLayout
        submitFn={() => {
          console.log("gela");
        }}
        btnText="Add quote"
        xBtnUrl={`/movies/${movieId}`}
        title="Add Quote"
      >
        <InnerInput lang="Eng">Movie name</InnerInput>
        <InnerInput lang="ქარ">ფილმის სახელი</InnerInput>
        <InnerInput>წელი/Year</InnerInput>
        <InnerInput lang="Eng">Director</InnerInput>
        <InnerInput lang="ქარ">Director</InnerInput>
      </DarkModalLayout>
    </Modal>
  );
};

export default AddQuotePage;
