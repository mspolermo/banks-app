import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const errorBanks = (state: StateSchema) => state.banks?.error;