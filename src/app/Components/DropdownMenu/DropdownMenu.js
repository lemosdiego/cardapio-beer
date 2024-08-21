import { useState } from "react";
import Styles from "./StylesMenu.module.css";

const DropdownMenu = ({ setCurrentSection, currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={Styles.dropdownMenu}>
      <ul className={Styles.container}>
        <li>
          <a href="#" onClick={toggleMenu}>
            Menu ▼
          </a>
          {isOpen && (
            <ul className={Styles.menu}>
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
            </ul>
          )}
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

export default DropdownMenu;
