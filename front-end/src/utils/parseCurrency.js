export const parseCurrency = (val) => {
  if (typeof val === "number") return val;
  if (!val) return 0;
  const str = String(val).replace(/\s/g, '').replace('R$', '').replace(/\./g, '').replace(/,/g, '.');
  const num = Number(str);
  return isNaN(num) ? 0 : num;
};
