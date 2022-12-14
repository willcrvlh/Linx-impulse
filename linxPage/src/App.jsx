import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Requisicao from './components/Requisicao/Requisicao'
import Card from './components/Card/Card'
import Form from './components/Form/Form'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Input/>
      <Requisicao/>
      <Card/>
      <Button props="ainda mais produtos aqui"/>
      <Title text="Compartilhe a novidade"/>
      <Form/>
      <Button props="Enviar agora"/>
      <Footer/>
    </div>
  )
}

export default App
