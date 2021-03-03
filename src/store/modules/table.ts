import { Module } from 'vuex';
import { TableType, ItableState, ListType } from './../../typings/table';
import { IGlobalState } from '..'
import * as ActionType from './../action-types'


const state: ItableState = {
    currentType: TableType.type1,
    tableData: [{ name: '默认', age: 10, address: '默认默认默认默认默认' }]
}
// ItableState自己的状态， IGlobalState 全部的状态
const tableState: Module<ItableState, IGlobalState> = {
    state,
    mutations: {
        [ActionType.SET_CURRENTTYPE](state, type: TableType) {
            state.currentType = type
        },
        [ActionType.SET_TABLEDATA](state, data: ListType[]) {
            state.tableData = data
        }
    },
    actions: {
    }
}
export default tableState