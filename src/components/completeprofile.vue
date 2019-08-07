<template>
    <div>
      <div>
        <form @submit.prevent="submit1" enctype="multipart/form-data" >
        <hr class="rr" style="margin:0!important"><br>
        <div class="container ik"><h3>Complete Profile</h3></div><br>
        <div class="container" style="background-color: #f5f5f5;" >
      <div class="row">
          <div class="col-md-4" >
           <img src="../assets/download1.png">
          </div>
          <div class="col-md-8" style="padding-top:40px!important;padding-bottom:40px!important;">
          <h5><strong>Add Your Profile Picture Here</strong></h5>
          <div style="padding-top:50px!important;">
           <input
                              type="file"
                              id="file"
                              accept="image/*"
                              v-on:change="uploadImage($event)"
                              
                            />
          </div>
          </div></div>
      </div>
      <br><br>
      <!--2nd-->
      <div class="container tt">
          <div class="row">
              <div class="col-md-4">  <h5 style="padding-top:20px!important;padding-left:50px!important;">GENERAL DETAILS</h5></div>
              <div class="col-md-5">
            
            
              <div style="padding-top:30px!important;">
                    
                        
                    <div class="form-group">
                       
                      <label for="exampleInputEmail1" style="text-align: left!important;"></label>
                      <input type="text" class="form-control" v-model="users1.firstname" aria-describedby="emailHelp" placeholder="First Name">
                      
                    </div>
                    
                   
                       
                              <div class="form-group">
                                    <input type="text" class="form-control" v-model="users1.lastname" aria-describedby="emailHelp" placeholder="Last Name " >
                                         
                                       </div>
                                       <div class="form-group">
                                            <input type="text" class="form-control" v-model="users1.nation" aria-describedby="emailHelp" placeholder="Nationality " >
                                                 
                                               </div>
                                               <div class="form-group">
                                                    <input type="text" class="form-control" v-model="users1.code" aria-describedby="emailHelp" placeholder="Promo Reference Code " >
                                                         
                                                       </div>
                                      <br>
                    <p style="text-align: right!important;">
  <b-button type="submit" variant="info">Register</b-button>
                   <br><br></p>
                    
                    
                  </div></div><br>
          </div>
      </div><br></form>
    </div></div>
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
        firstname: "",
        lastname: "",
        nation: "",
        code: ""
      },
      msg1: "",
      selectedFile: "",
      id: ""
    };
  },
  methods: {
    uploadImage() {
      this.selectedFile = event.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
    },
    submit1(ev) {
      ev.preventDefault();
      var data = {};
      data["firstname"] = this.users1.firstname;
      data["lastname"] = this.users1.lastname;
      data["nationality"] = this.users1.nation;
      data["ref_code"] = this.users1.code;
      axios({
        method: "post",
        url: "http://13.233.110.196/user/customer/",
        data: data,
        headers: {
          to: localStorage.getItem("token")
        }
      }).then(response => {
        
        if(response.data.status == true){
           store.commit("logiUser", response.data.status);
          localStorage.setItem("new1", response.data.status);
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
              alert("Image upload Not Success");
               this.$router.push({
              name: "slider"
            });
              this.loading = false;
            });
        }
        else{
          //code
          alert("failed")
        }
        })
        .catch(e => {
          this.loading = false;
          this.err = e.response.data.msg;
          alert(this.err);
        });
    },
  }
};
</script>
<style>
     .rr {
    border: 1px solid rgb(240, 240, 240) !important;
    border-radius: 3px !important;
  }
  #bu {
     padding-top:10px;
     padding-bottom:10px;
     padding-right:10px;
     padding-left:10px;
     
     border:none;
     border:solid 2px blue!important;
     border-radius: 5px;
     background: rgba(255, 255, 255,0);
     font-size: 25px;
}
.ee{
    background-color:white!important;
}
.tt{
    background-color:  white!important;
}
.ik{
  background-color:  white!important;
}
</style>