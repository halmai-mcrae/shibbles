import React, {useState, useEffect} from 'react'
import Pixel from './Pixel'


function Canvas () {

      const array = Array.from({
          length: 1000
        }, i => <Pixel key={i}/> )
        return [array]
      
}

export default Canvas
