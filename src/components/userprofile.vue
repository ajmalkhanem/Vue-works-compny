   <template>
    <div>
        <navbar></navbar>
                     
        

<div>
  <b-card no-body  >
   <b-tabs pills card vertical >
     
     <b-tab title="My Account"   active>
   
         <b-card-text>
           <navbar1></navbar1>
             <myaccount></myaccount>   
                    
                       
                            
                                
                                    
     </b-card-text>
    </b-tab>
     <b-tab title="My Car"><b-card-text>
       <car></car>
     </b-card-text></b-tab>
     <b-tab title="BUY & SELL"><b-card-text>
            <div>
                    <b-tabs content-class="mt-3">
                      <b-tab title="New Car" active><p>I'm the first tab
                        
                      </p></b-tab>
                      <b-tab title="Used Car"><p>I'm the second tab</p></b-tab>
                      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
                    </b-tabs>
                  </div>
     </b-card-text></b-tab>
     <b-tab title="Accessories"><b-card-text>Accessories</b-card-text></b-tab>
     <b-tab title="Fuel Stations"><b-card-text>Fuel Stations</b-card-text></b-tab>
     <b-tab title="Help & Support"><b-card-text>Help & Support</b-card-text></b-tab>
     <b-tab title="Buy Coins"><b-card-text>
       <buy></buy>
     </b-card-text></b-tab>
     <b-tab title="My Account"><b-card-text>
        
      

     </b-card-text></b-tab>

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


                     
                             export default {
                                components: {
                               Hooper,  
                               myaccount,
                               buy,
                               navbar1,
                               navbar,
                               car
                               
                               
                               
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