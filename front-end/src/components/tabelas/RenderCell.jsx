function RenderCell({ value, col, row }) {
  if (!col) return String(value);
  
  const isColor = col.accessor === "color" && typeof value === "string" && (value.startsWith("#") || value.startsWith("rgb"));
  
  if (isColor) {
    return (
      <div
        className="w-6 h-6 rounded-full border border-text/20"
        style={{ backgroundColor: value }}
        title={value}
      />
    );
  }
  
  if (col.render) {
    return col.render(value, row);
  }
  
  return String(value);
}

export default RenderCell;