<template>
    <div>
        <hr class="rr" style="margin:0!important"><br>
        <div class="container"><h3>Edit Profile</h3></div><br>
        <div class="container" style="background-color: #f5f5f5;" >
      <div class="row">
          <div class="col-md-4" >
           <img src="../assets/download1.png">
          </div>
          <div class="col-md-8" style="padding-top:40px!important;padding-bottom:40px!important;">
          <h5><strong>Add Your Profile Picture Here</strong></h5>
          <div style="padding-top:50px!important;">
          <router-link to="" id="bu" style="text-decoration: none!important;" >Upload Image</router-link>
          </div>
          </div></div>
      </div>
      <br><br>
      <!--2nd-->
      <div class="container tt">
          <div class="row">
              <div class="col-md-4">  <h5 style="padding-top:20px!important;padding-left:50px!important;">GENERAL DETAILS</h5></div>
              <div class="col-md-5">
            
            
              <form @submit="onSubmit" style="padding-top:30px!important;">
                    
                        
                    <div class="form-group">
                       
                      <label for="exampleInputEmail1" style="text-align: left!important;"></label>
                      <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="First Name">
                      
                    </div>
                    
                   
                       
                              <div class="form-group">
                                    <input type="text" class="form-control" id="exampleI" aria-describedby="emailHelp" placeholder="Last Name " >
                                         
                                       </div>
                                       <div class="form-group">
                                            <input type="text" class="form-control" id="exampleI" aria-describedby="emailHelp" placeholder="Nationality " >
                                                 
                                               </div>
                                               <div class="form-group">
                                                    <input type="text" class="form-control" id="exampleI" aria-describedby="emailHelp" placeholder="Promo Reference Code " >
                                                         
                                                       </div>
                                      <br>
                    <p style="text-align: right!important;">
                    <router-link to="" id="bu">Update & Continue</router-link>
                   <br><br>
                    <div class="bord" v-if=seen style="color:black!important;background-color:white!important;padding-left:10px!important;padding-right:10px!important;padding-top:10px!important;padding-bottom:10px!important;font-weight:bold!important;">
                      {{msg}}
                   </div> 
                </p>
                    
                  </form></div><br>
          </div>
      </div><br>
    </div>
</template>
<script>
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
</style>