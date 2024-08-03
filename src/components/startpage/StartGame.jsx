import React from 'react'
import styled from 'styled-components';
import "./startgame.css"
const Button = styled.button`
  background-color: black;
  color: white;
  height: 2em;
  width: 10em;
  font-size:30px;
  border-radius:3em;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s ease-out;
  border:2px solid transparent ;

  &:hover{
    background-color: #303030;
    /* background-color: #26a9d5; */
    border: 3px solid #26a9d5;
    color: black;
    background-color: white;
    transition: 0.3s ease-in;
  }
`;
function StartGame() {
  return (
    <div className='mainn'>
      <div className="maincontainer">
        <div className='mainimg'>
            <img src="images/dices1.png" alt="" />
        </div>
        <div className='maintext'>
            <h1>DICE GAME</h1>
            <Button>Play Now</Button>
        </div>
      </div>
    </div>
  )
}

export default StartGame
