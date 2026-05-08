import "./styles/style.css";

import { fetchStocks } from "./api/stockApi";
import { createStockSelector } from "./ui/dom";
import { renderChart } from "./charts/stockChart";
import type { Stock } from "./models/stock";
import { filterStockByPeriod, type Period } from "./utils/filter";

const app = document.querySelector<HTMLDivElement>("#app");

/**
 * Affiche un écran de chargement simple
 */
function showLoading() {
  if (!app) return;

  app.innerHTML = `
    <h1>MyBourse</h1>
    <p>Chargement des données...</p>
  `;
}

/**
 * Affiche une erreur utilisateur lisible
 */
function showError(message: string) {
  if (!app) return;

  app.innerHTML = `
    <h1>MyBourse</h1>
    <p style="color:red; font-weight:bold;">${message}</p>
  `;
}

async function init(): Promise<void> {
  if (!app) return;

  try {
    showLoading();

    // Récupération API
    const stocks = await fetchStocks();

    if (!stocks || stocks.length < 2) {
      throw new Error("Données insuffisantes");
    }

    app.innerHTML = `<h1>MyBourse</h1>`;

    // Sélecteurs actions
    const select1 = createStockSelector(stocks);
    const select2 = createStockSelector(stocks);

    // Sélecteur période
    const periodSelect = document.createElement("select");
    periodSelect.innerHTML = `
      <option value="7d">7 jours</option>
      <option value="30d" selected>1 mois</option>
      <option value="1y">1 an</option>
    `;

    // État global
    let selectedStocks: Stock[] = [stocks[0], stocks[1]];
    let selectedPeriod: Period = "30d";

    const canvas = document.createElement("canvas");

    app.appendChild(select1);
    app.appendChild(select2);
    app.appendChild(periodSelect);
    app.appendChild(canvas);

    /**
     * Met à jour le graphique selon sélection + période
     */
    function updateChart() {
      const filtered = selectedStocks.map((stock) =>
        filterStockByPeriod(stock, selectedPeriod)
      );

      renderChart(canvas, filtered);
    }

    updateChart();

    // Changement action 1
    select1.addEventListener("change", (e) => {
      const value = (e.target as HTMLSelectElement).value;
      const stock = stocks.find((s) => s.symbol === value);
      if (!stock) return;

      selectedStocks[0] = stock;
      updateChart();
    });

    // Changement action 2
    select2.addEventListener("change", (e) => {
      const value = (e.target as HTMLSelectElement).value;
      const stock = stocks.find((s) => s.symbol === value);
      if (!stock) return;

      selectedStocks[1] = stock;
      updateChart();
    });

    // Changement période
    periodSelect.addEventListener("change", (e) => {
      selectedPeriod = (e.target as HTMLSelectElement).value as Period;
      updateChart();
    });

  } catch (error) {
    console.error(error);
    showError("Impossible de charger les données");
  }
}

init();