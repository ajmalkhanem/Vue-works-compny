import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        token: !!localStorage.getItem('token'),
        data:!!localStorage.getItem('data'),
        data1:!!localStorage.getItem('data1'),
        data2:!!localStorage.getItem('data2'),
        data3:!!localStorage.getItem('data3'),
        data4:!!localStorage.getItem('data4'),
        new:!!localStorage.getItem('new'),
        new1:!!localStorage.getItem('new1')


    },
    mutations: {
        loginUser (state) {
            state.isLoggedIn = true
            state.isLog = true
            state.data= true
            state.new1=true
            
        },
        completedUser (state) {
            state.complete = true
        },
        
        logoutUser (state) {
            state.isLoggedIn = false
            state.data = false
            state.complete = false
            
        }
    }
    
})