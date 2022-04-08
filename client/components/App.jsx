import React, { useState } from 'react'
import Home from './Home'
import Canvas from './Canvas'
import Pixel from './Pixel'

function App() {
  const baseArray = Array.from({
    length: 1020
  }, i => <Pixel key={i}/> )

  const [array, setArray] = useState(baseArray)

  function resetButtonHandler() {
    console.log('resetButtonClicked')
    setArray(Array.from({
      length: 1000
    }, i => <Pixel key={i}/> ))
  }

  // const array = Array.from({
  //   length: 1000
  // }, i => <Pixel key={i}/> )

  return (
    <>
      <div className="title">
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <Home resetButtonClick={resetButtonHandler}/>
      <div className='canvas'>
        <Canvas pixelArray={array}/>
      </div>
      <div className="main">
      </div>
    </>
  )

}

export default App
