export enum TableType {
    type1 = 1,
    type2,
    type3
}

export interface OptionsType {
    value: TableType,
    label: string

}

export interface ListType {
    name: string,
    date: string,
    province: string,
    city:string,
    address:string
}

export interface ItableState {
    currentType: TableType,
}



export interface configType {
    label: string,
    prop: string,
    filterFun: string
}

export interface serachConfigType {
    type: string,
    label: string,
    modelName: string,
    placeholder?: string,
    options?: object[]
}