import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import S from './Requisicao.module.css'

function Requisicao() {
    const [informacoes, setInformacoes]= useState()
    const [page, setPage] = useState(1)
    async function handleProdutos() {
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
        const json = await response.json()
        setInformacoes([...informacoes,...json.products])
        console.log(informacoes);
    }
    const mostraProdutos = ()=>{
      setPage(page +1)
    }
    useEffect(()=>{
      handleProdutos()
    },[page])
  return (
    <div>
        <h2 className={S.titulo}>Sua seleção especial</h2>
        {/* <button onClick={mandaProdutos}>um btn qqs</button> */}
    </div>
  )
}

export default Requisicao