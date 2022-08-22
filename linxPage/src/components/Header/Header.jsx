import React from "react";
import S from "./Header.module.css";

function Header() {
  return (
    <div className={S.color}>
      <h2 className={S.tema}>Uma seleção de produtos</h2>
      <h2 className={S.frase}>especial para você</h2>
      <p className={S.explicacao}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      
      <section className={S.section}>

      <button className={S.btn}>Conheça a Linx</button>
      <button className={S.btn}>Ajude o Algoritmo</button>
      <button className={S.btn}>Seus Produtos</button>
      <button className={S.btn}>Compartilhe</button>
      </section>
    </div>
  );
}

export default Header;