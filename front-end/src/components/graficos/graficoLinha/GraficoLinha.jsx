import { LineChart } from "@mui/x-charts/LineChart";

export default function GraficoLinha({ dados }) {
  return (
    <div className="w-full h-[348px] sm:pl-0">
      <LineChart
        sx={{
          // label 
          '& svg text': {
            fill: 'var(--color-text) !important',
          },
          // label das linhas
          '& .MuiChartsAxis-tickLabel, & .MuiChartsAxis-label': {
            fill: 'var(--color-text) !important',
          },
          // Linhas dos eixos e da grade pontilhada
          '& .MuiChartsAxis-line, & .MuiChartsGrid-line, & .MuiChartsGrid-horizontalLine, & .MuiChartsGrid-verticalLine': {
            stroke: 'var(--color-border) !important',
          },
          '& .MuiChartsGrid-line': {
            strokeDasharray: '1 6', // Deixa a grade pontilhada
          },
          // Aplica o gradiente SVG na área abaixo da linha
          '& .MuiAreaElement-root': {
            fill: 'url(#meuGradienteFinancas) !important',
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
        margin={{ left: 24, right: 12, top: 20, bottom: 20 }}
        xAxis={[
          {
            scaleType: "point",
            data: dados.map(d => d.tempo),
          },
        ]}
        series={[
          {
            data: dados.map(d => d.valor),
            color: "var(--color-primary-light)",
            showMark: true,
            area: true, // Habilita a área que customizamos no sx acima
          },
        ]}
        height={340}
        grid={{ vertical: true, horizontal: true }} // Ativa as linhas de fundo
      >
        {/* Injetando o Gradiente nativo SVG dentro do componente do gráfico */}
        <defs>
          <linearGradient id="meuGradienteFinancas" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary-light)" stopOpacity="0.22" />
            <stop offset="40%" stopColor="var(--color-primary-light)" stopOpacity="0.14" />
            <stop offset="70%" stopColor="var(--color-primary-light)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </LineChart>
    </div>
  );
}