import React from 'react'
import S from'./Button.module.css'
import Requisicao from '../Requisicao/Requisicao'

function Button({props}) {
  return (
    <div className='divPai'>
        <button className={S.btn} onClick={Requisicao}>Ainda mais produtos aqui</button>
    </div>
  )
}

export default Button