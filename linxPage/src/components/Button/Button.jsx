import React from 'react'
import S from'./Button.module.css'

function Button({props}) {
  return (
    <div>
        <button className={S.btn}>{props}</button>
    </div>
  )
}

export default Button