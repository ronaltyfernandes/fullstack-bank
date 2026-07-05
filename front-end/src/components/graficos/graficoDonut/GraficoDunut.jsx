import {
  PieChart,
  pieArcLabelClasses,
  pieArcClasses,
} from "@mui/x-charts";
import geradorCoresMuiCharts from "../../../utils/geradorCoresMuiCharts";

function GraficoDunut({
  data = [],
  innerRadius = 40,
  outerRadius = 100,
  width = "100%",
  height = 260,
  arcLabel = "value",
  className = "w-full",
}) {
  const { dataWithColors } = geradorCoresMuiCharts(data);

  const total = dataWithColors.reduce(
    (acc, item) => acc + Number(item.value),
    0
  );

  const chartSizeProps = { height };
  if (typeof width === "number") chartSizeProps.width = width;

  return (
    <div
      className={`${className} flex flex-col lg:flex-row items-center gap-6`}
    >
      <PieChart
        series={[
          {
            innerRadius,
            outerRadius,
            data: dataWithColors,
            arcLabel,
            paddingAngle: 2,
            cornerRadius: 5,
            startAngle: -45,
          },
        ]}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "#fff",
            fontWeight: 600,
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          },
          [`& .${pieArcClasses.root}`]: {
            stroke: "none",
          },
        }}
        {...chartSizeProps}
      />

      <div className="flex-1 w-full space-y-3">
        {dataWithColors.map((item) => {
          const percentage =
            total === 0 ? 0 : (item.value / total) * 100;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between p-1"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{ background: item.color }}
                />

                <div>
                  <p className="font-semibold text-text">
                    {item.label}
                  </p>

                  <p className="text-sm text-slate-400">
                    R$ {item.value.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-text">
                  {percentage.toFixed(1)}%
                </p>

                <p className="text-xs text-slate-400">
                  do total
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GraficoDunut;