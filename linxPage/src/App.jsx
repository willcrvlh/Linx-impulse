import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Input/>
    </div>
  )
}

export default App
