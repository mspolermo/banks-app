import { ViewSchema } from "@/entities/View";
import { BankSchema } from "@/features/fetchBankById";
import { BanksSchema } from "@/features/fetchBanks";
import { ExchangeRatesSchema } from "@/features/fetchExchangeRates";

export interface StateSchema {
    view?: ViewSchema,
    // Асинхронные
    banks?: BanksSchema;
    bank?: BankSchema;
    exchangeRates?: ExchangeRatesSchema;
}

export type StateSchemaKey = keyof StateSchema;
