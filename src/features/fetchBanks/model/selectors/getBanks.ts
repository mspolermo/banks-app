import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getBanks = (state: StateSchema) => state.banks?.data;
