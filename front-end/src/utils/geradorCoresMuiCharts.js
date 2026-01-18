// Utility: generate colors and legend sx rules for MUI X Pie/Charts
export function geradorCoresMuiCharts(data = [], options = {}) {
  const n = data.length;
  const { palette = null } = options;

  const generateHsl = (count) =>
    Array.from({ length: count }, (_, i) => `hsl(${(i * 360) / count} 70% 50%)`);

  let colors = [];
  if (palette && palette.length > 0) {
    colors = palette.slice(0, n);
    if (colors.length < n) {
      const extra = generateHsl(n).slice(0, n - colors.length);
      colors = colors.concat(extra);
    }
  } else {
    colors = generateHsl(n);
  }

  const dataWithColors = data.map((d, i) => ({ ...d, color: d.color ?? colors[i] }));

  const legendSx = dataWithColors.reduce((acc, d, i) => {
    acc[`& [data-series="${i}"] .MuiChartsLegend-label`] = { color: d.color };
    acc[`& [data-series="${i}"] .MuiChartsLegend-mark`] = { fill: d.color };
    return acc;
  }, {});

  return { dataWithColors, legendSx, colors };
}

export default geradorCoresMuiCharts;