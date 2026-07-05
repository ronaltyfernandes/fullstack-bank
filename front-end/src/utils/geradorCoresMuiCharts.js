const DEFAULT_PALETTE = [
  "#042C7F", // Azul principal
  "#EC4899", // Rosa
  "#10B981", // Verde
  "#06B6D4", // Ciano
  "#F59E0B", // Amarelo
  "#F97316", // Laranja
  "#2563EB", // Azul
  "#EF4444", // Vermelho
  "#8B5CF6", // Roxo
  "#3B82F6", // Azul claro
];

export default function geradorCoresMuiCharts(data = [], options = {}) {
  const n = data.length;

  const {
    palette = DEFAULT_PALETTE,
  } = options;

  const generateHsl = (count) =>
    Array.from(
      { length: count },
      (_, i) => `hsl(${(i * 360) / count} 70% 50%)`
    );

  let colors = [...palette];

  if (colors.length < n) {
    colors = colors.concat(generateHsl(n - colors.length));
  }

  const dataWithColors = data.map((d, i) => ({
    ...d,
    color: d.color ?? colors[i],
  }));

  const legendSx = dataWithColors.reduce((acc, d, i) => {
    acc[`& [data-series="${i}"] .MuiChartsLegend-label`] = {
      color: d.color,
    };
    acc[`& [data-series="${i}"] .MuiChartsLegend-mark`] = {
      fill: d.color,
    };
    return acc;
  }, {});

  return { dataWithColors, legendSx, colors };
}