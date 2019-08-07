<template>
  <div>
    <div>
      <form @submit.prevent="submit1" enctype="multipart/form-data">
        <hr class="rr" style="margin:0!important" />
        <br />
        <div class="container" style="background-color: white!important;">
          <h3 style="padding-top:20px!important;">Add your vehicle details and upload documents</h3>
        </div>
        <br />
        <br />
        <!--2nd-->
        <div class="container tt">
          <div class="row">
            <div class="col-md-4">
              <h4 style="padding-top:20px!important;padding-left:50px!important;">BASIC DETAILS</h4>
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
                    aria-describedby="emailHelp"
                    v-model="users1.rgdate"
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
                    aria-describedby="emailHelp"
                    v-model="users1.exdate"
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
                    aria-describedby="emailHelp"
                    v-model="users1.polexdate"
                    placeholder="Policy Expiry Date"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style="text-align: left!important;">
                    <h5>Vehicle Images</h5>
                  </label>
                  <div class="container" style="background-color:white"></div>
                  <div class="container">
                    <p>
                      <input
                        type="file"
                        id="file"
                        accept="image/*"
                        v-on:change="uploadImage($event)"
                      />
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
                  <b-button type="submit" variant="info">Register</b-button>
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
import navbar2 from "@/components/navbar2";
import navbar1 from "@/components/navbar1";

import axios from "axios";
//import store from "../store";
export default {
  components: { navbar2, navbar1 },
  data() {
    return {
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
      obj: "",
      selectedFile: "",
      id: "",
      token: localStorage.getItem("token")
    };
  },
  methods: {
    uploadImage() {
      this.selectedFile = event.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
    },
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
        .post("http://13.233.110.196/add/vehicle/", {
          to: this.token,
          vehicleName: this.users1.vehname,
          ownerName: this.users1.onname,
          plateNo: this.users1.platenum,
          tcNo: this.users1.tcnum,
          registerDate: this.users1.rgdate,
          expiryDate: this.users1.exdate,
          inexpiryDate: this.users1.inexdate,
          polexpiryDate: this.users1.polexdate
          //documents: "asasa"
        })
        /*.then(response => {
alert(that.$store.commit('LOGIN_SUCCESS', response.data.token));
}).catch(error => {
console.log("Error login")
console.log(error)
})
this.dialog = false*/
        .then(response => {
          this.obj = response.data.msg;
          if (response.data.status == true) {
            alert("Successfully added");
            //imageupload
            let formData = new FormData();
            formData.append("document", this.selectedFile);
            formData.append("id", response.data.vid);
            axios({
              method: "post",
              url: "http://13.233.110.196/vehicle/add/document/",
              data: formData,

              headers: {
                "Content-Type": "multipart/form-data",
                to: localStorage.getItem("token")
              }
            })
              .then(response => {
                if (response.data.status == true) {
                  alert("Success");
                  this.$router.push({
                    name: "newpage"
                  });
                } else {
                  alert("failed");
                }
              })
              .catch(e => {
                alert("Image upload Not success");
                this.loading = false;
              });
          } else {
            //code
            alert("failed");
          }

          this.$router.push({
            name: "newpage"
          });
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
</style>