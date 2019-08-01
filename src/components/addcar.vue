 <template>
    <div> <div class="bg5">
      <br>
            <div class="transbox1">
               
    <navbar2></navbar2>
    
<b-jumbotron style="background-color:white;">   
    <div>
  <b-alert show dismissible>
Add your vehicle details and upload documents  </b-alert>
{{obj}}
</div>      
     <b-row>
          
          <b-col><br>   
           <h2 style="color: cadetblue;"><b>Basic Details</b></h2><br>

 <div>
     
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="Add Details" active><b-card-text>
        <form @submit.prevent="submit1">
        <b-row>
          <b-col>
  <div class="form-group">
    <label for="name" style="color: cadetblue;"><b>Vehicle Name:</b></label>
    <input type="text" class="form-control" v-model="users1.vehname" style="background-color: rgb(233, 238, 240);" placeholder="Vehicle Name" >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="owner" style="color: cadetblue;"><b>Owner Name</b></label>
      <input type="text" class="form-control"  v-model="users1.onname" style="background-color: rgb(233, 238, 240);" placeholder="Owner Name" >
    </div></b-col>
    <b-col>
    <div class="form-group">
        <label for="plate" style="color: cadetblue;"><b>Traffic Plate Number:</b></label>
        <input type="text" class="form-control"  v-model="users1.platenum" style="background-color: rgb(233, 238, 240);" placeholder="Traffic Plate Number" >
      </div></b-col>
      </b-row>
      <b-row>
          <b-col>
  <div class="form-group">
    <label for="tc" style="color: cadetblue;"><b>TC Number:</b></label>
    <input type="text" class="form-control"  v-model="users1.tcnum" style="background-color: rgb(233, 238, 240);" placeholder="TC Number" >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="Registartion" style="color: cadetblue;"><b>Registartion Date:</b></label>
      <input type="date" class="form-control"  v-model="users1.rgdate" style="background-color: rgb(233, 238, 240);" placeholder="Registration Date" >
    </div></b-col>
    <b-col>
    <div class="form-group">
        <label for="expiry" style="color: cadetblue;"><b>Expiry Date:</b></label>
        <input type="date" class="form-control"  v-model="users1.exdate" style="background-color: rgb(233, 238, 240);" placeholder="Expiry Date" >
      </div></b-col>
      </b-row>

      <b-row>
          <b-col>
  <div class="form-group">
    <label for="insurance" style="color: cadetblue;"><b>Insurance Expiry Date:</b></label>
    <input type="date" class="form-control"  v-model="users1.inexdate" style="background-color: rgb(233, 238, 240);" placeholder=" Insurance Expiry Date"  >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="policy" style="color: cadetblue;"><b>Policy Expiry Date:</b></label>
      <input type="date" class="form-control"  v-model="users1.polexdate" style="background-color: rgb(233, 238, 240);" placeholder="Policy Expiry Date" >
    </div></b-col>
   <b-col></b-col>
      </b-row>

      <br><h4 style="color: cadetblue;"><b>Business Documents</b></h4>
<br>
      <b-row><b-col>
        <div class="coupon">
                                                            
          <div class="container" style="background-color:white">
            </div>
          <div class="container">
            <p>
              <input type="file"></p>
          </div>
        </div></b-col>
        
          <b-col>
            <div class="coupon">
                                                              
              <div class="container" style="background-color:white">
                </div>
              <div class="container">
                <p>
                  <input type="file"></p>
              </div>
            </div></b-col>
             <b-col>
    <div class="form-group">
        <label for="" style="color: cadetblue;"><b></b></label><br>
        <b-button type="submit" variant="info">Register</b-button>
      </div></b-col>
        </b-row>

  <div class="form-group form-check">
    <label class="form-check-label">
    </label>
  </div>
</form>
      </b-card-text></b-tab>
      
    </b-tabs>
  </b-card>
</div>
          </b-col>
          
        </b-row>
        </b-jumbotron></div></div>
        <br>
        <br><br>
        

  
  
    </div></template>


    <script>
  import navbar2 from '@/components/navbar2'
  import navbar1 from '@/components/navbar1'

import axios from "axios";
//import store from "../store";
export default {
components:
{ navbar2,
navbar1
},
data(){

return {

users1:
{
vehname: '',
onname:'',
platenum:'',
tcnum:'',
rgdate:'',
exdate:'',
inexdate:'',
polexdate:''

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

axios.post('http://13.233.110.196/add/vehicle/',{  
 to:this.token,  
vehicleName :this.users1.vehname,
ownerName: this.users1.onname,
plateNo: this.users1.platenum,
tcNo: this.users1.tcnum,
registerDate: this.users1.rgdate,
expiryDate: this.users1.exdate,
inexpiryDate: this.users1.inexdate,
polexpiryDate: this.users1.polexdate,
documents: "asasa"




})
/*.then(response => {
alert(that.$store.commit('LOGIN_SUCCESS', response.data.token));
}).catch(error => {
console.log("Error login")
console.log(error)
})
this.dialog = false*/
.then((response) =>{
this.obj=response.data.msg//store.commit("loginUser",response.data.token);
//localStorage.setItem("token", response.data.token)
 this.$router.push({
name: "userprofile"
});
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
  body,
  html {
    height: 100%;
    margin: 0;
  }

  .bg5 {
    /* The image used */
    background-image: url("https://colorlib.com/wp/wp-content/uploads/sites/2/dark-wordpress-themes.jpg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div.transbox1 {
    margin: 30px;
    background-color: #ffffff;
    border: 1px solid white;
    opacity: 2;
    filter: alpha(opacity=60);
    /* For IE8 and earlier */
  }
  
</style>
 

