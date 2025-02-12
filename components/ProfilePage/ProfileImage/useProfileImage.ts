import { useAuthentication } from "@/hooks/useAuthentication";
import useUploadProfileImage from "@/hooks/useUploadProfileImage";
import { getCsrfCookie } from "@/services/apiAuth";
import { useEffect, useState } from "react";

export default function useProfileImage() {
  const { user, isPending: userIsPending } = useAuthentication();
  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const { mutate, isPending: imageUploadIsPending } = useUploadProfileImage();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  function clearUpload() {
    setPreview("");
    setFile(null);
  }

  useEffect(() => {
    async function uploadImage(file: File | null) {
      await getCsrfCookie();
      if (file) {
        mutate(file);
        clearUpload();
      }
    }

    if (file) uploadImage(file);
  }, [file, mutate]);

  return {
    user,
    preview,
    handleImageChange,
    file,
    imageUploadIsPending,
    userIsPending,
  };
}
