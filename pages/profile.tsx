import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { DesktopProfilePage } from "@/components/ProfilePage";
import { MobileProfilePage } from "@/components/ProfilePage/MobileProfilePage";
import useIsMounted from "@/hooks/useIsMounted";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "profile-page",
        "sign-up-modal",
        "inner-layout",
        "landing-page",
        "notifications",
        "reset-password-modal",
        "errors",
      ])),
    },
  };
}
const Profile: React.FC = () => {
  const mounted = useIsMounted();
  if (!mounted) return null;
  return (
    <Layout>
      <div className="lg:hidden">
        <MobileProfilePage />
      </div>
      <div className="hidden lg:block">
        <DesktopInnerLayout>
          <DesktopProfilePage />
        </DesktopInnerLayout>
      </div>
    </Layout>
  );
};

export default Profile;
