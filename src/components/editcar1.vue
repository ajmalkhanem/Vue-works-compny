<template>
  <div>
    <div>
      <form @submit.prevent="submit1" enctype="multipart/form-data">
        <hr class="rr" style="margin:0!important" >
        <br />

        <br />
        <br />
        <!--2nd-->
        <div class="container tt">
          <div class="row">
            <div class="col-md-4">
              <h4 style="padding-top:20px!important;padding-left:50px!important;">UPDATE DETAILS</h4>
              {{msg}}
            </div>
            <div class="col-md-5 yy">
              <div style="padding-top:50px!important;">
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Vehicle Name</h5>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="users1.vehname"
                    aria-describedby="emailHelp"
                    placeholder="Vehicle Name"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Owner Name</h5>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="users1.onname"
                    aria-describedby="emailHelp"
                    placeholder="Owner Name "
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Traffic Plate Number</h5>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="users1.platenum"
                    aria-describedby="emailHelp"
                    disabled
                    placeholder="Traffic Plate Number "
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Tc Number</h5>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="users1.tcnum"
                    aria-describedby="emailHelp"
                    placeholder="TC Number"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Registration Date</h5>
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="users1.rgdate"
                    aria-describedby="emailHelp"
                    placeholder="Registration Date"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Expiry Date</h5>
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="users1.exdate"
                    aria-describedby="emailHelp"
                    placeholder="Expiry Date"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Insurance Expiry Date</h5>
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="users1.inexdate"
                    aria-describedby="emailHelp"
                    placeholder="Insurance Expiry Date"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Policy Expiry Date</h5>
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="users1.polexdate"
                    aria-describedby="emailHelp"
                    placeholder="Policy Expiry Date"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Business Documents</h5>
                  </label>
                  <div class="container" style="background-color:white"></div>
                  <div class="container">
                    <p>
                      <input type="file" />
                    </p>
                  </div>
                  <div class="container" style="background-color:white"></div>
                  <div class="container">
                    <p>
                      <input type="file" />
                    </p>
                  </div>
                </div>
                <br />
                <p style="text-align: left!important;">
                  <b-button type="submit" variant="info">Update & Save</b-button>
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />
      </form>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar";
import navbar1 from "@/components/navbar1";

import axios from "axios";
//import store from "../store";
export default {
  props:['id'],

  components: { navbar, navbar1 },
  data() {
    return {
      list: [],
      users1: {
        vehname: "",
        onname: "",
        platenum: "",
        tcnum: "",
        rgdate: "",
        exdate: "",
        inexdate: "",
        polexdate: ""
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
        url: "http://13.233.110.196/view/vehicle/",
        data: {
          id: this.id
        }
      }).then(response => {
        this.users1.vehname = response.data.data.vehicleName;
        this.users1.onname = response.data.data.ownerName;
        this.users1.platenum = response.data.data.plateNo;
        this.users1.tcnum = response.data.data.tcNo;
        this.users1.rgdate = response.data.data.registerDate.slice(0, 10);
        this.users1.exdate = response.data.data.expiryDate.slice(0, 10);
        this.users1.inexdate = response.data.data.inexpiryDate.slice(0, 10);
        this.users1.polexdate = response.data.data.polexpiryDate.slice(0, 10);

        console.log(response.data);
        console.log((this.list = response.data.data));
      });
      ev.preventDefault();
      var datas1 = {};

      datas1["veh"] = this.users1.vehname;
      datas1["owner"] = this.users1.onname;
      //datas1["plate"] = this.users1.platenum;
      datas1["tc"] = this.users1.tcnum;
      datas1["redate"] = this.users1.rgdate;
      datas1["pol"] = this.users1.exdate;
      datas1["in"] = this.users1.inexdate;
      datas1["polex"] = this.users1.polexdate;

      console.log(datas1);

      axios
        .post("http://13.233.110.196/edit/vehicle/", {
          to: this.token,
          id: this.id,
          vehicleName: this.users1.vehname,
          ownerName: this.users1.onname,
          //plateNo: this.users1.platenum,
          tcNo: this.users1.tcnum,
          registerDate: this.users1.rgdate,
          expiryDate: this.users1.exdate,
          inexpiryDate: this.users1.inexdate,
          polexpiryDate: this.users1.polexdate,
          documents: "asasa"
        })

        .then(response => {
          this.msg = response.data.msg;
          //store.commit("loginUser",response.data.token);
          //localStorage.setItem("token", response.data.token)
          this.$router.push({
          name: "newpage"
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
.rr {
  border: 1px solid rgb(240, 240, 240) !important;
  border-radius: 3px !important;
}
#bu {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;

  border: none;
  border: solid 2px blue !important;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0);
  font-size: 25px;
}
.ee {
  background-color: azure;
}
.tt {
  background-color: #f5f5f5;
}
.yy {
  padding-top: 40px !important;
}
</style>