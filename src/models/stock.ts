export interface StockHistory {
  date: string;   // Date de la donnée
  price: number;  // Prix de l’action
  volume: number; // Volume échangé
}

export interface Stock {
  symbol: string;     // Symbole boursier (AAPL, TSLA...)
  name: string;       // Nom de l’entreprise
  sector: string;     // Secteur économique
  currentPrice: number; // Prix actuel
  currency: string;    // Devise
  history: StockHistory[]; // Historique des valeurs
}