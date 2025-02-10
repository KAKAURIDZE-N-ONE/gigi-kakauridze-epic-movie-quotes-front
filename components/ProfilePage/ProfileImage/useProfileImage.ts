import { useAuthentication } from "@/hooks/useAuthentication";
import useUploadProfileImage from "@/hooks/useUploadProfileImage";
import { getCsrfCookie } from "@/services/apiAuth";
import { useState } from "react";

export default function useProfileImage() {
  const { user } = useAuthentication();
  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const { mutate, isPending } = useUploadProfileImage();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  function discardUpload() {
    setPreview("");
    setFile(null);
  }

  async function handleUploadImage() {
    if (!file) return;

    await getCsrfCookie();
    mutate(file);
    setPreview("");
    setFile(null);
  }

  return {
    user,
    preview,
    handleImageChange,
    file,
    discardUpload,
    handleUploadImage,
    isPending,
  };
}
