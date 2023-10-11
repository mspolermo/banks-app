import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const loadingExchangeRates = (state: StateSchema) => state.exchangeRates?.isLoading;
