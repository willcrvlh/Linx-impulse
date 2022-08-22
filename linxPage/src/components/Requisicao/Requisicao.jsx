import React from 'react'
import { useState } from 'react'
import S from './Requisicao.module.css'

function Requisicao() {
    const [informacoes, setInformacoes]= useState()
    const [page, setPage] = useState(1)
    async function handleProdutos() {
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
        const json = await response.json()
        setInformacoes(json)
        console.log(json);
    }

  return (
    <div>
        <h2 className={S.titulo}>Sua seleção especial</h2>
    </div>
  )
}

export default Requisicao