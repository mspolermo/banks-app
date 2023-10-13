export enum ViewTypes {
    LIST = 'LIST',
    TILED = 'TILED',
}

export interface ViewSchema {
    view: ViewTypes;
}
