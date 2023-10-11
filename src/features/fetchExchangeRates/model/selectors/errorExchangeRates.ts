import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const errorExchangeRates = (state: StateSchema) => state.exchangeRates?.error;
