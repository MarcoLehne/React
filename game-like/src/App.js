import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, updateState} from 'react';

function App() {

  const [myGrid, setMyGrid] = useState(Array.apply(null, Array(36)).map(function (x, i) { return i; }))
  const [myGridColors, setMyGridColors] = useState(Array(36).fill("white").fill("black",0,1))  
  const [currentRow, setCurrentRow] = useState(0)
  const [currentCol, setCurrentCol] = useState(0)  
  
  function GridItems(){
    return(
      myGrid.map(cell => {return <p key={cell} style={{backgroundColor:myGridColors.at(cell)}}></p>})
    );
  }

  function handleKeyDown(e){

    switch(e.key){
      // case 'ArrowUp':
      //   if(curInx === 34) setMyGridColors(Array(36).fill("white").fill("black", (curInx - 6) % 36))
      //   else setMyGridColors(Array(36).fill("white").fill("black", (curInx -6) % 36, (curInx -7) % 36))
      //   break;
      // case 'ArrowUp':
      //   console.log("Up")
      //   break;
      case 'ArrowRight':
        setMyGridColors(Array(36).fill("white").fill("black", currentRow * 6 + (currentCol + 1 % 6), (currentCol + 1 % 6) === 35 ? undefined : currentRow * 6 + (currentCol + 1 % 6) + 1));
        setCurrentCol(prevCol => prevCol + 1 % 6);
        break;
      case 'ArrowLeft':
        setMyGridColors(Array(36).fill("white").fill("black", currentRow * 6 + currentCol, currentRow * 6 + currentCol + 1))
        setCurrentCol(prevCol => (prevCol - 1) < 0? 5 : prevCol - 1)
        break;
      default:
        console.log('default')
    }
  }

  return (
    <div className="App">
      <div className="MyGrid" tabIndex={0} onKeyDown={handleKeyDown}>
        <GridItems />
      </div>
    </div>
  );
}

export default App;
