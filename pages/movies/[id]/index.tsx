import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MovieDescription } from "@/components/MovieDetailsPage";
import { useMediaQuery } from "react-responsive";

const ViewMovie: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

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
