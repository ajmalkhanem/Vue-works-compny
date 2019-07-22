<template>
    <div>
      <navbar></navbar>
      <b-jumbotron>
              
                <b-row>
                  <b-col>
                      <h3>Find The Perfect Services</h3>
                      <h3>For You And Your Business</h3>
                      <br>
                      <div class="topnav">

                       <div class="search-container">
                            <form action="/action_page.php">
                              <input type="text" placeholder=" Search.." name="search">
                              <button type="submit" style="color: white;">Search</button>
                            </form>
                          </div>
                        </div>
                    </b-col>
                    <b-col>
                        <img src="http://cloudgm.com/wp-content/uploads/2018/12/Banners_6-1.jpg" style="width: 1100px">
                    </b-col>
                  </b-row></b-jumbotron>
                 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="font-size: 40px;">Popular Services We Provides</label>
        <b-jumbotron style="background-color: white;">
        <Hooper></Hooper><br><br>
        
        
                
                                <b-container class="bv-example-row" id="about">
                                        <b-row>
                                          <b-col><img src="../assets/h1.png"></b-col>
                                          <b-col>
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
                                                      </div>
                                          </b-col>
                                        </b-row></b-container>
                                        <br>
                                        <div class="container1">
                                          <img src="../assets/banner1.jpg" alt="Nature" style="width:1630px;height: 500px;">
                                          <div class="text-block">
                                            <br>
                                            <h3 style="font-size: 100px;"><b>Become seller</b></h3>
                                            <h1><b>Grew your Business</b></h1>
                                            <h1><b>Without Worries</b></h1>
                                            <b-button variant="outline-primary">Become Seller</b-button>


                                          </div>
                                        </div>
                        </b-jumbotron>
                              
                      
    </div>
</template>
<script>
       import carousel from '@/components/carousel'
       import Hooper from '@/components/Hooper'
       import MenuIcon from "vue-material-design-icons/Menu.vue"
       import navbar from '@/components/navbar'
       import footer1 from '@/components/footer1'


        export default {
           components: {
          carousel,
          Hooper,
          MenuIcon,
          navbar,
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