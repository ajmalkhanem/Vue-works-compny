<template>
    <div>
    
    
    
    
      <b-container style="background-color:white;">

                <form @submit.prevent="submit1">

        
    
        <div class="container3">
          <div class="form-group">
      <label for="policy" style="color: cadetblue;"><b>Task Name:</b></label>
      <input type="text" class="form-control" v-model="users1.name" style="background-color: rgb(233, 238, 240);" placeholder="Task Name" >
    </div>
           <div class="form-group">
      <label for="policy" style="color: cadetblue;"><b>Date:</b></label>
      <input type="date" class="form-control" v-model="users1.date" style="background-color: rgb(233, 238, 240);" placeholder="Policy Expiry Date" >
    </div>
           <div class="form-group">
      <label for="policy" style="color: cadetblue;"><b>Odometer Reading</b></label>
      <input type="text" class="form-control" v-model="users1.odometer" style="background-color: rgb(233, 238, 240);" placeholder="Odometer" >
    </div>

           <div class="form-group">
      <label for="policy" style="color: cadetblue;"><b>Amount</b></label>
      <input type="text" class="form-control" v-model="users1.amount" style="background-color: rgb(233, 238, 240);" placeholder="Amount" >
    </div>



           

            
         
        </div>
   <b-container style="background-color:white;">
      
        <div class="form-group">
      <label for="policy" style="color: cadetblue;"><b></b></label>
        <b-button type="submit" variant="outline-primary">Save</b-button></div>
        </b-container>
        

    
      </form>
      </b-container>

    </div>
    
    </template>

     <script>
 

import axios from "axios";
//import store from "../store";
export default {
props:['id'],
data(){

return {

users1:
{
name: '',
date:'',
odometer:'',
amount:''


},
/* mounted() {
if (localStorage.users1.username) {
this.username = localStorage.users1.username;
}
},
watch: {
name(newName) {
localStorage.users1.username = newName;
}
},*/
obj:'',
token:localStorage.getItem("token")

};
},
methods: {
submit1(ev) {
ev.preventDefault()
var datas1 = {};

datas1['veh'] = this.users1.vehname;
datas1['owner'] = this.users1.onname;
datas1['plate'] = this.users1.platenum;
datas1['tc'] = this.users1.tcnum;
datas1['redate'] = this.users1.rgdate;
datas1['pol'] = this.users1.exdate;
datas1['in'] = this.users1.inexdate;
datas1['polex'] = this.users1.polexdate;

console.log(datas1)

axios.post('http://13.233.110.196/add/charges/',{  
 to:this.token,  
id:this.id,
name :this.users1.name,
date: this.users1.date,
odometer: this.users1.odometer,
amount: this.users1.amount,





})
/*.then(response => {
alert(that.$store.commit('LOGIN_SUCCESS', response.data.token));
}).catch(error => {
console.log("Error login")
console.log(error)
})
this.dialog = false*/
.then((response) =>{
//console.log(response.data.token)
//store.commit("loginUser",response.data.token);
//localStorage.setItem("token", response.data.token)
// this.$router.push({
// name: "userprofile"
// });
})
//this.$store.dispatch('submit1', { username, password })
//.then(() => this.$router.push('/Home'))
.catch((ev) => {})
ev.target.reset()
}

/* login() {
username= this.users1.username 
password = this.users1.password
this.$store.dispatch('login', { username, password })
.then(() => this.$router.push('/'))
.catch(err => console.log(err))
}*/
}
};
</script>
