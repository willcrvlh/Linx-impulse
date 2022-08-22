import React from 'react'
import S from './Card.module.css'

function Card({image, name, description, value, promo, parcela}) {
  return (
    <div>
        <picture className={S.img}>
          <img src={image} alt="imagem do produto" />
        </picture>
        <h3 className={S.nomeProduto}>{name}</h3>
        <p className={S.descricao}>{description}</p>
        <p className={S.valor}>{value}</p>
        <p className={S.promo}>{promo}</p>
        <p className={S.parcelas}>{parcela}</p>
    </div>
  )
}

export default Card