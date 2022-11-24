import { useRef, useState } from "react";

const useImgFilePrevHook = () => {
  const [imagePreviewSrc, setImagePreviewSrc] = useState();
  const imageRef = useRef();

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImagePreviewSrc(reader.result);
  };

  const handleOnChangeFileInput = (event) => {
    const file = event.target.files[0];
    previewImage(file);
  };

  return { imageRef, imagePreviewSrc, handleOnChangeFileInput };
};

export default useImgFilePrevHook;
