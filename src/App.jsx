import { useState } from 'react'
import hero from './assets/hero.png'
import Header from './Components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
    </div>
  )
}

export default App
