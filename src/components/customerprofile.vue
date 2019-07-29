 <template>
    <div> <navbar></navbar><br>
     <b-container style="background-color: white;"><b-row>
         
      <b-col>
              <img src="../assets/pro.png"><hr>
              <h2 style="color: cadetblue;"><b>Complete Your Profile</b></h2>
          </b-col>
        
        </b-row>
          <b-row>
          
          <b-col><br>
 <div>
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="Customer profile" active><b-card-text>
        <form @submit.prevent="submit1">
          <b-row>
          <b-col>
  <div class="form-group">
    <label for="email" style="color: cadetblue;"><b>First Name:</b></label>
    <input type="text" class="form-control" v-model="users1.firstname" style="background-color: rgb(233, 238, 240);text-align: center;" required >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="email"style="color: cadetblue;"><b>Last Name</b></label>
      <input type="text" class="form-control" v-model="users1.lastname" style="background-color: rgb(233, 238, 240);text-align: center;" required >
    </div></b-col>
    
      </b-row>
      <b-row><b-col>
  <div class="form-group">
    <label for="pwd"style="color: cadetblue;"><b>Nationality:</b></label>
    <input type="text" class="form-control" v-model="users1.nation"  required style="background-color: rgb(233, 238, 240);text-align: center;" >
  </div></b-col>
  <b-col>
      <div class="form-group">
        <label for="pwd"style="color: cadetblue;"><b>Promo Reference Code</b></label>
        <input type="text" class="form-control" v-model="users1.code" style="background-color: rgb(233, 238, 240);text-align: center;" required >
      </div></b-col></b-row>

    

  <div class="form-group form-check">
    <label class="form-check-label">
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </b-card-text></b-tab>
      
    </b-tabs>
  </b-card>
</div>
          </b-col>
          
        </b-row></b-container><br>
        <navbar1></navbar1>
        <br><br>
        

  
  
    </div></template>
    

<script>
  import navbar from '@/components/navbar'
  import navbar1 from '@/components/navbar1'

import axios from "axios";
//import store from "../store";
export default {
components:
{ navbar,
navbar1
},
data(){

return {

users1:
{
firstname: '',
lastname:'',
nation:'',
code:''

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

datas1['fname'] = this.users1.firstname;
datas1['lname'] = this.users1.lastname;
datas1['nation'] = this.users1.nation;
datas1['promocode'] = this.users1.code;


console.log(datas1)

//  axios({
//   method: 'POST',
//    url: 'http://ghgj.com',
//    data : 'datas',
//    contentType: 'application/json; charset=utf-8',
//    dataType: 'json',
//  })
axios.post('http://13.233.110.196/user/customer/',{  
 to:this.token,  
firstname :this.users1.firstname,
lastname: this.users1.lastname,
nationality: this.users1.nation,
ref_code: this.users1.code,


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
 this.$router.push({
 name: "userprofile"
 });
})
//this.$store.dispatch('submit1', { username, password })
//.then(() => this.$router.push('/userprofile'))
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
    <style>

#rcorners1 {
border-radius: 25px;
padding: 20px; 
width: 200px;
height: 8px; 
text-align: center; 
}

</style>
<style>
  body {
    font-family: Arial;
  }
  
  .coupon {
    border: 5px dotted #bbb;
    width: 80%;
    border-radius: 15px;
    margin: 0 auto;
    max-width: 600px;
  }
  
  .container {
    padding: 2px 16px;
    background-color: #f1f1f1;
  }
  
  .promo {
    background: #ccc;
    padding: 3px;
  }
  
  .expire {
    color: red;
  }
  </style>


