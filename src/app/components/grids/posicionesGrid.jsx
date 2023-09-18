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

const PosicionesGrid = ({ league }) => {
  const dataPorLiga = {
    liga1: [
      { Posicion: 1, Equipo: "Equipo A", Puntos: 30, GolesAFavor: 40 },
      { Posicion: 2, Equipo: "Equipo B", Puntos: 25, GolesAFavor: 35 },
      // Datos de posiciones para Liga 1
    ],
    liga2: [
      { Posicion: 1, Equipo: "Equipo X", Puntos: 30, GolesAFavor: 45 },
      { Posicion: 2, Equipo: "Equipo Y", Puntos: 28, GolesAFavor: 40 },
      // Datos de posiciones para Liga 2
    ],
    liga3: [
      { Posicion: 1, Equipo: "Equipo P", Puntos: 32, GolesAFavor: 50 },
      { Posicion: 2, Equipo: "Equipo Q", Puntos: 30, GolesAFavor: 45 },
      // Datos de posiciones para Liga 3
    ],
  };

  const leagueData = dataPorLiga[league];

  return (
    <Card className="p-4">
      <CardBody>
        <h2 className="text-2xl font-semibold mb-4">Posiciones</h2>
        <Table removeWrapper aria-label="Tabla de posiciones">
          <TableHeader>
            <TableColumn>Posicion</TableColumn>
            <TableColumn>Equipo</TableColumn>
            <TableColumn>Puntos</TableColumn>
            <TableColumn>Goles a favor</TableColumn>
          </TableHeader>
          <TableBody>
            {leagueData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.Posicion}</TableCell>
                <TableCell>{item.Equipo}</TableCell>
                <TableCell>{item.Puntos}</TableCell>
                <TableCell>{item.GolesAFavor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default PosicionesGrid;
