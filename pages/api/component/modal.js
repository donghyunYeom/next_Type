import React from 'react';
//import Modal from 'react-modal';



const Modal = ({current, onClose}) => {
    const {imagePath, name, nameKo, description, discord} = current
    return (
        <div className="modal">
            <div className="bg" onClick={onClose}>
                <div className="popup">
                    <div>
                        <img src={imagePath} alt={name}/>
                    </div>
                    <h2> {name} • {nameKo}</h2>
                    <div>{description}</div>
                    <span onClick={onClose}>닫기</span>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;



// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//       background: 'rgba(255, 255, 255)',
//       width: '300px',
//       height: '300px',
//       color: 'black',
//     },
//     overlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.6)',
  
//     }
//   };

  
{/* <Modal key={homema.idx} id={homema.idx} isOpen={showModal} onRequestClose={() => setShowModal(false)} ariaHideApp={false} style={customStyles} >
    <div className="text-center">
    <div className="item">
    <div className="item">
        <img className="w-48 rounded-full" src={homema.imagePath} alt="test" />
        </div>
        <div className="item">
        {homema.name} • {homema.nameKo}
        </div>
        <div className="item">
        {homema.description}
        </div>
    </div>
    </div>
    
    <button onClick={() => setShowModal(false)}>close</button>
</Modal> */}