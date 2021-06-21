import { asyncRoute } from './../router/asyncRoute';
import { SET_SIDBARLIST } from './../store/action-types';
import { RouteRecordRaw } from 'vue-router';
import store from '@/store'
import router from '@/router';


let list:any = {}
export const getRouteDetail = (routes: Array<RouteRecordRaw>,name:string)=>{
    routes.forEach((val)=>{
        if(val.name == name){
            list= val
        } 
        if(val.children  && val.children.length){
            getRouteDetail(val.children,name)
        }
    })
    return list
}

export const handleRoutes=()=>{
    const routeList = JSON.parse(sessionStorage.getItem("ruleList") as string)
    store.commit(SET_SIDBARLIST,routeList);
    routeList.forEach((val:any) => {
        router.addRoute("nav", getRouteDetail(asyncRoute, val.name));
    });
}
