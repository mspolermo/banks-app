import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const errorBank = (state: StateSchema) => state.bank?.error;