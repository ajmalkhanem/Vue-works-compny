<template>
  <div>
    <div>
      <form @submit.prevent="submit1" enctype="multipart/form-data">
        <hr class="rr" style="margin:0!important" />
        <br />
        <div class="container">
          <h3>Edit Profile</h3>
        </div>
        <br />
        {{msg}}
        <div class="container" style="background-color: #f5f5f5;">
          <div class="row">
            <div class="col-md-4">
             <output>
      <img :src="previewUrl" v-if="previewUrl" style="width:150px;height:150px;">
      <p v-else>No image...</p>
    </output>
            </div>
            <div class="col-md-8" style="padding-top:40px!important;padding-bottom:40px!important;">
              <h5>
                <strong>Add Your Profile Picture Here</strong>
              </h5>
              <div style="padding-top:50px!important;">
                <input type="file" id="file" accept="image/*" v-on:change="uploadImage($event)" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <!--2nd-->
        <div class="container tt">
          <div class="row">
            <div class="col-md-4">
              <h5 style="padding-top:20px!important;padding-left:50px!important;">GENERAL DETAILS</h5>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label for="exampleInputEmail1" style="text-align: left!important;"></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="users1.firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="users1.lastname"
                  aria-describedby="emailHelp"
                  placeholder="Last Name "
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="users1.nationality"
                  aria-describedby="emailHelp"
                  placeholder="Nationality "
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="users1.email"
                  aria-describedby="emailHelp"
                  placeholder="Promo Reference Code "
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="users1.ph"
                  aria-describedby="emailHelp"
                  placeholder="Promo Reference Code "
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="users1.username"
                  aria-describedby="emailHelp"
                  placeholder="Promo Reference Code "
                />
              </div>
              <br />
              <p style="text-align: right!important;">
                <button type="submit">submit</button>
                <br />
                <br />
              </p>
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
  props: ["id"],

  components: {
    navbar,
    navbar1
  },
  data() {
    return {
      list: [],
      users1: {
        firstname: "",
        lastname: "",
        nationality: "",
        email: "",
        ph: "",
        username: "",
        pic: ""
      },

      msg: "",
      previewUrl:'',
      token: localStorage.getItem("token")
    };
  },
  mounted: function() {
    this.submit1();
    //alert(this.id)
  },

  methods: {
    uploadImage() {
      this.selectedFile = event.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
       const file = event.target.files[0]
      if (!file) {
        return false
      }
      if (!file.type.match('image.*')) {
        return false
      }
      const reader = new FileReader()
      const that = this
      reader.onload = function (e) {
        that.previewUrl = e.target.result
      }
      reader.readAsDataURL(file)
    
    },
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
        this.users1.pic = response.data.data.pro_pic;

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
          if (response.data.status == true) {
            alert("Successfully added");
            //imageupload
            let formData = new FormData();
            formData.append("dp", this.selectedFile);
            axios({
              method: "post",
              url: "http://13.233.110.196/customer/add/dp/",
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
                    name: "slider"
                  });
                } else {
                  alert("failed");
                }
              })
              .catch(e => {
                alert("Image Not Upload");
                this.loading = false;
              });
          } else {
            //code
            alert("failed");
          }
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