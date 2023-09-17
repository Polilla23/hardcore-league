"use client";

import React, { useState } from "react";
import GoleadoresGrid from "../grids/goleadoresGrid";
import PosicionesGrid from "../grids/posicionesGrid";
import AsistidoresGrid from "../grids/asistidoresGred";

import Selector from "../selector/selector";
import { Card, CardBody } from "@nextui-org/react";

export const PrincipalCard = () => {
  const [selectedLeague, setselectedLeague] = useState("liga1");

  const handleOptionChange = (option) => {
    setselectedLeague(option);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4">
        {/* Renderizar el componente correspondiente según la opción seleccionada */}
        <div className="flex flex-wrap gap-4 p-4">
          <PosicionesGrid league={selectedLeague} />
          <GoleadoresGrid league={selectedLeague} />
          <AsistidoresGrid league={selectedLeague} />
        </div>
        <div className="flex justify-center">
          {/* Selector de opciones */}
          <Selector
            selectedLeague={selectedLeague}
            onLeagueChange={handleOptionChange}
          />
        </div>
      </div>
    </div>
  );
};
