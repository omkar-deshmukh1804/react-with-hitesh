import { useState } from 'react'
// import './App.css'
function App() {

  const [color, setColor] = useState('olive');

  function changeColor(color) {
    setColor(color)
  }

  return (
  
    <div className='w-full h-screen duration-200 bg-black'
      style={{backgroundColor: color}}
    >
      <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 py-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg 
          bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none shadow-lg text-black px-4 py-1 rounded-full'
            onClick={() => changeColor('red')}
          >
            Red
          </button>

          <button className='outline-none shadow-lg text-black px-4 py-1 rounded-full'
            onClick={() => changeColor('green')}
          >
            Green
          </button>

          <button className='outline-none shadow-lg text-black px-4 py-1 rounded-full'
            onClick={() => changeColor('yellow')}
          >
            Yellow
          </button>

          <button className='outline-none shadow-lg text-black px-4 py-1 rounded-full'
          onClick={() => changeColor('blue')}
        >
          Blue
        </button>
        
        </div>
      </div>
    </div>
    
  )
}

export default App
