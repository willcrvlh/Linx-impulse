import React from 'react'
import S from './Title.module.css'
function Title({text}) {
  return (
    <div>
        <h2 className={S.titulo}>{text}</h2>
    </div>
  )
}

export default Title