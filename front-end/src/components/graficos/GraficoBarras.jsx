import { BarChart } from '@mui/x-charts';

/**
 * GraficoBarras
 * data: Array<{ label: string; value: number }>
 */
export default function GraficoBarras({
  data = [],
  height = 260,
  className = 'w-full',
  layout = 'vertical',
}) {
  // Normaliza os dados
  const labels = data.map(
    (d, i) => d.label ?? d.name ?? `Item ${i + 1}`
  );

  const positivos = data.map(dado => (dado.value >= 0 ? dado.value : null));
  const negativos = data.map(dado => (dado.value < 0 ? dado.value : null));

  return (
    <div className={`${className}`}>
      <BarChart
        height={height}
        layout={layout}
        grid={{ vertical: true }}
        borderRadius={4}
        xAxis={[
          {
            scaleType: 'band',
            data: labels,
            tickLabelStyle: {
              fill: 'var(--color-text)',
            },
          },
        ]}
        series={[
          {
            data: positivos,
            color: 'var(--color-success)',
            stack: 'total',
            barLabel: 'value',
            valueFormatter: (v) => (v == null ? null : v),
          },
          {
            data: negativos,
            color: 'var(--color-error)',
            stack: 'total',
            barLabel: 'value',
            valueFormatter: (v) => (v == null ? null : v),
          },
        ]}
          sx={{
          '& .MuiBarLabel-root': {
            fill: '#fff',
            fontWeight: 500,
          },
          // Grid
          '& .MuiChartsGrid-line': {
            stroke: 'var(--color-border)',
          },

          // Eixos
          '& .MuiChartsAxis-line': {
            stroke: 'var(--color-border)',
          },

          // Ticks
          '& .MuiChartsAxis-tick': {
            stroke: 'var(--color-border)',
          },

          // series lines and marks
          '& svg path': {
            stroke: 'var(--color-primary) !important',
          },

          // Labels
          '& .MuiChartsAxis-tickLabel': {
            fill: 'var(--color-text)',
          },
        }}

        margin={{ left: 0, right: 0 }}
      />
    </div>
  );
}
