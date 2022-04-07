import React, {useState, useEffect} from 'react'


function Home() {
  
    const animal = ['Elephant', 'Squirrel', 'Bear', 'Panda', 'Whale', 'Giraffe']
    const verb = ['eating', 'swimming', 'playing', 'dancing', 'prancing']
    const object = ['Rainbow', 'Apple', 'Guitar', 'Pencilcase', 'Headphones']

    

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const rollDice = (arr1, arr2, arr3) => {
        let number1 = randomNumber(0, 5) 
        let number2 = randomNumber(0, 5) 
        let number3 = randomNumber(0, 5) 
        setPrompt(`${animal[number1]} ${verb[number2]} with ${object[number3]}`)
    }

    const [prompt, setPrompt] = useState('')

  return (
    <div className="title">
      <h1>SHIBBLES</h1>
      <h3>A product bought to you by, The Zuckerberg Sister Wives</h3>
      <p>{prompt}</p>
      <button onClick={() => rollDice(animal, verb, object)}>Prompt me</button>
      <p></p>
    </div>
  )
}

export default Home
