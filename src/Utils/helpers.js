import React, { useCallback, useState } from "react";
import { useGetImages } from "./request";

export const useGetImageHelper = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(0);
  
  const getAllImages = useCallback(
    (pageNumber = 1) => {
      const FetchingImages = async (done) => {
        try {
          const response = await useGetImages(page); 
          const {total,hits,status} = response;
          setStatus(status);
          let imgs = images.concat(hits);
          setImages(imgs);
          setTotal(total);
          pageNumber++;
          setPage(pageNumber);
          done()
        } 
        catch (error) {
          setError(error);
        }
      }
      FetchingImages();
    },
    [images, page]
  );

  React.useEffect(() => {
    if (!initialized){
      getAllImages();
      setInitialized(true);
    } 
  }, [initialized, getAllImages]);

  return {
    images,
    setImages,
    total,
    error,
    status,
    getAllImages
  };
};
