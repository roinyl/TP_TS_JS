import type { Stock } from "../models/stock";

export type Period = "7d" | "30d" | "1y";

/**
 * Filtre l’historique d’une action selon une période donnée
 */
export function filterStockByPeriod(stock: Stock, period: Period): Stock {
  const now = new Date();

  let days = 365;

  if (period === "7d") days = 7;
  if (period === "30d") days = 30;

  const cutoff = new Date();
  cutoff.setDate(now.getDate() - days);

  return {
    ...stock,
    history: stock.history.filter((item) => {
      // Conversion date string → Date pour comparaison
      return new Date(item.date) >= cutoff;
    })
  };
}