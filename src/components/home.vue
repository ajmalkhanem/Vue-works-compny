<template>
    <div>
            <b-jumbotron>
        <carousel></carousel><br>
        <label style="font-size: 60px;">we provide wide range of</label>
        <h1 style="font-size: 60px;"><b> services</b></h1><br>
        <Hooper></Hooper><br><br>
        <hr>
        
                
                                <b-container class="bv-example-row" id="about">
                                        <b-row>
                                          <b-col><img src="../assets/h1.png"></b-col>
                                          <b-col>
                                              <section id="about">
                                                <div>
                                                        <ul class="list-unstyled">
                                                          <b-media tag="li">
                                                            <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                                                      
                                                            <h1 class="mt-0 mb-1">About Us</h1><br>
                                                            <p class="mb-0" style="font-family:Arial, Helvetica, sans-serif;">
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
                                                      
                                                            <h5 class="mt-0 mb-1" style="color:blue;">Our Mission</h5>
                                                            <p class="mb-0" style="font-size: 16px;font-family:Arial, Helvetica, sans-serif;">
                                                                    Our Mission is to improve the life style of people and bring the products and services
                                                                     under one platform with latest technology and secured transactions.</p>
                                                          </b-media>
                                                        </ul>
                                                      </div></section>
                                          </b-col>
                                        </b-row></b-container>
                                        <br><hr>
                                        <b-container class="bv-example-row">
                                                <b-row>
                                                  <b-col sm="8">
                                                        
                                                        <div align="left">
                                                                <b-card title="REGISTER" sub-title="YOUR PRODUCTS AND SERVICES">
                                                                  <b-card-text>
                                                                    
                                                                  </b-card-text>
                                                              
                                                                  <b-card-text style="color: lightseagreen;">VENDOR REGISTRATION</b-card-text>
                                                              
                                                                  
                                                                
                                                              
                                                        <br><br>
                                                                                <b-container class="bv-example-row">
                                                                                    
                                                                                        <b-row>
                                                                                          <b-col>
                                                                                                <input  type="text" style="width:160px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Your Name">

                                                                                          </b-col>
                                                                                          <b-col>
                                                                                                <input  type="text" style="width:160px;background-color: #ffffff;text-align: center;" required class="form-control" id="rcorners1" aria-describedby="emailHelp" placeholder="Company Name">

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
                                                                                              <b-button variant="outline-primary">Save</b-button>

                                                                                      </b-container></b-card></div>
                                                                          
                                                        
                                                                
                                                        
                                                  </b-col>
                                                </b-row></b-container>
                        </b-jumbotron>
                              
                      
    </div>
</template>
<script>
       import carousel from '@/components/carousel'
       import Hooper from '@/components/Hooper'

       import MenuIcon from "vue-material-design-icons/Menu.vue"


        export default {
           components: {
          carousel,
          Hooper,
          MenuIcon,
          
          
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
            
 
 
 
        
 
.full {
 
    width: 100%; 
 
}
 
 
 
.footer {
 
                height: auto;
 
                padding-bottom: 30px;
 
                position: relative;
 
                width: 100%;
 
    color:#fff;
 
                border-bottom: 1px solid #CCCCCC;
 
                border-top: 1px solid #DDDDDD;
 
    background: #00003E;
 
    background: -webkit-linear-gradient(to right, #31BDE6, #00003E); 
 
    background: linear-gradient(to right, #31BDE6, #00003E);    
 
}
 
 
 
 
 
.footer h3 {
 
                border-bottom: 1px solid #BAC1C8;
 
    color:#fff;
 
                font-size: 18px;
 
                font-weight: 600;
 
                line-height: 27px;
 
                padding: 40px 0 10px;
 
                text-transform: uppercase;
 
}
 
.footer ul {
 
                font-size: 13px;
 
                list-style-type: none;
 
                margin-left: 0;
 
                padding-left: 0;
 
                margin-top: 15px;
 
                color: #7F8C8D;
 
}
 
.footer ul li a {
 
                padding: 0 0 5px 0;
 
                display: block;
 
}
 
.footer a {
 
                color: #78828D;
 
    color:#fff;
 
}
 
.supportLi h4 {
 
                font-size: 20px;
 
                font-weight: lighter;
 
                line-height: normal;
 
                margin-bottom: 0 !important;
 
                padding-bottom: 0;
 
}
 
 
 
.subscribe-btn .btn {
 
                border: medium none;
 
                border-radius: 4px;
 
                display: inline-block;
 
                height: 40px;
 
                padding: 0;
 
                width: 100%;
 
                color: #fff;
 
    margin-top:10px;
 
}
 
.subscribe-btn {
 
                overflow: hidden;
 
}
 
 
 
.social li {
 
                border: 2px solid #B5B5B5;
 
                -webkit-border-radius: 50%;
 
                -moz-border-radius: 50%;
 
                -o-border-radius: 50%;
 
                -ms-border-radius: 50%;
 
                border-radius: 50%;
 
                float: left;
 
                height: 36px;
 
                line-height: 36px;
 
                margin: 0 8px 0 0;
 
                padding: 0;
 
                text-align: center;
 
                width: 36px;
 
                transition: all 0.5s ease 0s;
 
                -moz-transition: all 0.5s ease 0s;
 
                -webkit-transition: all 0.5s ease 0s;
 
                -ms-transition: all 0.5s ease 0s;
 
                -o-transition: all 0.5s ease 0s;
 
}
 
 
 
.social li a {
 
                color: #EDEFF1;
 
}
 
.social li:hover {
 
                border: 2px solid #2c3e50;
 
                background: #2c3e50;
 
}
 
.social li a i {
 
                font-size: 16px;
 
                margin: 0 0 0 5px;
 
                color: #EDEFF1 !important;
 
}
 
.footer-bottom {
 
    background: #40E0D0;
 
    background: -webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
 
    background: linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
 
                border-top: 1px solid #DDDDDD;
 
                padding-top: 20px;
 
                padding-bottom: 40px;
 
    color:#fff;
 
}
 
.footer-bottom p.pull-left {
 
                padding-top: 6px;
 
}
 
.payments {
 
                font-size: 1.5em;             
 
}
 
</style>