import React from "react";
import S from "./Input.module.css";
function Input() {
  return (
    <div className={S.divContainer}>
      <div className={S.formGroup}>
        <h1 className={S.titulo}>Ajude o Algoritmo a ser mais certeiro</h1>
        <p className={S.texto}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quos
          in deserunt maiores pariatur, quae harum perspiciatis doloremque, quod
          eligendi libero reiciendis ea vero iste distinctio natus, nesciunt sed
          optio. 
          </p>
          <p className={S.texto}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda accusantium, a pariatur velit omnis sit. Ex in debitis
          dolorum illum, est excepturi, a quos consectetur quisquam, praesentium
          soluta enim labore.
        </p>
      </div>

      <aside className="input-container">
        <label className={S.label}>Seu Nome:</label>
        <input type="text" className={S.label} placeholder="Digite seu nome" />
        <label className={S.label}>E-mail</label>
        <input
          type="email"
          className={S.label}
          placeholder="Digite um e-mail válido"
        />
        <label className={S.label}>CPF</label>
        <input type="text" className={S.label} placeholder="Somente números" />

        <input type="radio" />
        <label className={S.radio}>Masculino</label>
        <input type="radio" />
        <label className={S.radio}>Feminino</label>
        <button className={S.btn}>Enviar</button>
      </aside>
    </div>
  );
}

export default Input;
