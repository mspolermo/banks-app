import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const loadingBank = (state: StateSchema) => state.bank?.isLoading;
