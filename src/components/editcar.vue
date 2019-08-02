 <template>
    <div> 
    <b-jumbotron style="background-color:white;">
        <div>
  
</div><br>
     <h2 style="color: cadetblue;"><b>Update Details</b></h2>
     {{msg}}
          <b-row>
                        

          <b-col><br>
 <div>
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="Basic Data" active><b-card-text>
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
        <input type="text" class="form-control"  v-model="users1.platenum" disabled style="background-color: rgb(233, 238, 240);" placeholder="Traffic Plate Number" >
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
    </b-jumbotron><br>
        <br><br>
        

  
  
    </div></template>
<script>
  import navbar from '@/components/navbar'
  import navbar1 from '@/components/navbar1'

import axios from "axios";
//import store from "../store";
export default {
      props:['id'],

components:
{ navbar,
navbar1
},
data(){

return {
list:[],
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
msg:'',
token:localStorage.getItem("token")

};
},
 mounted: function () {
      this.submit1();
      //alert(this.id)
    },
   /* methods: {
      getData() {
        //alert(this.id)
        axios({
          method: 'POST',
          headers: {
            to: localStorage.getItem("token")
          },
          url: 'http://13.233.110.196/view/vehicle/',
          data: {
            id: this.id
          }

        })
          .then((response) => {
            this.users1.vehname = response.data.data.vehicleName
            console.log(response.data)
            console.log(this.list = response.data.data)



          })
      },

    },*/
methods: {

  
submit1(ev) {
  axios({
          method: 'POST',
          headers: {
            to: localStorage.getItem("token")
          },
          url: 'http://13.233.110.196/view/vehicle/',
          data: {
            id: this.id
          }

        })
          .then((response) => {
            this.users1.vehname = response.data.data.vehicleName
            this.users1.onname = response.data.data.ownerName
            this.users1.platenum = response.data.data.plateNo
             this.users1.tcnum = response.data.data.tcNo
            this.users1.rgdate = response.data.data.registerDate.slice(0,10)
            this.users1.exdate = response.data.data.expiryDate.slice(0,10)
            this.users1.inexdate = response.data.data.inexpiryDate.slice(0,10)
            this.users1.polexdate = response.data.data.polexpiryDate.slice(0,10)



            console.log(response.data)
            console.log(this.list = response.data.data)



          })
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

axios.post('http://13.233.110.196/edit/vehicle/',{  
 to:this.token,  
 id:this.id,
vehicleName :this.users1.vehname,
ownerName: this.users1.onname,
//plateNo: this.users1.platenum,
tcNo: this.users1.tcnum,
registerDate: this.users1.rgdate,
expiryDate: this.users1.exdate,
inexpiryDate: this.users1.inexdate,
polexpiryDate: this.users1.polexdate,
documents: "asasa"




})

.then((response) =>{
this.msg=response.data.msg
//store.commit("loginUser",response.data.token);
//localStorage.setItem("token", response.data.token)
 //this.$router.push({
 //name: "userprofile"
// });
})
//this.$store.dispatch('submit1', { username, password })
//.then(() => this.$router.push('/Home'))
.catch((ev) => {})
ev.target.reset()
}

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


