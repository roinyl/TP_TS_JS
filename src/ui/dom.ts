import type { Stock } from "../models/stock";

/**
 * Crée un select HTML contenant toutes les actions disponibles
 */
export function createStockSelector(stocks: Stock[]): HTMLSelectElement {
  const select = document.createElement("select");

  // Création dynamique des options
  stocks.forEach((stock) => {
    const option = document.createElement("option");

    option.value = stock.symbol;
    option.textContent = `${stock.name} (${stock.symbol})`;

    select.appendChild(option);
  });

  return select;
}