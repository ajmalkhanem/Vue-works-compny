   <template>
    <div>
        <navbar></navbar>
                     
        

<div>
  <b-card no-body  >
   <b-tabs pills card vertical >
     
     <b-tab title="My Account"   active>
   
         <b-card-text>
            <b-alert show dismissible>
                Edit Details  </b-alert>
           <navbar1></navbar1>
           
             <myaccount></myaccount>   
                    
                       
                            
                                
                                    
     </b-card-text>
    </b-tab>
     <b-tab title="MY VEHICLE"><b-card-text>
       <car></car>
     </b-card-text></b-tab>
     <b-tab title="BUY & SELL"><b-card-text>
        <b-row>
         
            <b-col>
                    <img src="../assets/look.jpg" style="width:700px;height:300px;">
                </b-col>
                <b-col>
                      <img src="../assets/seell.png" style="width:500px;height:300px;">
                  </b-col>
              </b-row>
            <div>
                    <b-tabs content-class="mt-3">
                      <b-tab title="New Car" active><p>
                        <newcar></newcar>
                        
                      </p></b-tab>
                      <b-tab title="Used Car"><p>
                        <usedcar></usedcar>
                      </p></b-tab>
                      
                    </b-tabs>
                  </div>
     </b-card-text></b-tab>
     <b-tab title="ACCESSORIES"><b-card-text>
       <access></access>
     </b-card-text></b-tab>
     <b-tab title="Fuel Stations"><b-card-text>
       <fuel></fuel>
      </b-card-text></b-tab>
     <b-tab title="Help & Support"><b-card-text>Help & Support</b-card-text></b-tab>
     
     

     </b-tabs>
      </b-card></b-container>
                      </div>
                    </b-jumbotron>
                                 </div>
            </template>
    
                      <script>
                            import Hooper from '@/components/Hooper'
                            import myaccount from '@/components/myaccount'
                            import buy from '@/components/buy'
                            import navbar1 from '@/components/navbar1'
                            import navbar from '@/components/navbar'
                            import car from '@/components/car'
                            import newcar from '@/components/newcar'
                            import usedcar from '@/components/usedcar'
                            import access from '@/components/access'
                            import fuel from '@/components/fuel'




                     
                             export default {
                                components: {
                               Hooper,  
                               myaccount,
                               buy,
                               navbar1,
                               navbar,
                               car,
                               newcar,
                               usedcar,
                               access,
                               fuel
                               
                               
                               
                             },
                            }
                           </script>
    <style>

            #rcorners1 {
            border-radius: 25px;
            padding: 20px; 
            width: 200px;
            height: 8px;  
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
<style>
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial;
      font-size: 17px;
    }
    
    .container {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .container img {vertical-align: middle;}
    
    .container .content {
      position: absolute;
      bottom: 0;
      background: rgb(0, 0, 0); /* Fallback color */
      background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
      color: #f1f1f1;
      width: 100%;
      padding: 20px;
    }
    </style>