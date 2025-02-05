import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ children, onClose }) => {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..')
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
