import React from "react";

import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const GoleadoresGrid = ({ league }) => {
  const dataPorLiga = {
    liga1: [
      { Posicion: 1, Jugador: "Jugador A", Goles: 15 },
      { Posicion: 2, Jugador: "Jugador B", Goles: 14 },
      // Datos de posiciones para Liga 1
    ],
    liga2: [
      { Posicion: 1, Jugador: "Jugador X", Goles: 13 },
      { Posicion: 2, Jugador: "Jugador Y", Goles: 11 },
      // Datos de posiciones para Liga 2
    ],
    liga3: [
      { Posicion: 1, Jugador: "Jugador P", Goles: 12 },
      { Posicion: 2, Jugador: "Jugador Q", Goles: 11 },
      // Datos de posiciones para Liga 3
    ],
  };

  const leagueData = dataPorLiga[league];

  return (
    <Card className="p-4">
      <CardBody>
        <h2 className="text-2xl font-semibold mb-4">Goleadores</h2>
        <Table removeWrapper aria-label="Tabla de goleadores">
          <TableHeader>
            <TableColumn>Posicion</TableColumn>
            <TableColumn>Jugador</TableColumn>
            <TableColumn>Goles</TableColumn>
          </TableHeader>
          <TableBody>
            {leagueData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.Posicion}</TableCell>
                <TableCell>{item.Jugador}</TableCell>
                <TableCell>{item.Goles}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default GoleadoresGrid;
