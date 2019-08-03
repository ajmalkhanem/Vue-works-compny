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
                <th scope="col">
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
                    :to="'/FuelFillingHistory/' + this.id"
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
                <td style=" background: rgb(242, 235, 235)">
                  <router-link
                    :to="'/Addnewbills/' + this.id"
                    style="text-decoration: none!important;"
                  >Add new Maintenance bills</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Addfuelfilling/' + this.id"
                    style="text-decoration: none!important;"
                  >Add Fuel Filling</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Addemidetails/' + this.id"
                    style="text-decoration: none!important;"
                  >Add EMI Details</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Vehiclerenewal/' + this.id"
                    style="text-decoration: none!important;"
                  >Vehicle Renewal and Penalty Charges</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-8" style="padding-bottom: 20px">
          <h4>Add EMI Details</h4>
        </div>
      </div>
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
        amount: ""
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
        .post("http://13.233.110.196/add/charges/", {
          to: this.token,
          id: this.id,
          name: this.users1.name,
          date: this.users1.date,
          odometer: this.users1.odometer,
          amount: this.users1.amount
        })
        /*.then(response => {
    alert(that.$store.commit('LOGIN_SUCCESS', response.data.token));
    }).catch(error => {
    console.log("Error login")
    console.log(error)
    })
    this.dialog = false*/
        .then(response => {
          this.msg = response.data.msg;
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
</style>