 <template><div>
    <navbar></navbar>
        <br><br><br>{{ type}}
        {{ stat }}
        {{ new1 }}
        {{ status1 }}
    <div class="container" style="background-color: white;">
        <div class="row">
          <div class="col">
            <div id="rcorners1" style="width:500px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:660px;float:left;margin-top:20px;margin-left:20px;">
                <br><br><br>
                  <h2><b><label style="color:#03adfc;">Sign in</label></b></h2><br>
                  <p>Enter your details below to access your account</p>
                        <form @submit.prevent="submit1">
                        <div class="form-group">
                          <b-row><b-col>
                          <label for="username"><b></b></label>
                        </b-col> <b-col></b-col><b-col></b-col></b-row>
                     
                        <b-row> <b-col></b-col> <b-col>
                            <input  type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"  v-model="users1.username" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Username">
                        </b-col><b-col></b-col></b-row>
                        </div>
                        
                        <div class="form-group">
                          <b-row> <b-col>
                          <label for="password"><b></b></label></b-col> 
                        <b-col></b-col> <b-col></b-col></b-row>
                      
                        <b-row><b-col></b-col> <b-col>
                          <input type="password" style="width:330px;background-color: rgb(233, 238, 240); text-align: center;"  v-model="users1.password"  required class="form-control" id="rcorners1" placeholder="Password">
                        </b-col><b-col></b-col></b-row>
                        </div>
                        <div class="form-group">
                               <b-row> <b-col></b-col><b-col>
                         <router-link to="/forgot" ><label style="color: lightslategray;">Forgot password</label></router-link></b-col>
                                      <b-col></b-col></b-row>
                        </div>
                        

                        <br>

                                        <button type="submit" class="btn btn-primary" style="background-color: #03adfc;">Sign in</button></b-col>

                                        Not a member yet ? <router-link to="/signup" ><b><h9 style="color:#03adfc;">Signup</h9></b></router-link> 
                        
                      </form>
                      <br><br>
                         <b-row>
                          <b-col>
                              <b-button variant="primary" style="background-color: #1606bf;text-align: center;width: 280px;">Continue with facebook</b-button>

                            </b-col>
                               </b-row>
                               <br>
                               <b-row>
                                  <b-col>
                                      <b-button variant="primary" style="background-color: rgb(203, 207, 219);text-align: center;width: 280px;">Continue with facebook</b-button>
        
                                    </b-col>
                                       </b-row>
                               
                 
                                  
                                </div>
                                
                      
          </div>
          <div class="col">
                        <img src="../assets/CLOUD.png" style="width: 500px;height:720px;" ></img> 
                          
          </div>
        </div>
        
      </div>
 
    <br><br><br>
    </div>
    
</template>

<script>
  import navbar from '@/components/navbar'
    import axios from "axios";
    import store from "../store";
      export default {
        components:{
          navbar
        },
         data(){
            return {
             users1:
              {
              username: '',
              password:''
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
 type:localStorage.getItem("type"),      
        stat:localStorage.getItem("stat"),
        new1:localStorage.getItem("new"),
        status1:localStorage.getItem("status"),

             token:localStorage.getItem("token")

             };
          },
          methods: {
submit1(ev) {
ev.preventDefault()
var datas1 = {};

datas1['username'] = this.users1.username;
datas1['password'] = this.users1.password;

console.log(datas1)
//  axios({
//   method: 'POST',
//    url: 'http://ghgj.com',
//    data : 'datas',
//    contentType: 'application/json; charset=utf-8',
//    dataType: 'json',
//  })
axios.post('http://13.233.110.196/login/',{   
username :this.users1.username,
password : this.users1.password,
})

 .then((response) =>{
  console.log(response.data.token)
  console.log(response.data.usertype)
  console.log(response.data.status)

 store.commit("loginUser",response.data.token);
 localStorage.setItem("token", response.data.token)
 localStorage.setItem("type", response.data.usertype)
 localStorage.setItem("stat", response.data.status)


     // this.$router.push({
       // name: "userprofile"
     // });
    })
    
 //this.$store.dispatch('submit1', { username, password })
 //.then(() => this.$router.push('/Home'))
 .catch((ev) => {})
 ev.target.reset()
 check1(ev);
},


 check1()
  {
    if(stat=="true")
    {
      procheck();
    }
    if(stat=="false")
    {
      print("error");
    }
  },
  procheck()
  {
    axios.post('http://13.233.110.196/user/me/',{   
to:token
})

 .then((response) =>{
  store.commit("loginUser",response.data.token);

  localStorage.setItem("new", response.data.new)
 localStorage.setItem("status", response.data.status)

    })
    if(new1=="true" && status1=="false")
    {
if(type=="0")
{
  this.$router.push({
        name: "userprofile"
      });
}
if(type=="1")
{
  this.$router.push({
        name: "businessprofile"
      });
}
    }
    if(status=="true")
{
  this.$router.push({
        name: "businesreg"
      });
}
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
}

</style>