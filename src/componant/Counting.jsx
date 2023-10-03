import React from 'react'
import Countings from './Countings.css'
import { useState } from 'react'

const Counting = () => {

    const [count, setCount] = useState(0)

    
  return (
    <>
    <div className="card">
        <h1>Counting </h1>
        <h2>{count}</h2>
        <div className="col">
            <button onClick={() => setCount(count + 1)} className="btn">+</button>
            <button onClick={() => setCount(count - 1)}  className="btn">-</button>

        </div>
    </div>

    </>
  )
}

export default Counting