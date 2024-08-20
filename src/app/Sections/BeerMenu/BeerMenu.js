import Cards from "@/app/Components/Card/Card";
import Styles from "./StylesBeerMenu.module.css";
import { productBeer } from "@/app/data/Beer";

const BeerMenu = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.title}>
        <h2>Confira as Cervejas dos Mestres</h2>
      </div>
      <div className={Styles.containerCards}>
        {productBeer.map((beer) => (
          <Cards
            key={beer.id}
            nome={beer.nome}
            imagem={beer.imagem}
            detalhes={[
              { volume: beer.volume1, preco: beer.preco1 },
              { volume: beer.volume2, preco: beer.preco2 },
            ]}
          />
        ))}
      </div>
    </section>
  );
};

export default BeerMenu;
