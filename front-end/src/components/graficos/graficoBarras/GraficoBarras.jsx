import { BarChart } from '@mui/x-charts';

export default function GraficoBarras({
  data = [],
  height = 260,
  className = 'w-full',
  layout = 'vertical',
}) {
  const labels = data.map(
    (d, i) => d.label ?? d.mes ?? `Item ${i + 1}`
  );

  const hasDualValues = data.some((item) => item.income !== undefined || item.expense !== undefined);

  const incomeData = hasDualValues
    ? data.map((item) => item.income ?? null)
    : data.map((item) => item.value ?? null);

  const expenseData = hasDualValues
    ? data.map((item) => item.expense ?? null)
    : data.map(() => null);

  return (
    <div className={`${className}`}>
      <BarChart
        height={height}
        layout={layout}
        borderRadius={4}
        barLabel="value"
        grid={{
          vertical: true,
          horizontal: true,
        }}
        xAxis={[
          {
            scaleType: "band",
            data: labels,
            tickLabelStyle: {
              fill: "var(--color-text)",
              fontSize: 12,
            },
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: {
              fill: "var(--color-text)",
              fontSize: 12,
            },
            valueFormatter: (value) =>
              Intl.NumberFormat("pt-BR", {
                notation: "compact",
                maximumFractionDigits: 1,
              }).format(value),
          },
        ]}
        series={[
          {
            data: incomeData,
            label: "Entradas",
            color: "var(--color-primary-light)",
            valueFormatter: (v) =>
              v == null
                ? ""
                : `R$ ${Number(v).toLocaleString("pt-BR")}`,
          },
          {
            data: expenseData,
            label: "Saídas",
            color: "var(--color-error)",
            valueFormatter: (v) =>
              v == null
                ? ""
                : `R$ ${Number(v).toLocaleString("pt-BR")}`,
          },
        ]}
        slotProps={{
          legend: {
            labelStyle: {
              fill: "var(--color-text)",
              fontSize: 13,
              fontWeight: 500,
            },
            itemMarkWidth: 10,
            itemMarkHeight: 10,
          },
        }}
        sx={{
          /* Valores dentro das barras */
          "& .MuiBarLabel-root": {
            fill: "#fff",
            fontSize: 11,
            fontWeight: 700,
          },

          /* Labels externos do gráfico */
          "& svg text:not(.MuiBarLabel-root)": {
            fill: "var(--color-text) !important",
            fontFamily: "inherit",
          },

          /* Labels dos eixos */
          "& .MuiChartsAxis-tickLabel": {
            fill: "var(--color-text) !important",
            fontSize: 12,
          },

          "& .MuiChartsAxis-label": {
            fill: "var(--color-text) !important",
          },

          /* Legenda */
          "& .MuiChartsLegend-label": {
            fill: "var(--color-text) !important",
            fontWeight: 500,
          },          "& .MuiChartsLegend-root text": {
            fill: "var(--color-text) !important",
          },
          /* Linhas dos eixos */
          "& .MuiChartsAxis-line": {
            stroke: "var(--color-border)",
          },

          "& .MuiChartsAxis-tick": {
            stroke: "var(--color-border)",
          },

          /* Grade */
          "& .MuiChartsGrid-line": {
            stroke: "var(--color-border)",
            strokeDasharray: "4 5",
            opacity: 0.6,
          },

          /* Barras */
          "& .MuiBarElement-root": {
            transition: "all .25s ease",
            cursor: "pointer",
          },

          "& .MuiBarElement-root:hover": {
            opacity: 0.85,
          },
        }}
      />
    </div>
  );
}
