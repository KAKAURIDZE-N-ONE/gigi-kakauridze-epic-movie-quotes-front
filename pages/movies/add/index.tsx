import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import Movies from "..";
import useRequireAuth from "@/hooks/useRequireAuth";
import Loader from "@/components/Loader";

const AddMoviePage: React.FC = () => {
  const { isPending } = useRequireAuth();

  if (isPending) return <Loader />;
  else
    return (
      <>
        <Movies />
        <CreateOrEditMovieBody />
      </>
    );
};

export default AddMoviePage;
