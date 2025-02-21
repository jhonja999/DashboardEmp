"use client";

import { Percent } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { dataTotalSuscribers } from "./TotalSuscribers.data";
import { CustomIcon } from "@/components/CustomIcon/CustomIcon";

/**
 * Componente TotalSuscribers
 *
 * Muestra un resumen de suscriptores mediante un gráfico de barras responsivo.
 * Se incluye una leyenda personalizada que muestra el nombre, el valor y el color
 * (definido en cada objeto de datos) para cada categoría.
 */
export function TotalSuscribers() {
  // Función para renderizar la leyenda personalizada
  const renderCustomLegend = () => (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {dataTotalSuscribers.map((item) => (
        <div key={item.name} className="flex items-center gap-1 text-sm">
          {/* Cuadro de color */}
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: item.fill }}
          />
          <span className="text-gray-700">
            {item.name}: {item.value}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-background shadow-sm rounded-lg p-5 w-full max-w-md mx-auto md:max-w-lg hover:shadow-lg transition-all duration-300">
      {/* Encabezado */}
      <div className="flex items-center gap-2 mb-4">
        <CustomIcon icon={Percent} />
        <span className="text-xl font-bold">Total Subscribers</span>
      </div>

      {/* Contenedor del gráfico */}
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dataTotalSuscribers}
            margin={{ top: 20, right: 20, left: 10, bottom: 10 }}
          >
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
              cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
            />
            {/* Leyenda personalizada en la parte superior */}
            <Legend
            
              content={renderCustomLegend}
              verticalAlign="bottom"
              height={60}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {dataTotalSuscribers.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
