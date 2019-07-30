<template>
  <div>

    <navbar></navbar>
    <div class="bg2">
      <div class="text-block">
        <br><br><br>
        <h1 style="font-size: 70px;"><b> Start Your carrier</b></h1>
        <p>Keep in customers happy We'll make grown easy</p>
        <p>Keep in customers happy We'll make grown easy</p>
        <p>Keep in customers happy We'll make grown easy</p>


      </div><br><br>
      <div class="row" style="width:100%;">
        <div class="col"></div>
        <div class="col">
          <div class="transbox"
            style="width:500px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:white;border:solid rgb(235, 238, 240) 2px;height:700px;float:left;margin-top:20px;margin-left:20px;">
            <br><br>
            <h2><b><label style="color:#03adfc;">Sign up</label></b></h2><br>
            {{msg}}
            <p>Enter your details below to create your account</p>
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
                    <label for="password"><b></b></label>
                  </b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>

                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <input type="password" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      v-model="users1.password" required class="form-control" id="rcorners1"
                      aria-describedby="emailHelp" placeholder="Password">
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </div>



              <div class="form-group">
                <b-row>
                  <b-col>
                    <label for="Mobile"><b></b></label>
                  </b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>

                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <input type="text" pattern="[7-9]{1}[0-9]{9}"
                      style="width:330px;background-color: rgb(233, 238, 240);text-align: center;" v-model="users1.ph"
                      required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Mobile">
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </div>
              <div class="form-group">
                <b-row>
                  <b-col>
                    <label for="Mobile"><b></b></label>
                  </b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>

                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <input type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                      style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      v-model="users1.email" required class="form-control" id="rcorners1" aria-describedby="emailHelp"
                      placeholder="Email">
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </div>




              <br>

              <button type="submit" class="btn btn-primary" style="background-color: #03adfc;">Sign up</button></b-col>

              Already member <router-link to="/login"><b>
                  <label style="color:#03adfc;">Signin</label>
                </b></router-link>
              <br><br>
              <button type="button" class="btn btn-light">
                <router-link to="/signupb">Signup as a business</router-link>
              </button>

            </form>


          </div>


        </div>

      </div>
      <br><br>
    </div>





  </div>

</template>

<script>
  import navbar from '@/components/navbar'

  import axios from "axios";
  import store from "../store";
  export default {
    components:
    {
      navbar
    },
    data() {

      return {

        users1:
        {
          username: '',
          password: '',
          email: '',
          ph: ''

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
        msg: '',

      };
    },
    methods: {
      submit1(ev) {
        ev.preventDefault()
        var datas1 = {};

        datas1['username'] = this.users1.username;
        datas1['password'] = this.users1.password;
        datas1['email'] = this.users1.email;
        datas1['ph'] = this.users1.ph;
        datas1['place'] = this.users1.place;


        console.log(datas1)

        //  axios({
        //   method: 'POST',
        //    url: 'http://ghgj.com',
        //    data : 'datas',
        //    contentType: 'application/json; charset=utf-8',
        //    dataType: 'json',
        //  })
        axios.post('http://13.233.110.196/register/', {
          username: this.users1.username,
          password: this.users1.password,
          email: this.users1.email,
          usertype: '0',
          lat: '0.000',
          lon: '0.000',
          ph: this.users1.ph

        })

          .then((response) => {
            this.msg = response.data.message
              / this.$router.push({
                name: "login"
              });
          })
          //this.$store.dispatch('submit1', { username, password })

          .catch((ev) => { })
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
  }
</style>
<style>
  body,
  html {
    height: 100%;
    margin: 0;
  }

  .bg2 {
    /* The image used */
    background-image: url("https://www.cearsleg.com/themes/user/img/subpage-technolgy-banner.jpg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div.transbox {
    margin: 30px;
    background-color: #ffffff;
    border: 1px solid black;
    opacity: .8;
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