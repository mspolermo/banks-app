import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getExchangeRates = (state: StateSchema) => state.exchangeRates?.data;
