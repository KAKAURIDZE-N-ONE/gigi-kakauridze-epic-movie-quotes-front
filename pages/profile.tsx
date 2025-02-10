import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { DesktopProfilePage } from "@/components/ProfilePage";
import { MobileProfilePage } from "@/components/ProfilePage/MobileProfilePage";

const Profile: React.FC = () => {
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
