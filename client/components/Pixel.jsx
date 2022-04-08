import React from 'react'

function Pixel (props) {
  // When the mouse is dragged over a Pixel, call mouseDragCallback giving it the index on the Pixel that needs to be changed.
  const mouseDrag = () => {
    props.mouseDragCallback(props.index)
  }

  return (
      <div 
        style={props.style} 
        onDragEnter={() => mouseDrag()} 
        draggable={true}>
      </div>
  )
}

export default Pixel
