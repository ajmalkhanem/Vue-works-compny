           <template>
        <div>
          <div class="chip">
            <img src="../assets/n.jpg" alt="Person" style="width:170px; height:170px;">
            
          </div>
          <div class="chip">
              <h3><b>Ajmal Khan</b></h3>
              <h6 style="color: blue;"><b>9446768784</b></h6>
            </div>
        <br><br><br><br><br><br><br>
                <b-tabs content-class="mt-3">
                  <b-tab title="PROFILE" active><br>
                    <p><b-row>
          <b-col>
  <div class="form-group">
    <label for="email" style="color: cadetblue;"><b>Email address:</b></label>
    <input type="email" class="form-control" id="email" style="background-color: rgb(233, 238, 240);text-align: center;" >
  </div></b-col>
  <b-col>
  <div class="form-group">
      <label for="email"style="color: cadetblue;"><b>Email address:</b></label>
      <input type="email" class="form-control" id="email" style="background-color: rgb(233, 238, 240);text-align: center;" >
    </div></b-col>
    <b-col>
    <div class="form-group">
        <label for="email"style="color: cadetblue;"><b>Email address:</b></label>
        <input type="email" class="form-control" id="email" style="background-color: rgb(233, 238, 240);text-align: center;" >
      </div></b-col>
      </b-row>
      <b-row><b-col>
  <div class="form-group">
    <label for="pwd"style="color: cadetblue;"><b>Email address:</b></label>
    <input type="password" class="form-control" id="pwd" style="background-color: rgb(233, 238, 240);text-align: center;" >
  </div></b-col>
  <b-col>
      <div class="form-group">
        <label for="pwd"style="color: cadetblue;"><b>Email address:</b></label>
        <input type="password" class="form-control" id="pwd" style="background-color: rgb(233, 238, 240);text-align: center;"  >
      </div></b-col></b-row>

      <b-row><b-col>
        <div class="form-group">
          <label for="pwd"style="color: cadetblue;"><b>Email address:</b></label>
          <input type="password" class="form-control" id="pwd" style="background-color: rgb(233, 238, 240);text-align: center;" >
        </div></b-col>
        <b-col>
            <div class="form-group">
              <label for="pwd"style="color: cadetblue;"><b>Email address:</b></label>
              <input type="password" class="form-control" id="pwd" style="background-color: rgb(233, 238, 240);text-align: center;"  >
            </div></b-col></b-row></p></b-tab>
                  <b-tab title="MY CAR">
                    <p>
                    <div align="left">
                                                                <b-card title="Honda City" sub-title="YOUR PRODUCTS AND SERVICES">
                                                                  <b-card-text>
                                                                    
                                                                  </b-card-text>
                                                              
                                                                  <b-card-text style="color: lightseagreen;">VENDOR REGISTRATION</b-card-text>
                                                              
                                                                  
                                                                
                                                              
                                                        <br><br>
                                                                                    
                                                                                        <b-row>
                                                                                          <b-col>
                                                                                            <img src="../assets/car.jpg" style="width: 180px;height:180px;">

                                                                                          </b-col>
                                                                                          <b-col>
                                                                                            <h4>Description</h4>
                                                                                                <input  type="text" style="width:160px;background-color: #ffffff;text-align: center;" required class="form-control" disabled aria-describedby="emailHelp" placeholder="Company Name">

                                                                                          </b-col>
                                                                                          <b-col>
                                                                                                <input  type="text" style="width:160px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Products/Service">

                                                                                          </b-col>
                                                                                        </b-row><br><br>
                                                                                        <b-row>
                                                                                                <b-col>                             
                                                                                                    <input  type="text" style="width:160px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Land/Mobile No">
                                                                                                </b-col>
                                                                                                <b-col>
                                                                                                        <input  type="text" style="width:160px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Email">

                                                                                                </b-col>
                                                                                                <b-col>                             <input  type="text" style="width:160px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Address">
                                                                                                </b-col>
                                                                                              </b-row><br>
                                                                                              <b-button variant="outline-primary">+ Add Details</b-button>

                                                                                      </b-card></div>
                  </p></b-tab>
                  <b-tab title="Disabled"><p>
                        
                        
                        
                  </p></b-tab>
                </b-tabs><br><br>
                <!--<div class="row">
                        <div class="column">
                                
                        </div>
                      
                        <div class="column">
                                
                        </div>
                        
                        <div class="column">
                          
                        </div>
                        
                        <div class="column">
                                <div class="flip-card" >
                                        <div class="flip-card-inner" style="width:120px;height:80px;">
                                          <div class="flip-card-front" style="background-color:#f5d142;">
                                              <br>
                                             <a href="">   <p style="color: rgb(22, 4, 4);"><b>Alert Box</b></p></a>
                                          </div>
                                          <div class="flip-card-back">
                                             <br>
                                               <a href=""> <p style="color: white;"><b>Alert Box</b></p></a>
                                          </div>
                                        </div>
                                      </div>
                        </div>
                      </div>-->
              </div></template>

               <script>
                            
                            import documentreg from '@/components/documentreg'

                     
                             export default {
                                components: {
                               
                               documentreg
                               
                               
                               
                             },
                            }
                           </script>
              
 <style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: white;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
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
