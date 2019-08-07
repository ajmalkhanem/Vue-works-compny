<template>
  <div>
    <div
      id="rcorners1"
      class="transbox"
      style="width:100%;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:auto;float:left;margin-top:20px;margin-left:20px;"
    >
      {{msg}}
      <b-row>
        <b-col>
          <div>
            <b-card class="overflow-hidden">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="http://arabellamc.com/arabella/themes/images/default-user.png"
                    class="rounded-circle"
                    style="width:100px;height:100px;"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title></b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>

    <br />
    <div>
      <div
        id="rcorners1"
        class="transbox"
        style="width:100%;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:auto;float:left;margin-top:20px;margin-left:20px;"
      >
        <b-container style="background-color: white;">
          <br />General
          <form @submit.prevent="submit1">
            <div class="form-group">
              <label for="FirstName">First Name</label>
              <input
                type="text"
                v-model="users1.firstname"
                class="form-control"
                style="height:auto;width:100%;"
              />
            </div>
            <div class="form-group">
              <label for="FirstName">Last Name</label>
              <input
                type="text"
                v-model="users1.lastname"
                class="form-control"
                style="height:auto;width:100%;"
              />
            </div>
            <div class="form-group">
              <label for="FirstName">Username</label>
              <input
                type="text"
                v-model="users1.username"
                class="form-control"
                style="height:auto;width:100%;"
              />
            </div>
            <div class="form-group">
              <label for="FirstName">Nationality</label>
              <input
                type="text"
                v-model="users1.nationality"
                class="form-control"
                style="height:auto;width:100%;"
              />
            </div>
            <div class="form-group">
              <label for="FirstName">Email Id</label>
              <input
                type="text"
                v-model="users1.email"
                class="form-control"
                style="height:auto;width:100%;"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="users1.ph"
                class="form-control"
                style="height:auto;width:100%;"
              />
            </div>

            <button type="submit">submit</button>
          </form>
        </b-container>
      </div>
    </div>

    <br />
    <br />
  </div>
</template>


<script>
import navbar from "@/components/navbar";
import navbar1 from "@/components/navbar1";

import axios from "axios";
//import store from "../store";
export default {
  props: ["id"],

  components: { navbar, navbar1 },
  data() {
    return {
      list: [],
      users1: {
        firstname: "",
        lastname: "",
        nationality: "",
        email: "",
        ph: "",
        username: ""
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
      msg: "",
      token: localStorage.getItem("token")
    };
  },
  mounted: function() {
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
        method: "POST",
        headers: {
          to: localStorage.getItem("token")
        },
        url: "http://13.233.110.196/user/me/",
        data: {
          id: this.id
        }
      }).then(response => {
        this.users1.firstname = response.data.data.firstname;
        this.users1.lastname = response.data.data.lastname;
        this.users1.nationality = response.data.data.nationality;
        this.users1.email = response.data.info.email;
        this.users1.ph = response.data.info.ph;
        this.users1.username = response.data.info.username;

        console.log(response.data);
        console.log((this.list = response.data.data));
      });
      ev.preventDefault();

      axios
        .post("http://13.233.110.196/edit/user/", {
          to: this.token,
          firstname: this.users1.firstname,
          lastname: this.users1.lastname,
          email: this.users1.email,
          nationality: this.users1.nationality,
          lon: "0.00",
          lat: "0.00",
          username: this.users1.username,
          ph: this.users1.ph
          //documents: "asasa"
        })

        .then(response => {
          this.msg = response.data.msg;
          //store.commit("loginUser",response.data.token);
          //localStorage.setItem("token", response.data.token)
          this.$router.push({
            name: "slider"
          });
        })
        //this.$store.dispatch('submit1', { username, password })
        //.then(() => this.$router.push('/Home'))
        .catch(ev => {});
      ev.target.reset();
    }
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: white;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
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