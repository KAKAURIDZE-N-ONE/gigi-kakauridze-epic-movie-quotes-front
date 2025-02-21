import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MovieDescription } from "@/components/MovieDetailsPage";
import { ViewCreateEditQuoteBody } from "@/components/ViewCreateEditQuoteBody";
import { useMediaQuery } from "react-responsive";

const AddQuotePage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <>
      {isMobile ? (
        <ViewCreateEditQuoteBody type="create" />
      ) : (
        <>
          <ViewCreateEditQuoteBody
            type="create"
            darkModalIsScrollable={false}
          />
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

export default AddQuotePage;
