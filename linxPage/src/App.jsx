import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Requisicao from './components/Requisicao/Requisicao'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Input/>
      <Requisicao/>
      <Card/>
      <Button/>
    </div>
  )
}

export default App
