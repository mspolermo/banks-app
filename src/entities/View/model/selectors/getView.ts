import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getView = (state: StateSchema) => state.view?.view;
