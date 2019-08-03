<template>
  <div>
    <hr class="rr" style="margin: 0!important">
    <div class="container">
      <div class="row">

        <div class="col-md-6" style="padding-top:10px!important;padding-bottom:50px!important;">
          <div
            style="padding-left:20px!important;padding-right:20px!important;text-align: center;background-color:white;border:solid rgb(235, 238, 240) 2px;float:left;margin-top:20px;margin-left:20px;">
            <br><br>
            <h2 style="color:#03adfc;">Sign in</h2>
{{ msg }}
            <p>Enter your details below to access your account</p><br>
            <form @submit.prevent="submit1" style="padding-bottom:30px!important;">
              <div class="form-group">

                <b-row>

                  <b-col>
                    <input type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      required class="form-control" v-model="users1.username" id="rcorners1" aria-describedby="emailHelp" placeholder="Username">
                  </b-col>

                </b-row>
              </div>

              <div class="form-group">


                <b-row>

                  <b-col>
                    <input type="password" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      required class="form-control" v-model="users1.password" id="rcorners1" aria-describedby="emailHelp" placeholder="Password">
                  </b-col>

                </b-row>
              </div>
              <br>
             <p style="text-align: center!important;"><router-link to="" style="text-decoration: none!important;">Forgot Password</router-link></p>
              <button
              type="submit"
              class="btn btn-primary"
              style="background-color: #03adfc;"
            >Sign in</button>
            Not a member yet?
            <router-link to="/signup1">
              <b>
                <label style="color:#03adfc;">Sign Up</label>
              </b>
            </router-link>

              <!-- <button type="button" class="btn btn-light">
                        <router-link to="/signupb">Signup as a business</router-link>
                      </button>-->

              <br>
              <br>
              <div> ________________ or ______________</div>
              <br>
              <div class="square_bt">
                <router-link to="" class="square_bt">Continue with Facebook</router-link>
              </div>
              <br>
              <br>
              <div class="squarbt">
                <router-link to="" class="squarbt">Continue with Google</router-link>
              </div>

            </form>


          </div>


        </div>
        <div class="col-md-6 hid" style="padding-top:10px!important;">
          <div id="rectangle" class="rt">
            <p style="text-align: center!important;"> <img src="../assets/221.jpg"
                style="width:400px;height:400px;padding-top:40px!important;">
            </p>
          </div>
        </div>

      </div>

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
                    name: "slider"
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
  .square_bt {
    display: inline-block;
    padding: 7px 20px!important;
    border-radius: 25px!important;
    text-decoration: none!important;
    color: #FFF!important;
    background: #00008b!important;
    transition: .4s;
  }

  .squarbt {
    display: inline-block;
    padding: 7px 20px!important;
    border-radius: 25px!important;
    text-decoration: none;
    color: black!important;
    background: rgb(240, 240, 240);
    transition: .4s;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .hid {
      display: none;
    }
  }

  @media only screen and (min-device-width : 480px) and (max-device-width : 768px) {
    .hid {
      display: none;
    }
  }

  @media only screen and (min-device-width : 768px) and (max-device-width : 1000px) {
    .hid {
      display: none;
    }
  }

  
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1300px) {
    .rt {
      width: 650px;
      height: 700px;
      background: rgb(240, 240, 240);
      border-top-left-radius: 290px;
      border-bottom-left-radius: 350px;

    }
  }
  @media only screen and (min-device-width: 1301px) and (max-device-width: 1500px) {
    .rt {
      width: 800px;
      height: 700px;
      background: rgb(240, 240, 240);
      border-top-left-radius: 290px;
      border-bottom-left-radius: 350px;

    }
  }
  @media only screen and (min-device-width: 1501px) and (max-device-width: 1700px) {
    .rt {
      width: 1500px;
      height: 700px;
      background: rgb(240, 240, 240);
      border-top-left-radius: 290px;
      border-bottom-left-radius: 350px;

    }
  }
  @media only screen and (min-device-width: 1701px) and (max-device-width: 2000px) {
    .rt {
      width: 1800px;
      height: 700px;
      background: rgb(240, 240, 240);
      border-top-left-radius: 290px;
      border-bottom-left-radius: 350px;

    }
  }
  .rr {
    border: 1px solid rgb(240, 240, 240) !important;
    border-radius: 3px !important;
  }
</style>