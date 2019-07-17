<template><div>
    
        <br><br><br>
    <div class="container">
        <div class="row">
          <div class="col">
            <div id="rcorners1" style="width:500px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:660px;float:left;margin-top:20px;margin-left:20px;">
                <br><br><br>
                  <h2><b><label style="color:cornflowerblue;">Sign in</label></b></h2><br>
                  <p>Enter your details below to access your account</p>
                        <form @submit.prevent="submit1">
                        <div class="form-group">
                          <b-row><b-col>
                          <label for="username"><b></b></label>
                        </b-col> <b-col></b-col><b-col></b-col></b-row>
                     
                        <b-row> <b-col></b-col> <b-col>
                            <input  type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Username">
                        </b-col><b-col></b-col></b-row>
                        </div>
                        
                        <div class="form-group">
                          <b-row> <b-col>
                          <label for="password"><b></b></label></b-col> 
                        <b-col></b-col> <b-col></b-col></b-row>
                      
                        <b-row><b-col></b-col> <b-col>
                          <input type="password" style="width:330px;background-color: rgb(233, 238, 240); text-align: center;"  required class="form-control" id="rcorners1" placeholder="Password">
                        </b-col><b-col></b-col></b-row>
                        </div>
                        <div class="form-group">
                               <b-row> <b-col></b-col><b-col>
                         <router-link to="/forgot" ><label style="color: lightslategray;">Forgot password</label></router-link></b-col>
                                      <b-col></b-col></b-row>
                        </div>
                        

                        <br>

                                        <button type="submit" class="btn btn-primary">Sign in</button></b-col>

                                        create your account <router-link to="/signup" ><b>SIGNUP</b></router-link> 
                        
                      </form>
                      <br><br>
                      <div class="form-group">
                        <b-row> <b-col>
                          <button type="button" style="width: 280px;" class="btn btn-outline-danger">signin with google</button>
                        </b-col>
                               </b-row><br>
                               <b-row> <b-col>
                                <button type="button" style="width: 280px;" class="btn btn-outline-primary">signin with facebook</button>
                              </b-col>
                                     </b-row>
                               
                 </div>
                                  
                                </div>
                                
                      
          </div>
          <div class="col">
                <b-row> <b-col>
                        <img src="../assets/4.jpg" style="width: 500px;height:680px;" ></img> </b-col> 
                          <b-col></b-col> <b-col></b-col></b-row>
          </div>
        </div>
        
      </div>
 
    <br><br><br>
    </div>
    
</template>
<style>
 
#rcorners1 {
  border-radius: 25px;
  padding: 20px; 
  width: 200px;
  height: 8px;  
}

</style>