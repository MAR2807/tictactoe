
import '../App.css';
import { useEffect, useState } from 'react';
import { ElementRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Modal from './Modal';


function Main() {

  const [modal, setModal] = useState(false);
  const [winner, setWinner] = useState("");
  
  const cells = document.querySelectorAll(".cells");
  const boardState = Array(cells.length);
  boardState.fill(null);
 
  const[text1, setText1] = useState("");
  var player1 = "X";
  var player2 = "O";
  var currentPlayer = player1;
  

 const hello = (e) => {

   
  
    const cell = e.target;
    const cellNum = cell.dataset.index;
  
   
    
    if( cell.innerText === ""){
   
      cell.innerText=currentPlayer;
      populate(cellNum);
      swap();
      checkWin();
    }


   
 
  }
  const swap = () =>{
    if(currentPlayer==player1){
      currentPlayer=player2;
    }
   else if(currentPlayer==player2){
      currentPlayer=player1;
    }
    
  }
  const populate =(cellNum)=>{
    
   boardState[cellNum-1] = currentPlayer;
      console.log(boardState);
  }

  const checkWin =  () =>{
    
      if( boardState[0] === "X" &&  boardState[1] === "X" &&  boardState[2] === "X" ){
        setModal(true);
        setWinner(player1);
      
      }
        if( boardState[0] === "X" &&  boardState[3] === "X" &&  boardState[6] === "X" ){
        setModal(true);
        setWinner(player1);
        
      }
      if( boardState[0] === "X" &&  boardState[4] === "X" &&  boardState[8] === "X" ){
        setModal(true);
        setWinner(player1);
       
      }
      if( boardState[3] === "X" &&  boardState[4] === "X" &&  boardState[5] === "X" ){
        setModal(true);
        setWinner(player1);
        
      }
      if( boardState[6] === "X" &&  boardState[7] === "X" &&  boardState[8] === "X" ){
        setModal(true);
        setWinner(player1);
       
      }
      if( boardState[1] === "X" &&  boardState[4] === "X" &&  boardState[7] === "X" ){
        setModal(true);
        setWinner(player1);
       
      }
      if( boardState[2] === "X" &&  boardState[5] === "X" &&  boardState[8] === "X" ){
        setModal(true);
        setWinner(player1);
        
      }
      if( boardState[2] === "X" &&  boardState[4] === "X" &&  boardState[6] === "X" ){
        setModal(true);
        setWinner(player1);
        
      }

      if( boardState[0] === "O" &&  boardState[1] === "O" &&  boardState[2] === "O" ){
        setModal(true);
        setWinner(player2);
       
      }
        if( boardState[0] === "O" &&  boardState[3] === "O" &&  boardState[6] === "O" ){
        setModal(true);
        setWinner(player2);
        
      }
      if( boardState[0] === "O" &&  boardState[4] === "O" &&  boardState[8] === "O" ){
        setModal(true);
        setWinner(player2);
        
      }
      if( boardState[3] === "O" &&  boardState[4] === "O" &&  boardState[5] === "O" ){
        setModal(true);
        setWinner(player2);
        
      }
      if( boardState[6] === "O" &&  boardState[7] === "O" &&  boardState[8] === "O" ){
        setModal(true);
        setWinner(player2);
        
      }
      if( boardState[1] === "O" &&  boardState[4] === "O" &&  boardState[7] === "O" ){
        setModal(true);
        setWinner(player2);
        
      }
      if( boardState[2] === "O" &&  boardState[5] === "O" &&  boardState[8] === "O" ){
        setModal(true);
        setWinner(player2);
        
      }
      if( boardState[2] === "O" &&  boardState[4] === "O" &&  boardState[6] === "O" ){
        setModal(true);
        setWinner(player2);
        
      }
    
    
      
    
    
  }

  const reset = () =>{
    var elements = Array.from(document.querySelectorAll('.cells'));
    var result = elements.map(element=>{
       element.textContent = "";
    })

    boardState.fill("");
    setModal(false);
    currentPlayer(player1);
  
  }


  

  return (
    
    <div className="App">
      <header className="App-header">
        
       <div className='board'>
            <div className='cells' onClick={hello} data-index="1"> </div>
            <div className='cells' onClick={hello} data-index="2"> </div>
            <div className='cells' onClick={hello} data-index="3"> </div>
            <div className='cells' onClick={hello} data-index="4"> </div>
            <div className='cells' onClick={hello} data-index="5"> </div>
            <div className='cells' onClick={hello} data-index="6"> </div>
            <div className='cells' onClick={hello} data-index="7"> </div>
            <div className='cells' onClick={hello} data-index="8"> </div>
            <div className='cells' onClick={hello} data-index="9"> </div>
         
       </div>

      
       
        {modal && <Modal winner={winner} modal={modal} />}
   
      
    
      </header>
    </div>
  );
}

export default Main ;