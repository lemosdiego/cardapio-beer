// src/app/Components/Menu/Menu.js
import { useState } from "react";
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
            Petiscos
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
        <div className={Styles.container_input}>
          <input placeholder="Busque por item" />
        </div>
        <div className={Styles.icons}>
          <div className={Styles.icon}></div>
          <div className={Styles.icon}></div>
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
