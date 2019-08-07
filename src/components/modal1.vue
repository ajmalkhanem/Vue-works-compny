<template>
  <div>
    <b-container style="background-color:white;">
      {{msg}}
      <form @submit.prevent="submit1">
        <div class="container3">
          <div class="form-group">
            <label for="policy" style="color: cadetblue;">
              <b>Task Name:</b>
            </label>
            <input
              type="text"
              class="form-control"
              v-model="users1.name"
              style="background-color: rgb(233, 238, 240);"
              placeholder="Task Name"
            />
          </div>
          <div class="form-group">
            <label for="policy" style="color: cadetblue;">
              <b>Date:</b>
            </label>
            <input
              type="date"
              class="form-control"
              v-model="users1.date"
              style="background-color: rgb(233, 238, 240);"
              placeholder="Policy Expiry Date"
            />
          </div>
          <div class="form-group">
            <label for="policy" style="color: cadetblue;">
              <b>Odometer Reading</b>
            </label>
            <input
              type="text"
              class="form-control"
              v-model="users1.odometer"
              style="background-color: rgb(233, 238, 240);"
              placeholder="Odometer"
            />
          </div>

          <div class="form-group">
            <label for="policy" style="color: cadetblue;">
              <b>Service Amount</b>
            </label>
            <input
              type="text"
              class="form-control"
              v-model="users1.amount"
              style="background-color: rgb(233, 238, 240);"
              placeholder="Amount"
            />
          </div>

          <div class="form-group">
            <label for="policy" style="color: cadetblue;">
              <b>Service Staion:</b>
            </label>
            <select
              class="form-control"
              v-model="users1.station"
              style="background-color: rgb(233, 238, 240);"
            >
              <option value="volvo">select station</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div class="form-group">
            <label for="policy" style="color: cadetblue;">
              <b>Remarks</b>
            </label>
            <input
              type="text"
              class="form-control"
              v-model="users1.remarks"
              style="background-color: rgb(233, 238, 240);"
              placeholder="if any"
            />
          </div>
        </div>
        <b-container style="background-color:white;">
          <div class="form-group">
            <label for="policy" style="color: cadetblue;">
              <b>Select Category</b>
            </label>
            <b-row>
              <b-col>
                <b-button variant="info">Tyre Charge</b-button>
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col>
                <b-button variant="info">General Service</b-button>
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col>
                <b-button variant="info">Accessories Change</b-button>
              </b-col>
            </b-row>
          </div>
          <div class="form-group">
            <label for="policy" style="color: cadetblue;">
              <b></b>
            </label>
            <b-button type="submit" variant="outline-primary">Save</b-button>
          </div>
        </b-container>
      </form>
    </b-container>
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
      //alert(this.id);
      axios
        .post("http://13.233.110.196/add/maintainbill/", {
          to: this.token,
          id: this.id,
          name: this.users1.name,
          date: this.users1.date,
          odometer: this.users1.odometer,
          amount: this.users1.amount,
          station: this.users1.station,
          remarks: this.users1.remarks,
          category: "dsdss"
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
