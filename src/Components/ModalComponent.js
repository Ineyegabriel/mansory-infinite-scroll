import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from './ModalComponent.module.scss';
import makeStyle from '../Pages/Preview.module.scss'

const ModalComponent = ({display,closing,children,username}) => {
    return (
        <Modal show={display} onHide={closing} centered>
          <Modal.Header closeButton className={Styles.header}>
            <Modal.Title>
              <span>Shot details</span>
              <div className={makeStyle.infoLabel}>Posted by {username}</div>
             </Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          
        </Modal> 
    );
  }
  
  export default ModalComponent