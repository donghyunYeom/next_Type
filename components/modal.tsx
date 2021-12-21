import _Modal from 'react-modal';
import { useState, useEffect , ReactChildren, ReactChild } from 'react';


type ModalProps = {
    isOpen: boolean;
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
    setIsOpen: (open : boolean) => void,
    onClose?: () => void,
    onOpen?: () => void,
    style : object
  };


const Modal : React.FC<ModalProps> = ({ style, isOpen, setIsOpen,  children ,onClose , onOpen }) => {

    return (
        <_Modal isOpen={isOpen} onRequestClose={() => {
            setIsOpen(!isOpen)
            document.body.style.overflow = "unset";
        }} ariaHideApp={false} 
            style={style}>
                <button onClick={onClose} className="float-right">X</button>
                {children}
        </_Modal>
    )

}


export default Modal;