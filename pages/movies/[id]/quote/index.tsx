import { useAddQuotePage } from "@/components/AddQuotePage";

import React from "react";

const AddQuotePage: React.FC = () => {
  const { movieId } = useAddQuotePage();

  return <div>{movieId}</div>;
};

export default AddQuotePage;
