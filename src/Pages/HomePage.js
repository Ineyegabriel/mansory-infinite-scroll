import React from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import { masonryOptions } from "../Utils/exports";
import { useGetImageHelper } from "../Utils/helpers";
import Spinner from "react-bootstrap/Spinner";

const HomePage = () => {
  const { images, total, getAllImages } = useGetImageHelper();

  const template =
    images.length > 0 ? (
      images.map(({ id, previewURL,largeImageURL,user,views,imageWidth,imageHeight,downloads,tags }, index) => {
        return (
          <Link
            to={{
              pathname: "/preview",
              state: {
                id, previewURL,largeImageURL,user,views,imageWidth,imageHeight,downloads,tags,
              }
            }}
          >
            <div key={index} style={{ marginBottom: 10 }}>
              <img src={previewURL} style={{ width: 300 }} alt="" />
            </div>
          </Link>
        );
      })
    ) : (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  return (
    <div className="page" data-test="component-wrapper">
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
          data-test="component-Infinite"
          style={{margin:"0 auto"}}
        >
          {template}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};
export default HomePage;
