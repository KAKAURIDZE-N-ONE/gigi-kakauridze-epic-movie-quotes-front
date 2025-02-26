import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { Modal } from "@/components/Modal";
import {
  CreatePostBody,
  NewsFeedLayout,
  useNewsFeedPage,
} from "@/components/NewsFeedPage";
import { updateActiveQuoteModal } from "@/store/slices/modalSlice";

const NewsFeed: React.FC = () => {
  const { isPending, newPostModalIsOpen, dispatch, isMobile } =
    useNewsFeedPage();

  if (isPending) return <Loader />;
  else
    return (
      <>
        {newPostModalIsOpen && (
          <Modal turnOfFn={() => dispatch(updateActiveQuoteModal(null))}>
            <CreatePostBody
              turnOfFn={() => dispatch(updateActiveQuoteModal(null))}
            />
          </Modal>
        )}
        <Layout>
          {isMobile ? (
            <div className="lg:hidden block text-white">
              <NewsFeedLayout />
            </div>
          ) : (
            <div className="hidden lg:block">
              <DesktopInnerLayout>
                <NewsFeedLayout />
              </DesktopInnerLayout>
            </div>
          )}
        </Layout>
      </>
    );
};

export default NewsFeed;
