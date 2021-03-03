import { ItableState } from './../typings/table';
import { createStore } from 'vuex'
import table from './modules/table'

export interface IGlobalState {
  table: ItableState
}
const store = createStore<IGlobalState>({
  modules: {
    table
  }
})

export default store
