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

        


    },
    mutations: {
        loginUser (state) {
            state.isLoggedIn = true
            state.token = true
            state.data= true

          
            
        },
       
           
            
            
        
        logoutUser (state) {
            state.isLoggedIn = false
            state.data = false
            
        }
    }
    
})