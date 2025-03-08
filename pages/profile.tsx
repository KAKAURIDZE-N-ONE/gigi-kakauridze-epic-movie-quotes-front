import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import PermissionCheckerLoader from "@/components/PermissionCheckerLoader";
import { DesktopProfilePage } from "@/components/ProfilePage";
import { MobileProfilePage } from "@/components/ProfilePage/MobileProfilePage";
import useRequireAuth from "@/hooks/useRequireAuth";
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
  const { isPending } = useRequireAuth();

  if (isPending) return <PermissionCheckerLoader />;
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
