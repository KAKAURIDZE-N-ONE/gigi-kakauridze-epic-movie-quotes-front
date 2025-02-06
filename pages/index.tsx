import {
  EmailVerifyMessage,
  Footer,
  Hero,
  HeroImage,
  LogInBody,
} from "@/components/index";
import { EmailVerifySuccessMessage } from "@/components/index/EmailVerifySuccessMessage";
import { ForgotPasswordBody } from "@/components/index/ForgotPasswordBody";
import { EmailResetPassword } from "@/components/index/ResetPasswordSuccessMessage";
import { SignUpBody } from "@/components/index/SignUpBody";
import useIndex from "@/components/index/useIndex";
import { Layout } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { PasswordResetSuccessMessage } from "@/components/ResetPasswordPage";
import ResetPasswordBody from "@/components/ResetPasswordPage/ResetPasswordBody/ResetPasswordBody";

export default function Home() {
  const { imagesData, openedModal, turnOfModal } = useIndex();

  return (
    <Layout>
      {openedModal !== null && (
        <Modal turnOfFn={turnOfModal}>
          {openedModal === "signUp" && <SignUpBody />}
          {openedModal === "logIn" && <LogInBody />}
          {openedModal === "resetPassword" && <ResetPasswordBody />}
          {openedModal === "forgotPassword" && <ForgotPasswordBody />}
          {openedModal === "verifyEmail" && <EmailVerifyMessage />}
          {openedModal === "verifySuccess" && <EmailVerifySuccessMessage />}
          {openedModal === "resetPasswordLink" && <EmailResetPassword />}
          {openedModal === "resetPasswordSuccess" && (
            <PasswordResetSuccessMessage />
          )}
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
    </Layout>
  );
}
