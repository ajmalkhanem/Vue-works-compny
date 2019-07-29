import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        token: !!localStorage.getItem('token'),
        isLog : !!localStorage.getItem('situation'),
        data:!!localStorage.getItem('data'),
    },
    mutations: {
        loginUser (state) {
            state.isLoggedIn = true
            state.isLog = true
            state.data= true
        },
        logoutUser (state) {
            state.isLoggedIn = false
           
        }
    }
})