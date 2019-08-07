<template>
  <div>
    <hr class="rr" style="margin: 0!important" />
    <div class="container">
      <div class="row">
        <div class="col-md-6" style="padding-top:10px!important;padding-bottom:50px!important;">
          <div
            style="padding-left:20px!important;padding-right:20px!important;text-align: center;background-color:white;border:solid rgb(235, 238, 240) 2px;float:left;margin-top:20px;margin-left:20px;"
          >
            <br />
            <br />
            <h2 style="color:#03adfc;">Sign Up</h2>

            <p>By joining I agree to receive emails from CloudGM</p>
           <label style="color:red;">{{msg2}}</label>
            <form @submit="submit1" style="padding-bottom:30px!important;">
              <div class="form-group">
                <b-row>
                  <b-col>
                    <input
                      type="text"
                      v-model="users1.username"
                      minlength="6"
                      maxlength="15"
                      style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      required
                      class="form-control"
                      id="rcorners1"
                      aria-describedby="emailHelp"
                      placeholder="Username"
                    />
                  </b-col>
                </b-row>
              </div>

              <div class="form-group">
                <b-row>
                  <b-col>
                    <input
                      type="password"
                      v-model="users1.password"
                      minlength="6"
                      maxlength="15"
                      style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      required
                      class="form-control"
                      id="rcorners1"
                      aria-describedby="emailHelp"
                      placeholder="Password"
                    />
                  </b-col>
                </b-row>
              </div>
              <div class="form-group">
                <b-row>
                  <b-col>
                    <input
                      type="number"
                      v-model="users1.ph"
                      pattern="[0-9]{1}[0-9]{9}"
                      style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      required
                      class="form-control"
                      id="rcorners1"
                      aria-describedby="emailHelp"
                      placeholder="Mobile"
                    />
                  </b-col>
                </b-row>
              </div>
              <div class="form-group">
                <b-row>
                  <b-col>
                    <input
                      type="email"
                      pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                      style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                      v-model="users1.email"
                      required
                      class="form-control"
                      id="rcorners1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </b-col>
                </b-row>
              </div>
              <br />

              <button
                type="submit"
                class="btn btn-primary"
                style="background-color: #03adfc;"
              >Sign up</button>
              Already member
              <router-link to="/signin">
                <b>
                  <label style="color:#03adfc;">Signin</label>
                </b>
              </router-link>
              <br />
              <br />

              <!-- <button type="button" class="btn btn-light">
                        <router-link to="/signupb">Signup as a business</router-link>
              </button>-->

              <br />
              <br />
              <div>________________ or ______________</div>
              <br />
              <div class="square_bt">
                <router-link to class="square_bt">Continue with Facebook</router-link>
              </div>
              <br />
              <br />
              <div class="squarbt">
                <router-link to class="squarbt">Continue with Google</router-link>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 hid" style="padding-top:10px!important;">
          <div id="rectangle" class="rt">
            <p style="text-align: center!important;">
              <img
                src="../assets/CCLO.png"
                style="width:400px;height:400px;padding-top:40px!important;"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar";

import axios from "axios";
//import store from "../store";
export default {
  components: { navbar },
  data() {
    return {
      users1: {
        username: "",
        password: "",
        email: "",
        ph: "",
        place: ""
      },

      msg1: "",
      msg2:'',
      // token:localStorage.getItem("token")
    };
  },
  methods: {
    submit1(ev) {
      ev.preventDefault();
      var datas1 = {};

      datas1["username"] = this.users1.username;
      datas1["password"] = this.users1.password;
      datas1["email"] = this.users1.email;
      datas1["ph"] = this.users1.ph;
      datas1["place"] = this.users1.place;

      console.log(datas1);

      //  axios({
      //   method: 'POST',
      //    url: 'http://ghgj.com',
      //    data : 'datas',
      //    contentType: 'application/json; charset=utf-8',
      //    dataType: 'json',
      //  })
      axios
        .post("http://13.233.110.196/register/", {
          username: this.users1.username,
          password: this.users1.password,
          email: this.users1.email,
          usertype: "1",
          lat: "0.00",
          lon: "0.00",
          role: "1",
          ph: this.users1.ph,
          place: this.users1.place
        })
        /*.then(response => {
                  alert(that.$store.commit('LOGIN_SUCCESS', response.data.token));
              }).catch(error => {
                  console.log("Error login")
                  console.log(error)
              })
              this.dialog = false*/
        .then(response => {
          //console.log(response.data.token)
          //store.commit("loginUser",response.data.token);
          //localStorage.setItem("token", response.data.token)
            this.msg1 = response.data.status;
                        this.msg2 = response.data.message;


          if (this.msg1 == true) {
            this.$router.push({
              name: "signin"
            });
          }
        })
        //this.$store.dispatch('submit1', { username, password })
        //.then(() => this.$router.push('/Home'))
        .catch(ev => {});
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
.square_bt {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background: #00008b;
  transition: 0.4s;
}

.squarbt {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  background: rgb(240, 240, 240);
  transition: 0.4s;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .hid {
    display: none;
  }
}

@media only screen and (min-device-width: 480px) and (max-device-width: 768px) {
  .hid {
    display: none;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1000px) {
  .hid {
    display: none;
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1300px) {
  .rt {
    width: 650px;
    height: 750px;
    background: rgb(240, 240, 240);
    border-top-left-radius: 290px;
    border-bottom-left-radius: 350px;
  }
}

@media only screen and (min-device-width: 1301px) and (max-device-width: 1500px) {
  .rt {
    width: 800px;
    height: 750px;
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
.rr {
  border: 1px solid rgb(240, 240, 240) !important;
  border-radius: 3px !important;
}
</style>