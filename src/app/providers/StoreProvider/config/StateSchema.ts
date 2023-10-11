import { BankSchema } from "@/features/fetchBankById";
import { BanksSchema } from "@/features/fetchBanks";
import { ExchangeRatesSchema } from "@/features/fetchExchangeRates";

export interface StateSchema {
    banks?: BanksSchema;
    bank?: BankSchema;
    exchangeRates?: ExchangeRatesSchema;
}

export type StateSchemaKey = keyof StateSchema;
