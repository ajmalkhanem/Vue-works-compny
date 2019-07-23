<template>
    <div>
            <b-alert show dismissible>
                    Visit your vehicles .Update new ONES
                  </b-alert>
        <br>
     <b-row>
         
      <b-col>
              <img src="../assets/car2.jpg">
          </b-col>
          <b-col>
                <img src="../assets/spare.png" style="width:700px;height:300px;">
            </b-col>
        </b-row>
          <b-row>
          
          <b-col><br>
 <div>
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="."><b-card-text>
      <form action="">
        <b-row>
          <b-col>
  <div class="form-group">
        <img src="../assets/car.jpg" style="width:200px;height:200px;">   
         
  </div></b-col>
  <b-col>
  <div class="form-group">
      <h2 for="email"style="color: black;"><b>Audi OP</b></h2><br>
      <h6><b>DL 34 OS 4G</b></h6>
      <h6><b>PETROL ENGINE</b></h6>
      <h6><b>BRANDED VEHICLE</b></h6>

    </div></b-col>
    <b-col>
            <div class="form-group">
                <h2 for="email"style="color: black;"><b>Audi OP</b></h2><br>
                <h6><b>DL 34 OS 4G</b></h6>
                <h6><b>PETROL ENGINE</b></h6>
                <h6><b>BRANDED VEHICLE</b></h6>
          
              </div></b-col>
              <b-col>
                    <div class="form-group">
                        <h2 for="email"style="color: black;"><b>Audi OP</b></h2><br>
                        <h6><b>DL 34 OS 4G</b></h6>
                        <h6><b>PETROL ENGINE</b></h6>
                        <h6><b>BRANDED VEHICLE</b></h6>
                  
                      </div></b-col>
    <b-col>
    <div class="form-group">
            <div class="chip">
                   <router-link to=""><img src="../assets/share.png" alt="Person" width="96" height="96"></router-link> 
                    
                  </div>    
                  <div class="chip">
                   <router-link to=""><img src="../assets/se.jpg" alt="Person" width="96" height="96"></router-link> 
                        
                      </div>  
                     
                        
      </div></b-col>
      </b-row>
      <b-row><b-col>
  <div class="form-group">
      
   </div></b-col>
  <b-col>
      <div class="form-group">
      </div></b-col></b-row>

      <b-row><b-col>
        <div class="form-group">
            <B>Description:</B>
            <P>Each car payment consists of two parts: the principal 
                (the original amount of the loan) and the interest. Interest on
                 car loans depends primarily on three main factors: the credit rating of the car buyer, 
                whether the car is new or used, and the price of the car.</P>
            </div></b-col>
        </b-row>

  <div class="form-group form-check">
    <label class="form-check-label">
    </label>
  </div>
</form>
      </b-card-text></b-tab>
      <b-tab title="View / Edit"><b-card-text>
<editcar></editcar>      
</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
          </b-col>
          
        </b-row>
        <br>
        <br><br>      
        <router-link to="/addcar">
            <b-button variant="info">+ Add New</b-button></router-link>
         

        

  
  
    </div></template>
    <script>
    import navbar from '@/components/navbar'
    import navbar1 from '@/components/navbar1'
    import editcar from '@/components/editcar'


    import documentreg from '@/components/documentreg'
      
 export default {
    components: {
   
   navbar,
   documentreg,
   navbar1,
   editcar
   
   
 },
}

    </script>
    <style>

#rcorners1 {
border-radius: 25px;
padding: 20px; 
width: 200px;
height: 8px; 
text-align: center; 
}

</style>
<style>
.chip {
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color:white;
}

.chip img {
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>


