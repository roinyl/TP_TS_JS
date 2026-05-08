import type { Stock } from "../models/stock";

const API_URL = "https://keligmartin.github.io/api/stocks.json";

/**
 * Récupère les données boursières depuis l'API
 * Utilisation de async/await pour gérer l’asynchrone proprement
 */
export async function fetchStocks(): Promise<Stock[]> {
  const response = await fetch(API_URL);

  // Gestion erreur HTTP
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données API");
  }

  // Conversion JSON typée
  const data: Stock[] = await response.json();

  return data;
}