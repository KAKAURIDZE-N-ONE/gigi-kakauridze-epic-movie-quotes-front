import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { MoviesLayout } from "@/components/MoviesPage";
import useRequireAuth from "@/hooks/useRequireAuth";
import {
  selectActiveMovieModal,
  updateActiveMovieModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import React from "react";
import { useDispatch } from "react-redux";

const Movies: React.FC = () => {
  const { isPending } = useRequireAuth();
  const activeMovieModal = useAppSelector(selectActiveMovieModal);
  const dispatch = useDispatch();

  if (isPending) return <Loader />;
  else
    return (
      <>
        {activeMovieModal === "add" && (
          <CreateOrEditMovieBody
            turnOfFn={() => dispatch(updateActiveMovieModal(null))}
            type="create"
          />
        )}
        <Layout>
          <div className="hidden lg:block">
            <DesktopInnerLayout>
              <MoviesLayout />
            </DesktopInnerLayout>
          </div>
          <div className="block lg:hidden">
            <MoviesLayout />
          </div>
        </Layout>
      </>
    );
};

export default Movies;
