import {
  EmailVerifyMessage,
  Footer,
  Hero,
  HeroImage,
  LogInBody,
  SignUpBody,
  EmailResetPassword,
  EmailVerifySuccessMessage,
  ForgotPasswordBody,
  useIndex,
} from "@/components/index";
import { Layout } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { PasswordResetSuccessMessage } from "@/components/ResetPasswordPage";
import { ResetPasswordBody } from "@/components/ResetPasswordPage";
import useIsMounted from "@/hooks/useIsMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "landing-page",
        "verify-email-modal",
        "verify-email-success-modal",
        "password-reset-message",
        "password-reset-success",
      ])),
    },
  };
}

export default function Home() {
  const { imagesData, openedModal, turnOfModal } = useIndex();

  const mounted = useIsMounted();
  if (!mounted) return null;

  return (
    <>
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
        <div className="relative -mt-24 pt-[5.375rem]">
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
        </div>
        <Footer />
      </Layout>
    </>
  );
}
