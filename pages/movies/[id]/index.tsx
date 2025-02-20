import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { MovieDescription } from "@/components/MovieDetailsPage";
import useRequireAuth from "@/hooks/useRequireAuth";
import { useMediaQuery } from "react-responsive";

const ViewMovie: React.FC = () => {
  const { isPending } = useRequireAuth();
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  if (isPending) return <Loader />;
  else
    return (
      <Layout>
        {isMobile ? (
          <MovieDescription />
        ) : (
          <DesktopInnerLayout>
            <MovieDescription />
          </DesktopInnerLayout>
        )}
      </Layout>
    );
};

export default ViewMovie;
