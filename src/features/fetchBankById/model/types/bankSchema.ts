import { Bank } from "@/entities/Bank";

export interface BankSchema {
    data?: Bank;
    isLoading: boolean;
    error?: string;
}
