import { useState } from "react";
import {Ingresso} from "../Components/Ingresso";

const sessions = [
  { id: 1, time: "14:00" },
  { id: 2, time: "16:30" },
  { id: 3, time: "19:00" },
  { id: 4, time: "21:30" },
];

const seatMap = Array.from({ length: 5 }, (_, row) =>
  Array.from({ length: 8 }, (_, col) => ({
    id: `${row}-${col}`,
    row,
    col,
    occupied: Math.random() < 0.2, // 20% dos assentos ocupados
  }))
);

export default function TelaCompraIngressos() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const precoIngresso = 20;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Escolha sua sessão</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sessions.map((s) => (
          <Button
            key={s.id}
            variant={selectedSession === s.id ? "default" : "outline"}
            onClick={() => {
              setSelectedSession(s.id);
              setSelectedSeats([]);
            }}
          >
            {s.time}
          </Button>
        ))}
      </div>

      {selectedSession && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Selecione seus assentos</h2>
          <div className="grid gap-2">
            {seatMap.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2 justify-center">
                {row.map((seat) => (
                  <Button
                    key={seat.id}
                    disabled={seat.occupied}
                    onClick={() => toggleSeat(seat.id)}
                    className={`w-10 h-10 p-0 rounded-full text-xs
                      ${seat.occupied ? "bg-gray-400 cursor-not-allowed" : ""}
                      ${selectedSeats.includes(seat.id) ? "bg-green-500 text-white" : ""}`}
                  >
                    {seat.row + 1}-{seat.col + 1}
                  </Button>
                ))}
              </div>
            ))}
          </div>

          <Card className="mt-6">
            <CardContent className="p-4 flex flex-col gap-2">
              <p>Assentos selecionados: {selectedSeats.join(", ") || "Nenhum"}</p>
              <p>Total: R$ {selectedSeats.length * precoIngresso}</p>
              <Button disabled={selectedSeats.length === 0}>Confirmar Compra</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
