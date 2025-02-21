import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MovieDescription } from "@/components/MovieDetailsPage";
import { ViewCreateEditQuoteBody } from "@/components/ViewCreateEditQuoteBody";
import { useMediaQuery } from "react-responsive";

const EditQuotePage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <>
      {isMobile ? (
        <ViewCreateEditQuoteBody type="edit" />
      ) : (
        <>
          <ViewCreateEditQuoteBody type="edit" darkModalIsScrollable={false} />
          <Layout>
            <DesktopInnerLayout>
              <MovieDescription />
            </DesktopInnerLayout>
          </Layout>
        </>
      )}
    </>
  );
};

export default EditQuotePage;
