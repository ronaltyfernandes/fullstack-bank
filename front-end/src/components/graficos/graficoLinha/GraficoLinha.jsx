import { LineChart } from "@mui/x-charts/LineChart";

export default function GraficoLinha({
  dados,
  xKey = "tempo",
  yKey = "valor",
  color = "var(--color-primary-light)",
  area = true,
}) {
  return (
    <div className="w-full h-[348px] sm:pl-0">
      <LineChart
        sx={{
          "& svg text": {
            fill: "var(--color-text) !important",
          },

          "& .MuiChartsAxis-tickLabel, & .MuiChartsAxis-label": {
            fill: "var(--color-text) !important",
          },

          "& .MuiChartsAxis-line, & .MuiChartsGrid-line, & .MuiChartsGrid-horizontalLine, & .MuiChartsGrid-verticalLine": {
            stroke: "var(--color-border) !important",
          },

          "& .MuiChartsGrid-line": {
            strokeDasharray: "1 6",
          },

          "& .MuiAreaElement-root": {
            fill: "url(#meuGradienteFinancas) !important",
          },
        }}
        slotProps={{
          yAxis: {
            width: 50,
          },
        }}
        margin={{ left: 30, right: 20, top: 20, bottom: 20 }}
        xAxis={[
          {
            scaleType: "point",
            data: dados.map((item) => item[xKey]),
          },
        ]}
        series={[
          {
            data: dados.map((item) => item[yKey]),
            color,
            showMark: true,
            area,
          },
        ]}
        height={340}
        grid={{
          vertical: true,
          horizontal: true,
        }}
      >
        <defs>
          <linearGradient
            id="meuGradienteFinancas"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={color}
              stopOpacity="0.22"
            />
            <stop
              offset="40%"
              stopColor={color}
              stopOpacity="0.14"
            />
            <stop
              offset="70%"
              stopColor={color}
              stopOpacity="0.08"
            />
            <stop
              offset="100%"
              stopColor={color}
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </LineChart>
    </div>
  );
}