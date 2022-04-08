import React, { useState } from 'react'
import Canvas from './Canvas'
import Home from './Home'

function App() {
  // Starting Styles 
  const startingStyles = Array.from({length: 1000}, () => {
    return {width: '20px', backgroundColor: 'white'}
  })

  const [stylesArray, setStylesArray] = useState(startingStyles)

  function resetButtonHandler() {
    // Resets the styles in state back to {width: '20px', backgroundColor: 'white'}
    setStylesArray(startingStyles)
  }

  function mouseDragCallback(index) {
    // Create a copy of the current stylesArray
    const newStylesArray = [...stylesArray]
    // Change the Pixel getting dragged to {width: '20px', backgroundColor: 'black'}
    newStylesArray[index] = {width: '20px', backgroundColor: 'black'}
    // Save the newStylesArray into state, re-rendering the page
    setStylesArray(newStylesArray)
  }

  return (
    <>
      <div className="title">
      </div>
      <Home resetButtonClick={resetButtonHandler}/>
      <div className='canvas'>
        {/* Render the Canvas component giving it the stylesArray to be rendered as well as the mouseDragCallback function to change the Pixels' styles */}
        <Canvas stylesArray={stylesArray} mouseDragCallback={mouseDragCallback}/>
      </div>
      <div className="main">
      </div>
    </>
  )

}

export default App
