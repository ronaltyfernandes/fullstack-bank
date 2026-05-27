export function calculateVariacao(vSaldo, vAnterior, casasDecimais = 1) {
    if (vAnterior === 0) {
      return { variacao: "N/A", percentRounded: 0 };
    }
    const percent = ((vSaldo - vAnterior) / vAnterior) * 100;
    // arredonda para uma casa decimal
    const percentRounded = Math.round(percent * 10) / 10;
    const sign = percentRounded > 0 ? "+" : "";
    return { variacao: `${sign}${percentRounded.toFixed(casasDecimais)}%`, percentRounded };
  }