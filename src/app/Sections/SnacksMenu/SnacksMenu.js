import Cards from "@/app/Components/Card/Card";
import Styles from "./StylesSnacks.module.css";
import { productSnacks } from "@/app/data/Snaks";

const SnacksMenu = () => {
  return (
    <section id="petiscos" className={Styles.container}>
      <div className={Styles.title}>
        <h2>Snacks dos Mestres</h2>
      </div>
      <div className={Styles.containerCards}>
        {productSnacks.map((snack) => (
          <Cards
            key={snack.id}
            nome={snack.nome}
            imagem={snack.imagem}
            descricao={snack.descricao}
            preco={snack.preco}
            detalhes={snack.detalhes} // Adiciona detalhes aqui
          />
        ))}
      </div>
    </section>
  );
};

export default SnacksMenu;
