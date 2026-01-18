import { LineChart } from "@mui/x-charts/LineChart";

export default function GraficoLinha({dados}) {
  return (
    <div className="w-full h-[348px] sm:pl-0" style={{ color: "var(--color-secondary)" }}>
      <LineChart
        sx={{
          //label 
          '& svg text': {
            fill: 'var(--color-text) !important',
          },
          //label das linhas
          '& .MuiChartsAxis-tickLabel, & .MuiChartsAxis-label': {
            fill: 'var(--color-text) !important',
          },
          '& .MuiChartsAxis-line, & .MuiChartsGrid-line, & .MuiChartsGrid-horizontalLine, & .MuiChartsGrid-verticalLine': {
            stroke: 'var(--color-border) !important',
          },
          // series lines and marks
          '& svg path': {
            stroke: 'var(--color-primary) !important',
          },
          // legend (HTML) fallback
          '& .MuiChartsLegend-root, & .MuiChartsLegend-root *': {
            color: 'var(--color-text) !important',
          },
        }}  
        slotProps={{
          xAxis: {
            labelStyle: { fill: 'var(--color-text) !important' },
            tickLabelStyle: { fill: 'var(--color-text) !important' }
          },
          yAxis: {
            width: 36,
            labelStyle: { fill: 'var(--color-text) !important' },
            tickLabelStyle: { fill: 'var(--color-text) !important' }
          }
        }}
        margin={{ left: 0, right: 12 }}
        xAxis={[
          {
            scaleType: "point",
            data: dados.map(d => d.tempo),
          },
        ]}
        series={[
          {
            data: dados.map(d => d.valor),
            color: "var(--color-primary)",
            showMark: true,
          },
        ]}
        height={340}
      />
    </div>
  );
}
