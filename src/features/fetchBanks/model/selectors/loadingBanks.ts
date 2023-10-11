import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const loadingBanks = (state: StateSchema) => state.banks?.isLoading;
