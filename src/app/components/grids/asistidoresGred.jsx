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

const AsistidoresGrid = ({ league }) => {
  const dataPorLiga = {
    liga1: [
      { Posicion: 1, Jugador: "Jugador A", Asistencias: 10 },
      { Posicion: 2, Jugador: "Jugador B", Asistencias: 8 },
      // Datos de posiciones para Liga 1
    ],
    liga2: [
      { Posicion: 1, Jugador: "Jugador X", Asistencias: 12 },
      { Posicion: 2, Jugador: "Jugador Y", Asistencias: 10 },
      // Datos de posiciones para Liga 2
    ],
    liga3: [
      { Posicion: 1, Jugador: "Jugador P", Asistencias: 15 },
      { Posicion: 2, Jugador: "Jugador Q", Asistencias: 12 },
      // Datos de posiciones para Liga 3
    ],
  };

  const leagueData = dataPorLiga[league];

  return (
    <Card className="p-4">
      <CardBody>
        <h2 className="text-2xl font-semibold mb-4">Asistidores</h2>
        <Table removeWrapper aria-label="Tabla de asistidores">
          <TableHeader>
            <TableColumn>Posicion</TableColumn>
            <TableColumn>Jugador</TableColumn>
            <TableColumn>Asistencias</TableColumn>
          </TableHeader>
          <TableBody>
            {leagueData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.Posicion}</TableCell>
                <TableCell>{item.Jugador}</TableCell>
                <TableCell>{item.Asistencias}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default AsistidoresGrid;
