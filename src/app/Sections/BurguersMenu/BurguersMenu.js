import Cards from "@/app/Components/Card/Card";
import Styles from "./StylesBurguers.module.css";
import { productBurgers } from "@/app/data/Burguer";
const BurguerMenu = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.title}>
        <h2>Burguers dos Mestres</h2>
      </div>
      <div className={Styles.containerCards}>
        {productBurgers.map((burger) => (
          <Cards
            key={burger.id}
            nome={burger.nome}
            imagem={burger.imagem}
            detalhes={burger.detalhes}
          />
        ))}
      </div>
    </section>
  );
};

export default BurguerMenu;
