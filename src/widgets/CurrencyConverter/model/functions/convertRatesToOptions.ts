import { ExchangeRate } from "@/entities/ExchangeRates";

export const convertExchangeRatesToOptions = (exchangeRates: ExchangeRate[]) => {
    return exchangeRates.map((rate) => {
        return {
            value: rate.currency,
            content: rate.currency,
        };
    });
};