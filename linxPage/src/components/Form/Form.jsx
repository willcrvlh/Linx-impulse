import React from 'react'
import S from './Form.module.css'

function Form() {
  return (
      <form className={S.form}>
        
        <div className={S.div1}>

        <label className={S.label}>Nome do Amigo</label>
        <input type="text" className={S.input} /> 
        </div>
        <div className={S.div2}>

        <label className={S.label}>Email</label>
        <input type="email"className={S.input} />
        </div>
    </form>
  )
}

export default Form