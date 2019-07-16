<template><div>
    
        <br>
    <div class="container">
        <div class="row">
          <div class="col">
            <div id="rcorners1" style="width:500px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:rgba(245, 252, 245, 0.39);border:solid rgb(235, 238, 240) 2px;height:700px;float:left;margin-top:20px;margin-left:20px;">
                <br><br>
                  <h2><b><label style="color:cornflowerblue;">Sign up</label></b></h2><br>
                  <p>Enter your details below to create your account</p>
                        <form @submit="submit1">
                        <div class="form-group">
                          <b-row><b-col>
                          <label for="username"><b></b></label>
                        </b-col> <b-col></b-col><b-col></b-col></b-row>
                     
                        <b-row> <b-col></b-col> <b-col>
                            <input  type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Username">
                        </b-col><b-col></b-col></b-row>
                        </div>

                        <div class="form-group">
                                <b-row><b-col>
                                <label for="username"><b></b></label>
                              </b-col> <b-col></b-col><b-col></b-col></b-row>
                           
                              <b-row> <b-col></b-col> <b-col>
                                  <input  type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Password">
                              </b-col><b-col></b-col></b-row>
                              </div>

                              <div class="form-group">
                                    <b-row><b-col>
                                    <label for="username"><b></b></label>
                                  </b-col> <b-col></b-col><b-col></b-col></b-row>
                               
                                  <b-row> <b-col></b-col> <b-col>
                                      <input  type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Confirm password">
                                  </b-col><b-col></b-col></b-row>
                                  </div>


                                  <div class="form-group">
                                        <b-row><b-col>
                                        <label for="username"><b></b></label>
                                      </b-col> <b-col></b-col><b-col></b-col></b-row>
                                   
                                      <b-row> <b-col></b-col> <b-col>
                                          <input  type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Email">
                                      </b-col><b-col></b-col></b-row>
                                      </div>
                        
                        <div class="form-group">
                          <b-row> <b-col>
                          <label for="password"><b></b></label></b-col> 
                        <b-col></b-col> <b-col></b-col></b-row>
                      
                        <b-row><b-col></b-col> <b-col>
                          <input type="password" style="width:330px;background-color: rgb(233, 238, 240); text-align: center;"  required class="form-control" id="rcorners1" placeholder="Phone">
                        </b-col><b-col></b-col></b-row>
                        </div>
                        

                        <br>

                                        <button type="submit" class="btn btn-primary">Sign up</button></b-col>

                                        Already have an account <router-link to="/login" ><b>SIGNIN</b></router-link> 
                        
                      </form>
                      
                                  
                                </div>
                                
                      
          </div>
          <div class="col">
                <b-row> <b-col>
                        <img src="../assets/4.jpg" style="width: 500px;height:720px;" ></img> </b-col> 
                          <b-col></b-col> <b-col></b-col></b-row>
          </div>
        </div>
        
      </div>
 
    
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