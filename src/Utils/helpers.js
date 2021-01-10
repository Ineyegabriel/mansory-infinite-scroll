import React, { useCallback, useState } from "react";
import { useGetImages } from "./request";

export const useGetImageHelper = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [initialized, setInitialized] = useState(false);

  const getAllImages = useCallback(
    (pageNumber = 1) => {
      const FetchingImages = async () => {
        try {
          const response = await useGetImages(page);
          let imgs = images.concat(response.data.hits);
          setImages(imgs);
          setTotal(response.data.total);
          pageNumber++;
          setPage(pageNumber);
        } 
        catch (error) {
          console.log(error);
        }
      };
      FetchingImages();
    },
    [images, page]
  );

  React.useEffect(() => {
    if (!initialized) {
      getAllImages();
      setInitialized(true);
    }
  }, [initialized, getAllImages]);

  return {
    images,
    total,
    getAllImages
  };
};
