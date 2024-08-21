import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Styles from "./StylesMenu.module.css";

const Menu = ({ setCurrentSection, currentSection }) => {
  return (
    <nav className={Styles.menu}>
      <ul className={Styles.menuList}>
        <li>
          <a
            href="#beer"
            onClick={() => setCurrentSection("beer")}
            className={currentSection === "beer" ? Styles.active : ""}
          >
            Cervejas
          </a>
        </li>
        <li>
          <a
            href="#snacks"
            onClick={() => setCurrentSection("snacks")}
            className={currentSection === "snacks" ? Styles.active : ""}
          >
            Snacks
          </a>
        </li>
        <li>
          <a
            href="#burguers"
            onClick={() => setCurrentSection("burguer")}
            className={currentSection === "burguer" ? Styles.active : ""}
          >
            Burguers
          </a>
        </li>
        <li>
          <a
            href="#pizzas"
            onClick={() => setCurrentSection("pizzas")}
            className={currentSection === "pizzas" ? Styles.active : ""}
          >
            Pizzas
          </a>
        </li>
        <li>
          <a
            href="#combos"
            onClick={() => setCurrentSection("combos")}
            className={currentSection === "combos" ? Styles.active : ""}
          >
            Combos
          </a>
        </li>
        <li className={Styles.icon}>
          <img src="/pedido.svg" alt="Icone de pedido" />
        </li>
        <li className={Styles.icon}>
          <img src="/profile.svg" alt="Icone de perfil" />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
