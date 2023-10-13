export interface Bank {
    id: number;
    name: string;
    address: string;
    distanceFromUser: number;
}

export enum BankCardView {
    BIG = 'BIG',
    SMALL = 'SMALL',
    TILED = 'TILED',
}
