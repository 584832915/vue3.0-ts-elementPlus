import { Module } from 'vuex';
import { TableType, ItableState, ListType } from './../../typings/table';
import { IGlobalState } from '..'
import * as ActionType from './../action-types'


const state: ItableState = {
    currentType: TableType.type1,
   
}
// ItableState自己的状态， IGlobalState 全部的状态
const tableState: Module<ItableState, IGlobalState> = {
    state,
    mutations: {
        [ActionType.SET_CURRENTTYPE](state, type: TableType) {
            state.currentType = type
        },
       
    },
    actions: {
    }
}
export default tableState