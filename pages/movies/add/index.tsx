import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import Movies from "..";

const AddMoviePage: React.FC = () => {
  return (
    <>
      <Movies />
      <CreateOrEditMovieBody />
    </>
  );
};

export default AddMoviePage;
