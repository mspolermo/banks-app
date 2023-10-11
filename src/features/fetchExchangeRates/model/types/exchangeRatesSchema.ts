import { ExchangeRate } from "@/entities/ExchangeRates";

export interface ExchangeRatesSchema {
    data?: ExchangeRate [];
    isLoading: boolean;
    error?: string;
}