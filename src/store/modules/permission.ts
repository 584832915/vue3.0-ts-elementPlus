import { Module } from 'vuex';
import { IGlobalState } from '..'
import { Ipermission } from './../../typings/permission';
import * as ActionType from './../action-types';


const permission:Module<Ipermission,IGlobalState> = {
    state:{
        sidbarList:[]
    },
    mutations:{
        [ActionType.SET_SIDBARLIST](state,list){
            state.sidbarList = list
        }
    }
}

export default permission