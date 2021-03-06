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
    age: number,
    address: string
}

export interface ItableState {
    currentType: TableType,
    tableData: ListType[]
}

export interface configType {
    label: string,
    prop: string,
    filterFun: string
}
