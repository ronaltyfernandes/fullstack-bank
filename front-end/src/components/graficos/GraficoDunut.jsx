import { PieChart, pieArcLabelClasses, pieArcClasses } from '@mui/x-charts';
import geradorCoresMuiCharts from '../../utils/geradorCoresMuiCharts';

function GraficoDunut({ data = [], innerRadius = 40, outerRadius = 100, width = '100%', height = 200, arcLabel = 'value', className = 'text-white flex items-center md:px-8 px-2' }) {
  const { dataWithColors, legendSx } = geradorCoresMuiCharts(data);

  // only pass numeric width to avoid forcing px width in responsive layouts
  const chartSizeProps = { height };
  if (typeof width === 'number') chartSizeProps.width = width;

  return (
    <div className={`${className} w-full overflow-x-auto`}>
      <PieChart
        className='text-white'
        series={[{
          innerRadius,
          outerRadius,
          data: dataWithColors,
          arcLabel,
          paddingAngle: 2,
          cornerRadius: 5,
          startAngle: -45,
        }]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: { fill: 'currentColor' },
          [`& .${pieArcClasses.root}`]: { stroke: 'none', strokeWidth: 0 },
          ...legendSx,
        }}
        {...chartSizeProps}
      />
    </div>
  );
}

export default GraficoDunut;
