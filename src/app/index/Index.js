"use client"; // Certifique-se de que o componente está marcado como cliente

import { useState } from "react";
import Menu from "../Components/Menu/Menu";
import BeerMenu from "../Sections/BeerMenu/BeerMenu";
import SnacksMenu from "../Sections/SnacksMenu/SnacksMenu";
import StylesIndex from "./StylesIndex.module.css";
import DropdownMenu from "../Components/DropdownMenu/DropdownMenu";
import BurguerMenu from "../Sections/BurguersMenu/BurguersMenu";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("beer");

  const renderSection = () => {
    switch (currentSection) {
      case "beer":
        return <BeerMenu />;
      case "snacks":
        return <SnacksMenu />;
      case "burguer": // Removido o ponto-e-vírgula e adicionado o case correto
        return <BurguerMenu />;
      default:
        return <BeerMenu />;
    }
  };

  return (
    <>
      <Menu
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <DropdownMenu
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <main className={StylesIndex.main}>{renderSection()}</main>
    </>
  );
};

export default Index;
