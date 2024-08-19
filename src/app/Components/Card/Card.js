import React from "react";
import Styles from "./StylesCard.module.css";

const Cards = ({ nome, imagem, detalhes }) => {
  return (
    <div className={Styles.card}>
      <img src={imagem} alt={nome} className={Styles.image} />
      <h3 className={Styles.name}>{nome}</h3>
      <div className={Styles.pricing}>
        {detalhes.map((detalhe, index) => (
          <p key={index}>
            {detalhe.volume} - R${detalhe.preco}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cards;
