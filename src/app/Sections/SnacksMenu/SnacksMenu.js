import Cards from "@/app/Components/Card/Card";
import Styles from "./StylesSnacks.module.css";
// import { productSnacks } from "@/app/data/Snacks";

const SnacksMenu = () => {
  return (
    <section id="petiscos" className={Styles.container}>
      <h2>Petiscos</h2>
      {/* <div className={Styles.containerCards}>
        {productSnacks.map((snack) => (
          <Cards
            key={snack.id}
            nome={snack.nome}
            imagem={snack.imagem}
            descricao={snack.descricao}
            preco={snack.preco}
          />
        ))}
      </div> */}
    </section>
  );
};

export default SnacksMenu;
