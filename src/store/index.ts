import { ItableState} from './../typings/table';
import { Ipermission} from './../typings/permission';
import { createStore } from 'vuex'
import table from './modules/table'
import permission from './modules/permission';

export interface IGlobalState {
  table: ItableState
  permission:Ipermission
}
const store = createStore<IGlobalState>({
  modules: {
    table,
    permission
  }
})

export default store
