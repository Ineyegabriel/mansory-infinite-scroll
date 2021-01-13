import React, { useState} from "react";
import { useLocation } from "react-router";
import Image from "react-bootstrap/Image";
import Styles from "./Preview.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "../Components/ModalComponent";
import { ReactComponent as Logo } from "../info.svg";

const PreviewPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

  const {
    downloads,
    imageHeight,
    imageWidth,
    largeImageURL,
    tags,
    user,
    views
  } = location.state;
 
  return (
    <div className={Styles.preview}>
      <div className={Styles.imageContainer}>
        <Image src={largeImageURL} fluid />
      </div>
      <div className={Styles.infoWrapper}>
        <Button
          variant="outline-dark"
          onClick={handleShow}
          className={Styles.btnInfo}
        >
          <Logo className={Styles.infoLogo} />
          <span>Info</span>
        </Button>
        <Modal display={show} closing={handleClose} username={user}>
          <ul className={Styles.infoListWrapper}>
            <li className={Styles.infoRow}>
              <ul className={Styles.infoList}>
                <li className={Styles.listItem}>
                  <span className={Styles.infoLabel}>Views</span>
                  <span className={Styles.infoNumbers}>{views}</span>
                </li>
                <li className={Styles.listItem}>
                  <span className={Styles.infoLabel}>Downloads</span>
                  <span className={Styles.infoNumbers}>{downloads}</span>
                </li>
                <li className={Styles.listItem}>
                  <span className={Styles.infoLabel}>Size</span>
                  <span className={Styles.infoNumbers}>
                    {imageWidth} X {imageHeight}
                  </span>
                </li>
              </ul>
            </li>
            <li className={Styles.infoRow}>
              <div>
                <div>Tags</div>
                <div className="d-flex flex-wrap">
                  <span className={Styles.tagName}>{tags}</span>
                </div>
              </div>
            </li>
          </ul>
        </Modal>
      </div>
    </div>
  );
};

export default PreviewPage;
