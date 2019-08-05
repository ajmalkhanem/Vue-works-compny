<template>
    <div>
      <div>
        <form @submit.prevent="submit1" enctype="multipart/form-data" >
        <hr class="rr" style="margin:0!important"><br>
        
         <br>
         <br>
      <!--2nd-->
      <div class="container tt">
          <div class="row">
              <div class="col-md-4">  <h4 style="padding-top:20px!important;padding-left:50px!important;">UPDATE DETAILS</h4>
             
            </div>
              <div class="col-md-5 yy" >
            
            
              <div style="padding-top:50px!important;">
                    
                        
                    <div class="form-group">
                      
                      <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Vehicle Name</h5></label>
                      <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Vehicle Name">
                      
                    </div>
                    
                   
                       
                              <div class="form-group">
                                    <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Owner Name</h5></label>
                                    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Owner Name " >
                                         
                                       </div>
                                       <div class="form-group">
                                            <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Traffic Plate Number</strong></h5></label>
                                            <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Traffic Plate Number " >
                                                 
                                               </div>
                                               <div class="form-group">
                                                    <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Tc Number</h5></label>
                                                    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="TC Number" >
                                                         
                                                       </div>
                                                       <div class="form-group">
                                                            <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Registration Date</h5></label>
                                                        <input type="date" class="form-control"  aria-describedby="emailHelp" placeholder="Registration Date" >
                                                             
                                                           </div>
                                                           <div class="form-group">
                                                                <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Expiry Date</h5></label>
                                                            <input type="date" class="form-control"  aria-describedby="emailHelp" placeholder="Expiry Date" >
                                                                 
                                                               </div>
                                                               <div class="form-group">
                                                                    <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Insurance Expiry Date</h5></label>
                                                                <input type="date" class="form-control"  aria-describedby="emailHelp" placeholder="Insurance Expiry Date" >
                                                                     
                                                                   </div>
                                                                   <div class="form-group">
                                                                        <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Policy Expiry Date</h5></label>
                                                                    <input type="date" class="form-control"  aria-describedby="emailHelp" placeholder="Policy Expiry Date" >
                                                                         
                                                                       </div>
                                                                       <div class="form-group">
                                                                            <label for="exampleInputEmail1" style="text-align: left!important;"><h5>Business Documents</h5></label>
                                                                            <div class="container" style="background-color:white">
                                                                                </div>
                                                                              <div class="container">
                                                                                <p>
                                                                                  <input type="file"></p>
                                                                              </div>
                                                                              <div class="container" style="background-color:white">
                                                                                </div>
                                                                              <div class="container">
                                                                                <p>
                                                                                  <input type="file"></p>
                                                                              </div>
                                                                            
                                                                             
                                                                           </div>
                                      <br>
                    <p style="text-align: left!important;">
  <b-button type="submit" variant="info">Update & Save</b-button>
                   <br><br></p>
                   
                  
                   
                    
                  </div></div><br>
          </div>
      </div><br></form>
    </div></div>
</template>
<script>
// import navbar from "@/components/navbar";
// import navbar1 from "@/components/navbar1";

// import axios from "axios";
// //import store from "../store";
// export default {
//   components: { navbar, navbar1 },
//   data() {
//     return {
//       users1: {
//         firstname: "",
//         lastname: "",
//         nation: "",
//         code: ""
//       },
//       msg1: "",
//       selectedFile: "",
//       id: ""
//     };
//   },
//   methods: {
//     uploadImage() {
//       this.selectedFile = event.target.files[0];
//       this.url = URL.createObjectURL(this.selectedFile);
//     },
//     submit1(ev) {
//       ev.preventDefault();
//       var data = {};
//       data["firstname"] = this.users1.firstname;
//       data["lastname"] = this.users1.lastname;
//       data["nationality"] = this.users1.nation;
//       data["ref_code"] = this.users1.code;
//       axios({
//         method: "post",
//         url: "http://13.233.110.196/user/customer/",
//         data: data,
//         headers: {
//           to: localStorage.getItem("token")
//         }
//       }).then(response => {
//         if(response.data.status == true){
//           alert("Successfully added");
//           //imageupload
//           let formData = new FormData();
//           formData.append("dp", this.selectedFile);
//           axios({
//             method: "post",
//             url: "http://13.233.110.196/customer/add/dp/",
//             data: formData,
//             headers: {
//               "Content-Type": "multipart/form-data",
//               to: localStorage.getItem("token")
//             }
//           })
//             .then(response => {
//               if (response.data.status == true) {
//                 alert("Success");
//                 this.$router.push({
//               name: "userprofile"
//             });
//               } else {
//                 alert("failed");
//               }
//             })
//             .catch(e => {
//               alert("Too Large image!! Failed");
//               this.loading = false;
//             });
//         }
//         else{
//           //code
//           alert("failed")
//         }
//         })
//         .catch(e => {
//           this.loading = false;
//           this.err = e.response.data.msg;
//           alert(this.err);
//         });
//     },
//   }
// };
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
    background-color: azure;
}
.tt{
    background-color:  #f5f5f5;
}
.yy{
    padding-top:40px!important;
}
</style>