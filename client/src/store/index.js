import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)
let store = new Vuex.Store({
    modules:{
        user
    }
})
window.store = store
export default store