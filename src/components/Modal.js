import React from 'react';
const showModal = document.getElementById("modal");
const background = document.getElementById("background");
const hide = () =>{
window.location.reload();
  

}

const Modal= (props) => {
  return (
    <div>
        <div id = "background" className='modal-background'></div>
        <div id = "modal" className='modal'><p className='winText'>{props.winner} has won</p> 
        <button className='reset'  onClick={hide}> reset </button>
        </div>
        
    </div>
    
  )
}

export default Modal;