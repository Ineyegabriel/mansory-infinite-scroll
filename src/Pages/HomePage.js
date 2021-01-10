import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import { masonryOptions } from "../Utils/exports";
import { useGetImageHelper } from "../Utils/helpers";

const HomePage = () => {
  const { images, total, getAllImages } = useGetImageHelper();
  return (
    <div className="page">
      <h1 className="text-center">Home</h1>
      <InfiniteScroll
        pageStart={1}
        loadMore={getAllImages}
        hasMore={total > images.length}
      >
        <Masonry
          className={"grid"}
          elementType={"div"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {images.map(({ previewURL }, index) => {
            return (
              <div key={index} style={{ marginBottom: 10 }}>
                <img src={previewURL} style={{ width: 300 }} alt="" />
              </div>
            );
          })}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
}
export default HomePage;
