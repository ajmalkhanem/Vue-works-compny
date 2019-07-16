<template>
    <div><div>
            <b-jumbotron>
        <carousel></carousel><br>
        <h style="font-size: 60px;">we provide wide range of</h>
        <h1 style="font-size: 60px;"><b> services</b></h1><br>
        <Hooper></Hooper><br><br>
        <hr>
        
                
                                <b-container class="bv-example-row">
                                        <b-row>
                                          <b-col><img src="../assets/h1.png"></b-col>
                                          <b-col>
                                                <div id="about">
                                                        <ul class="list-unstyled">
                                                          <b-media tag="li">
                                                            <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                                                      
                                                            <h1 class="mt-0 mb-1">About Us</h1><br>
                                                            <p class="mb-0">
                                                                    CLOUD GM is an e commerce single platform, our objective is to provide 
                                                                    buyers and sellers a best market to trade. We provide the best MARKET PLACE to
                                                                     showcase the products and services. We provide the best customer service to make 
                                                                     the operations the best in the market.</p>
                                                                     <p>We provide the best technology platform to receive orders, customer 
                                                                         interactions, feedbacks, ratings and proper analysis.</p>
                                                          </b-media>
                                                      
                                                          <b-media tag="li" class="my-4">
                                                            <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                                                      
                                                            <h5 class="mt-0 mb-1" style="color: blue;">Our Vision</h5>
                                                            <p class="mb-0">
                                                                    Our Vision is be the biggest customer friendly e-commerce platform in the world</p>
                                                          </b-media>
                                                      
                                                          <b-media tag="li">
                                                            <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder"></b-img>
                                                      
                                                            <h5 class="mt-0 mb-1">List-based media object</h5>
                                                            <p class="mb-0" style="font-size: 20px;font-family:Arial, Helvetica, sans-serif;">
                                                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                                              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                                              ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                            </p>
                                                          </b-media>
                                                        </ul>
                                                      </div>
                                          </b-col>
                                        </b-row></b-container>
                                        <br><hr>
                                        <b-container class="bv-example-row">
                                                <b-row>
                                                  <b-col sm="8">
                                                        <div id="rcorners1" style="width:1200px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:500px;float:left;margin-top:20px;margin-left:20px;">
                                                        <br>
                                                        <div align="left">
                                                                <b-card title="REGISTER" sub-title="YOUR PRODUCTS AND SERVICES">
                                                                  <b-card-text>
                                                                    
                                                                  </b-card-text>
                                                              
                                                                  <b-card-text style="color: lightseagreen;">VENDOR REGISTRATION</b-card-text>
                                                              
                                                                  
                                                                
                                                              
                                                        <br><br>
                                                                                <b-container class="bv-example-row">
                                                                                    
                                                                                        <b-row>
                                                                                          <b-col>
                                                                                                <input  type="text" style="width:330px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Your Name">

                                                                                          </b-col>
                                                                                          <b-col>
                                                                                                <input  type="text" style="width:330px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Company Name">

                                                                                          </b-col>
                                                                                          <b-col>
                                                                                                <input  type="text" style="width:330px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Products/Service">

                                                                                          </b-col>
                                                                                        </b-row><br><br>
                                                                                        <b-row>
                                                                                                <b-col>                             
                                                                                                    <input  type="text" style="width:330px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Land/Mobile No">
                                                                                                </b-col>
                                                                                                <b-col>
                                                                                                        <input  type="text" style="width:330px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Email">

                                                                                                </b-col>
                                                                                                <b-col>                             <input  type="text" style="width:330px;background-color: rgb(233, 238, 240);text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Address">
                                                                                                </b-col>
                                                                                              </b-row><br>
                                                                                              <b-button variant="outline-primary">Submit</b-button>

                                                                                      </b-container></b-card></div>
                                                                          
                                                        
                                                                
                                                        </div>
                                                  </b-col>
                                                </b-row></b-container>
                        </b-jumbotron>
                      </div>
    </div>
</template>
<script>
       import carousel from '@/components/carousel'
       import Hooper from '@/components/Hooper'


        export default {
           components: {
          carousel,
          Hooper
          
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