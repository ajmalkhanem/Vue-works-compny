<template>
    <div>
      <sellernavbar></sellernavbar>
      <carousel></carousel>
                 <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="font-size: 40px;">Popular Services We Provides</label>
        <b-jumbotron style="background-color: white;">
          <buy></buy>
        <br><br>
        
        <div class="hero-image2">
     <br>
            <div class="transbox4" >
      <br>
                <b-row>
                    <b-col>
                      <img src="../assets/h1.png"style="width:100%;height:auto;" >
                    </b-col>
                    <b-col>
                          <div>
                                  <ul class="list-unstyled">
                                    <b-media tag="li">
                                      <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                                
                                      <h1 class="mt-0 mb-1">About Us</h1><br>
                                      <b> <p class="mb-0" style="font-family:Arial, Helvetica, sans-serif;color:teal;">
                                              CLOUD GM is an e commerce single platform, our objective is to provide 
                                              buyers and sellers a best market to trade. We provide the best MARKET PLACE to
                                               showcase the products and services. We provide the best customer service to make 
                                               the operations the best in the market.</p>
                                               <p style="font-family:Arial, Helvetica, sans-serif;color:teal;">We provide the best technology platform to receive orders, customer 
                                                   interactions, feedbacks, ratings and proper analysis.</p></b>
                                    </b-media>
                                
                                    <b-media tag="li" class="my-4" >
                                      <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                                
                                      <b><h5 class="mt-0 mb-1" style="color: rgb(4, 4, 20);">Our Vision</h5></b>
                                      <p class="mb-0" style="font-family:Arial, Helvetica, sans-serif;color:teal;">
                                              Our Vision is be the biggest customer friendly e-commerce platform in the world</p>
                                    </b-media>
                                
                                    <b-media tag="li">
                                      <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder"></b-img>
                                
                                     <b> <h5 class="mt-0 mb-1" style="color:rgb(6, 6, 32);">Our Mission</h5></b>
                                      <p class="mb-0" style="font-size: 16px;font-family:Arial, Helvetica, sans-serif;color: teal;">
                                              Our Mission is to improve the life style of people and bring the products and services
                                               under one platform with latest technology and secured transactions.</p>
                                    </b-media>
                                  </ul>
                                </div>
                    </b-col>
                  </b-row>         
       </div>
                   
</div>
                
                                        <br>
                                        <div class="container1">
                                            <img src="../assets/banner1.jpg" alt="Nature" style="width:200%;height:500px;">
                                            <div class="text-block">
                                              <br>
                                              <h3><b>Become Contomer</b></h3>
                                              <h1><b>Use your needs</b></h1>
                                              <h1><b>Without Worries</b></h1>
                                              <b-button variant="primary">Become Customer</b-button>
  
  
                                            </div>
                                          </div>
                        </b-jumbotron>
                              
                      
    </div>
</template>
<script>
       import carousel from '@/components/carousel'
       import buy from '@/components/buy'
       import MenuIcon from "vue-material-design-icons/Menu.vue"
       import sellernavbar from '@/components/sellernavbar'
       import footer1 from '@/components/footer1'


        export default {
           components: {
          carousel,
          buy,
          MenuIcon,
          sellernavbar,
          footer1
          
          
        },
       }
      </script>

<style>
  .container1 {
    position: relative;
    font-family: Arial;
  }
  
  .text-block {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: ;
    color: white;
    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
  }
  </style>
  <style>
      * {box-sizing: border-box;}
      
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      
      .topnav {
        overflow: hidden;
      }
      
      .topnav a {
        float: left;
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
      
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
     
      
      .topnav .search-container {
        float: left;
      }
      
      .topnav input[type=text] {
        padding: 6px;
        margin-top: 8px;
        font-size: 17px;
        border: none;
      }
      
      .topnav .search-container button {
        float: right;
        padding: 6px;
        margin-top: 8px;
        margin-right: 16px;
        background: #03adfc;;
        font-size: 17px;
        border: none;
        cursor: pointer;
      }
      
      .topnav .search-container button:hover {
        background: #ccc;
      }
      
      @media screen and (max-width: 600px) {
        .topnav .search-container {
          float: none;
        }
        .topnav a, .topnav input[type=text], .topnav .search-container button {
          float: none;
          display: block;
          text-align: left;
          width: 100%;
          margin: 0;
          padding: 14px;
        }
        .topnav input[type=text] {
          border: 1px solid #ccc;  
        }
      }
      </style>
      <style>
        body, html {
          height: 100%;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }
        
        .hero-image {
          background-image: 
           url("http://cloudgm.com/wp-content/uploads/2018/12/Banners_3.jpg");
          height: 50%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .hero-image1 {
         
          height: 50%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .hero-image2 {
          background-image: 
           url("https://i.pinimg.com/originals/46/1d/25/461d254f8563f8945ce3a385f289df17.jpg");
         height: 50%;
         background-position: center;
         background-repeat: no-repeat;
         background-size: cover;
         position: relative;
       }
       
        .hero-text {
          text-align: center;
          position: absolute;
          top: 20%;
          left: 25%;
          transform: translate(-50%, -50%);
          color: white;
        }
        div.transbox3 {
    margin: 30px;
    background-color: #ffffff;
    opacity:0;
    filter: alpha(opacity=60);
    /* For IE8 and earlier */
  }
  div.transbox4 {
    margin: 30px;
    background-color: #ffffff;
    opacity:.5;
    filter: alpha(opacity=60);
    /* For IE8 and earlier */
  }
       
        
        .hero-text button:hover {
          background-color: #555;
          color: white;
        }
        </style>