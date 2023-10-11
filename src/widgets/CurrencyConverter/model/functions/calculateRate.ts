import { ExchangeRate } from "@/entities/ExchangeRates";

export const calculateRate = (
    type: 'rate' | 'result',
    exchangeRates: ExchangeRate [],
    value1: string,
    value2: string,
    inputValue: string = '',
) => {

    const amount = parseFloat(inputValue);
    const rate1 = exchangeRates?.find((rate) => rate.currency === value1);
    const rate2 = exchangeRates?.find((rate) => rate.currency === value2);

    let exchangeRate = 1.00;
    let convertedAmount = 0.00;

    if (rate1 && rate2) {
        exchangeRate = Number((rate2!.rate / rate1!.rate).toFixed(2)); // Вычисляем обменный курс
        convertedAmount = amount * exchangeRate; // Вычисляем результат
    }

    switch (type) {
        case 'rate':
            return exchangeRate;
        case 'result':
            return Number(convertedAmount.toFixed(2));
        default:
            return 0;
    }
};
