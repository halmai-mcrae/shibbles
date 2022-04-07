import React from 'react'
import Home from './Home'
import Canvas from './Canvas'

function App() {
  return (
    <>
      <div className="title">
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <Home/>
      <div className='canvas'>
        <Canvas/>
      </div>
      <div className="main">
      </div>
    </>
  )

}

export default App
