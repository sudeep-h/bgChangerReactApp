import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <h1 className="text-2xl mb-4 text-center">
        <em>Click on button to change the bg color</em>
      </h1>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className="fixed bottom-12 w-full flex justify-center">
          <div className="flex space-x-4 bg-black p-4 rounded-md shadow-md">
        <button
              className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200"
              onClick={() => setColor('white')}
          >White
        </button>
        <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={() => setColor('green')}
            >Green
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setColor('blue')}
            >Blue
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => setColor('red')}
            >Red
            </button>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              onClick={() => setColor('yellow')}
            >Yellow
            </button>
            <button
              className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
              onClick={() => setColor('pink')}
            >Pink
            </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App