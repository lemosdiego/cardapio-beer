"use client"; // Certifique-se de que o componente está marcado como cliente

import { useState } from "react";
import Menu from "../Components/Menu/Menu";
import BeerMenu from "../Sections/BeerMenu/BeerMenu";
import SnacksMenu from "../Sections/SnacksMenu/SnacksMenu";
import StylesIndex from "./StylesIndex.module.css";
import DropdownMenu from "../Components/DropdownMenu/DropdownMenu";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("beer");

  const renderSection = () => {
    switch (currentSection) {
      case "beer":
        return <BeerMenu />;
      case "snacks":
        return <SnacksMenu />;
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
