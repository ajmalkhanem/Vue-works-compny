<template>
  <div>
    <navbar></navbar>
    <div class="bg">
      <br><br>
      <div class="text-block">
        <br><br><br>
        <h1 style="font-size: 70px;"><b> Business Your Way</b></h1>
        <p>Keep in customers happy We'll make grown easy</p>
        <p>Keep in customers happy We'll make grown easy</p>
        <p>Keep in customers happy We'll make grown easy</p>


      </div>


      <div class="row"style="width:100%;">
        <div class="col"></div>
        <div class="col">
          <div id="rcorners1" class="transbox"
            style="width:500px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:660px;float:left;margin-top:20px;margin-left:20px;">
            <br>
            <br><br>
            <h2><b><label style="color:#03adfc;">Sign in</label></b></h2>
            {{ msg}}
            <br>
            <p>Enter your details below to access your account</p>
            <form @submit.prevent="submit1">
              <div class="form-group">
                <b-row>
                  <b-col>
                    <label for="username"><b></b></label>
                  </b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>

                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <input type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      v-model="users1.username" required class="form-control" id="rcorners1"
                      aria-describedby="emailHelp" placeholder="Username">
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </div>

              <div class="form-group">
                <b-row>
                  <b-col>
                    <label for="password"><b></b></label></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>

                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <input type="password" style="width:330px;background-color: rgb(233, 238, 240); text-align: center;"
                      v-model="users1.password" required class="form-control" id="rcorners1" placeholder="Password">
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </div>
              <div class="form-group">
                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <router-link to="/forgot"><label style="color: lightslategray;">Forgot password</label>
                    </router-link>
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </div>


              <br>

              <button type="submit" class="btn btn-primary" style="background-color: #03adfc;">Sign in</button></b-col>

              Not a member yet ? <router-link to="/signup"><b>
                  <label style="color:#03adfc;">Signup</label>
                </b></router-link>

            </form>
            <br><br>
            <b-row>
              <b-col>
                <div class="chip">
                  <img src="../assets/fb.png" alt="Person" width="96" height="96">
                  continue with facebook
                </div>

              </b-col>
            </b-row>
            
            <b-row>
              <b-col>
                <div class="chip">
                  <img src="../assets/gg.jpg" alt="Person" width="96" height="96">
                  continue with google
                </div>

              </b-col>
            </b-row>



          </div>


        </div>

      </div>
      <br>
    </div>

  </div>

</template>

<script>
  import navbar from '@/components/navbar'
  import axios from "axios";
  import store from "../store";
  export default {
    components: {
      navbar
    },
    data() {
      return {
        users1:
        {
          username: '',
          password: ''
        },
        token: '',
        status: '',
        new1: '',
        status1: '',
        usertype1: '',
        msg: '',
        log:store.state.isLoggedIn,


      };
    },
    methods: {

      submit1(ev) {
        // alert(this.msg)
        ev.preventDefault()
        var datas1 = {};

        datas1['username'] = this.users1.username;
        datas1['password'] = this.users1.password;

        // console.log(datas1)

        axios.post('http://13.233.110.196/login/', {
          username: this.users1.username,
          password: this.users1.password,
        })

          .then((response) => {


            store.commit("loginUser", response.data.token);
            localStorage.setItem("token", response.data.token)
            this.status = response.data.status
            this.usertype1 = response.data.usertype
            this.msg = response.data.message

            this.check1(response)
          })


          .catch((ev) => { })
        ev.target.reset()
        //alert("hai");
      },
      check1() {
        //console.log(localStorage.getItem("token")
        //)

        this.token = localStorage.getItem("token")
        if (this.status == true) {
          axios.post('http://13.233.110.196/user/me/', {

          },
            {
              headers: {
                to: this.token,
              }
            })

            .then((response) => {


             // console.log(response.data.new)
             // console.log(response.data.data)

              //console.log(response.data.status)
              this.new1 = response.data.new
              this.status1 = response.data.status
              if (this.new1 == true) {

                if (this.usertype1 == 0) {

                  this.$router.push({
                    name: "customerprofile"
                  });
                }
                if (this.usertype1 == 1) {

                  this.$router.push({
                    name: "businesprofile"
                  });
                }
              }

              if (this.status1 == true) {

                if (this.usertype1 == 0) {
                  store.commit("loginUser", response.data.data);
            //localStorage.setItem("data0",response.data.data.pro_pic)  
            localStorage.setItem("data", response.data.data.firstname)
            localStorage.setItem("data1", response.data.data.lastname)
            localStorage.setItem("data2", response.data.data.nationality)
            localStorage.setItem("data3", response.data.info.email)
            localStorage.setItem("data4", response.data.info.ph)
                  this.$router.push({
                    name: "userprofile"
                  });
                }
                if (this.usertype1 == 1) {

                  this.$router.push({
                    name: "home"
                  });
                }
              }

            })
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
<style>
  body,
  html {
    height: 100%;
    margin: 0;
  }

  .bg {
    /* The image used */
    background-image: url("http://www.scalsys.com/wallpapers/wallpaper-nyc/wallpaper-nyc_13713.jpg");

    /* Full height */
    height: auto;
    width: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div.transbox {
    margin: 30px;
    background-color: #ffffff;
    border: 1px solid black;
    opacity: .9;
    filter: alpha(opacity=60);
    /* For IE8 and earlier */
  }

  .text-block {
    position: absolute;
    top: 70px;
    left: 20px;
    color: white;
    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
<style>
  .chip {
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 25px;
    background-color: white;
  }

  .chip img {
    float: left;
    margin: 0 10px 0 -25px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
</style>