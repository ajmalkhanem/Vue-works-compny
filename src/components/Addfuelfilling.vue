<template>
  <div>
    <hr class="rr" style="margin:0!important;" />
    <div class="container">
      <div class="col-md-12 row">
        <div class="col-md-6">
          <p style="color:black!important;padding-top:20px!important;">
            <a href="/" style="text-decoration: none!important;">
              <strong>Home</strong>
            </a> > &nbsp;
            <strong>My Account</strong>
          </p>
        </div>
      </div>
      <div class="col-md-12 row" style="padding-top:40px!important;">
        <div class="col-md-4">
          <table class="table table-bordered">
            <thead class="oo">
              <tr>
                <th scope="col" style=" background: rgb(242, 235, 235)">
                  <router-link
                    :to="'/profile/' + this.id"
                    style="text-decoration: none!important;"
                  >Maintenance Analitics</router-link>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <router-link
                    :to="'/MaintenanceHistory/' + this.id"
                    style="text-decoration: none!important;"
                  >Maintenance History</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/FuelFillinHistory/' + this.id"
                    style="text-decoration: none!important;"
                  >Fuel Filling History</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/PenaltyHistory/' + this.id"
                    style="text-decoration: none!important;"
                  >Penalty History</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Addnewbills/' + this.id"
                    style="text-decoration: none!important;"
                  >
                    Add new
                    Maintenance bills
                  </router-link>
                </td>
              </tr>
              <tr>
                <td  style=" background: rgb(242, 235, 235)">
                  <router-link
                    :to="'/Addfuelfilling/' + this.id"
                    style="text-decoration: none!important;"
                  >
                    Add Fuel
                    Filling
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Addemidetails/'+ this.id"
                    style="text-decoration: none!important;"
                  >Add EMI Details</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Vehiclerenewal/' + this.id"
                    style="text-decoration: none!important;"
                  >
                    Vehicle
                    Renewal and Penalty Charges
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <b-container style="background-color:white;">
            <h5>ADD FUEL FILLING</h5>
            <br />
            {{msg }}{{"nj"}}
            <div
              style="padding-left:20px!important;padding-right:20px!important;background-color:white;border:solid rgb(235, 238, 240) 2px;padding-bottom:20px!important;padding-top:20px!important;"
            >
              <form @submit.prevent="submit1">
                <div class="container3">
                  <div class="form-group">
                    <label for="policy">
                      <h5>Fuel Filling Title</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="users1.name"
                      placeholder="Task Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="policy">
                      <h5>Date</h5>
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="users1.date"
                      placeholder="Policy Expiry Date"
                    />
                  </div>
                  <div class="form-group">
                    <label for="policy">
                      <h5>Odometer Reading</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="users1.odometer"
                      placeholder="Odometer"
                    />
                  </div>

                  <div class="form-group">
                    <label for="policy">
                      <h5>Fuel Amount</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="users1.amount"
                      placeholder="Amount"
                    />
                  </div>

                  <div class="form-group">
                    <label for="policy">
                      <h5>Fuel Station</h5>
                    </label>
                    <select class="form-control" v-model="users1.station">
                      <option value="volvo">select station</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="policy">
                      <h5>Fuel Quantity</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="users1.remarks"
                      placeholder="if any"
                    />
                  </div>
                </div>
                <b-container style="background-color:white;">
                  <div class="form-group">
                    <label for="policy" style="color: cornflowerblue;">
                      <h4></h4>
                    </label>
                    <b-button type="submit" variant="outline-primary">Save</b-button>
                  </div>
                </b-container>
              </form>
            </div>
          </b-container>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import axios from "axios";
//import store from "../store";
export default {
  props: ["id"],

  data() {
    return {
      users1: {
        name: "",
        date: "",
        odometer: "",
        amount: "",
        station: "",
        remarks: ""
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
  methods: {
    submit1(ev) {
      ev.preventDefault();
      var datas1 = {};

      datas1["veh"] = this.users1.vehname;
      datas1["owner"] = this.users1.onname;
      datas1["plate"] = this.users1.platenum;
      datas1["tc"] = this.users1.tcnum;
      datas1["redate"] = this.users1.rgdate;
      datas1["pol"] = this.users1.exdate;
      datas1["in"] = this.users1.inexdate;
      datas1["polex"] = this.users1.polexdate;

      console.log(datas1);

      axios
        .post("http://13.233.110.196/add/fuelfill/", {
          to: this.token,
          id: this.id,
          title: this.users1.name,
          date: this.users1.date,
          odometer: this.users1.odometer,
          amount: this.users1.amount,
          station: this.users1.station,
          quantity: this.users1.remarks
        })
        /*.then(response => {
  alert(that.$store.commit('LOGIN_SUCCESS', response.data.token));
  }).catch(error => {
  console.log("Error login")
  console.log(error)
  })
  this.dialog = false*/
        .then(response => {
          alert((this.msg = response.data.msg));
          //console.log(response.data.token)
          //store.commit("loginUser",response.data.token);
          //localStorage.setItem("token", response.data.token)
          // this.$router.push({
          // name: "userprofile"
          // });
        })
        //this.$store.dispatch('submit1', { username, password })
        //.then(() => this.$router.push('/Home'))
        .catch(ev => {});
      ev.target.reset();
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
.oo {
  color: blue !important;
}

.table {
  width: 80% !important;
}

.th {
  color: cornflowerblue;
}

.rr {
  border: 1px solid rgb(240, 240, 240) !important;
  border-radius: 3px !important;
}
.squaree_bt {
  display: inline-block;
  padding: 10px 40px !important;

  text-decoration: none !important;
  color: black !important;
  background: rgb(179, 158, 158) !important;
  transition: 0.4s;
}
</style>