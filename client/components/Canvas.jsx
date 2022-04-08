import React from 'react'
import Pixel from './Pixel'


function Canvas (props) {
  // Turn the stylesArray into an array of Pixel components to display passing in the mouseDragCallback function so each Pixel component can change it's style
  const pixelArray = props.stylesArray.map((pixelStyle, index) => {
    return (
      <Pixel
        key={index}
        index={index}
        style={pixelStyle}
        mouseDragCallback={() => props.mouseDragCallback(index)}/>
    )
  })
  return (
    <>
      {pixelArray}
    </>
  )
        
}

export default Canvas
