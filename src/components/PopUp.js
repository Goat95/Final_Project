import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ad from '../assets/부동산 허위 광고.jpg'


export default function PopUp(props) {

  const { onClose } = props;

  const [showPopUp, setShowPopUp] = useState(false);

  const [show, setShow] = useState(true);

  const handleClose1 = () => setShow(false);

  const handleShow = () => setShow(true);




  

  const isLoading = () => {
    if (window.onload) {
      handleShow();
    }
  }

  const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
  


  useEffect(() => {


    const todayNotShow = () => {
      if (hasVisitedBefore && hasVisitedBefore > new Date()) {
        return;
      }
      if (!hasVisitedBefore) {
        setShowPopUp(true);
        let expires = new Date();
        localStorage.setItem('hasVisitedBefore', expires);
        expires = expires.setMinutes(expires.getMinutes() + 1);
      }
    };
    const exit = () =>{localStorage.removeItem("hasVisitedBefore");}
    window.setTimeout(todayNotShow, 1000);
    window.setTimeout(exit, 60000*60);
  }, [hasVisitedBefore]);





  const removeKey = () => {
    if (hasVisitedBefore) {
     return(localStorage.removeItem("hasVisitedBefore"))
    } else {
      return;
    }
  }



  return (
    <>
      {showPopUp ? (
        <Modal show={show} onHide={handleClose1} onLoad={isLoading}>
          <Modal.Body>
            <img className="adImg" src={ad} alt="광고" />
          </Modal.Body>
          <Modal.Footer className="todays">
            <Button variant="primary"  onClick={() => {
              setShowPopUp(false)
            }}>
              1시간 동안 보지 않기
            </Button>
            <Button variant="secondary"  onClick={() => {
              onClose(false) 
              removeKey(true)
            }}>
              닫기
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
}