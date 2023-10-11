import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getBank = (state: StateSchema) => state.bank?.data;
