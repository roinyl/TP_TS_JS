import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
} from "chart.js";

import type { Stock } from "../models/stock";

// Enregistrement des composants Chart.js nécessaires
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

let chartInstance: Chart | null = null;

/**
 * Affiche un graphique avec 1 ou plusieurs actions
 */
export function renderChart(canvas: HTMLCanvasElement, stocks: Stock[]): void {

  // Détruit ancien graphique pour éviter superposition
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Labels basés sur les dates (supposées identiques entre stocks filtrés)
  const labels = stocks[0].history.map((item) => item.date);

  // Couleurs pour différencier les actions
  const colors = ["#3b82f6", "#ef4444"];

  // Création des datasets (une courbe par action)
  const datasets = stocks.map((stock, index) => ({
    label: stock.name,
    data: stock.history.map((item) => item.price),
    borderColor: colors[index % colors.length],
    backgroundColor: "transparent",
    tension: 0.3, // courbe plus fluide
    pointRadius: 2 // points plus discrets
  }));

  chartInstance = new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets
    },
    options: {
      responsive: true
    }
  });
}