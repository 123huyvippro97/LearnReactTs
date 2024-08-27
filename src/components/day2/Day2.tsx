import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Day2 = () => {
  // const [count, setCount] = useState(0)
  let count= 10;
  const handleCount = () => {
      count++;
      console.log(count)
  };

  return (
    <>
        <p className="Demo">demo</p>
        <p>Curent Number {count}</p>
        <button
        onClick={handleCount}
            className="border px-2 rounded active:bg-gray-100">add number</button>
    </>
  )
}

export default Day2
