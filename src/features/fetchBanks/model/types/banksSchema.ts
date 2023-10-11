import { Bank } from "@/entities/Bank";

export interface BanksSchema {
    data?: Bank [];
    isLoading: boolean;
    error?: string;
}
