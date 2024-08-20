import React from "react";
import Styles from "./StylesCard.module.css";

const Cards = ({ nome, imagem, detalhes }) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.img}>
        <img src={imagem} alt={nome} className={Styles.image} />
      </div>
      <div className={Styles.container_description}>
        <h3 className={Styles.name}>{nome}</h3>
        <div className={Styles.pricing}>
          {detalhes.map((detalhe, index) => (
            <div key={index} className={Styles.detailRow}>
              <p>
                {detalhe.volume} - R${detalhe.preco}
              </p>
              <button className={Styles.cartButton}>
                {/* SVG do ícone de carrinho */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 1.607 1 1.5zm3.14 3L4.48 13h8.02l1.35-7H3.14zM5.5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
