<template>
    <div>
      <div>
        <form @submit="submit1" enctype="multipart/form-data">
          <hr class="rr" style="margin:0!important" />
          <br />
          <div class="container">
            <h3>Complete Profile</h3>
          </div>
          <br />
          <div class="container" style="background-color: #f5f5f5;">
            <div class="row">
              <div class="col-md-4">
                <img src="../assets/download1.png" />
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
                <div style="padding-top:30px!important;">
                  <div class="form-group">
                    <label for="exampleInputEmail1" style="text-align: left!important;"></label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="users1.busname"
                      aria-describedby="emailHelp"
                      placeholder="Business Name"
                    />
                  </div>
  
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="users1.busreg"
                      aria-describedby="emailHelp"
                      placeholder="Business Reg Number "
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="users1.busemail"
                      aria-describedby="emailHelp"
                      placeholder="Coperative Mail "
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="users1.busaddress"
                      aria-describedby="emailHelp"
                      placeholder="Address "
                    />
                  </div>
                  <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        v-model="users1.busaddress"
                        aria-describedby="emailHelp"
                        placeholder="Address "
                      />
                    </div>
                  <br />
                  
                </div>
              </div>
              <br />
            </div>
          </div>

          <br />
          <div class="container" style="background-color: #f5f5f5;">
              <div class="row">
                <div class="col-md-4">
                  <img src="" />
                </div>
                <div class="col-md-8" style="padding-top:40px!important;padding-bottom:40px!important;">
                  <h5>
                    <strong>Upload Business Documents Here</strong>
                  </h5>
                  <div style="padding-top:50px!important;">
                    <input type="file" id="file" accept="image/*" v-on:change="uploadImage($event)" />
                  </div>
                  <div style="padding-top:50px!important;">
                      <input type="file" id="file" accept="image/*" v-on:change="uploadImage($event)" />
                    </div>
                </div>
              </div><p align="center">
                  <b-button type="submit" variant="info">Register</b-button>
                  <br />
                  <br />
                </p>
            </div>
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
        components: { navbar, navbar1 },
        data() {
          return {
            users1: {
              busname: "",
              busreg: "",
              busemail: "",
              busaddress: ""
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
            selectedFile1: "",
            selectedFile2: "",

            selectedFile3: "",

      id: "",
            token: localStorage.getItem("token")
          };
        },
        methods: {
          uploadImage() {
      this.selectedFile1 = event.target.files[0];
      this.selectedFile2 = event.target.files[0];
      this.selectedFile3 = event.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile1);
      this.url = URL.createObjectURL(this.selectedFile2);
      this.url = URL.createObjectURL(this.selectedFile3);
    },
          submit1(ev) {
            ev.preventDefault();
            var datas1 = {};
      
            datas1["busname"] = this.users1.busname;
            datas1["busreg"] = this.users1.busreg;
            datas1["busemail"] = this.users1.busemail;
            datas1["busaddress"] = this.users1.busaddress;
      
            console.log(datas1);
      
            //  axios({
            //   method: 'POST',
            //    url: 'http://ghgj.com',
            //    data : 'datas',
            //    contentType: 'application/json; charset=utf-8',
            //    dataType: 'json',
            //  })
            axios
              .post("http://13.233.110.196/user/bussiness/", {
                to: this.token,
                name: this.users1.busname,
                reg_no: this.users1.busreg,
                cor_email: this.users1.busemail,
                address: this.users1.busaddress,
                category: "5d36b2b42b4842377c2d665d"
              })
              /*.then(response => {
      alert(that.$store.commit('LOGIN_SUCCESS', response.data.token));
      }).catch(error => {
      console.log("Error login")
      console.log(error)
      })
      this.dialog = false*/
              .then(response => {
          if (response.data.status == true) {
            alert("Successfully added");

            //imageupload
            let formData = new FormData();
            formData.append("dp", this.selectedFile1);
            formData.append("reg", this.selectedFile2);

            formData.append("lic", this.selectedFile3);

            axios({
              method: "post",
              url: "http://13.233.110.196/business/upload/",
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data",
                to: localStorage.getItem("token")
              }
            })
              .then(response => {
                if (response.data.status == true) {
                 // store.commit("completedUser", response.data.data);
                  // localStorage.setItem("complete", 'new');
                  alert("Success");
                  this.$router.push({
                    name: "slider"
                  });
                } else {
                  alert("failed");
                }
              })
              .catch(e => {
                alert("Image upload Not Success");
                store.commit("completedUser", response.data.data);
                this.$router.push({
                  name: "slider"
                });
                this.loading = false;
              });
          } else {
            //code
            alert("failed");
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

