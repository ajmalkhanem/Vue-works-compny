<template>
    <div>
              <div class="container6">
                                          <img src="../assets/baner1.jpg" alt="Snow" style="width:100%;">
                                          <div class="top-left">
                                           <b> <label style="color: white;font-size: 80px;">
                                              Business Your Way</label><br>
                                              <label style="color: white;font-size: 30px;">
                                                grow your business 
                                                Without worries </label></b><br>
                                                  <b-button variant="primary">Become Seller</b-button>

                                            </div>
                                          <!--<div class="top-right">Top Right</div>
                                          <div class="bottom-right">Bottom Right</div>
                                          <div class="centered">Centered</div>-->
                                        </div>
                <br>
        <label style="font-size: 40px;"><b>Join Our Business Community</b></label><br><br>
        <hooper2></hooper2><br><br>
        <b-jumbotron>
            
                <h2><b>How It Works</b></h2>
            <br>
  <b-row>
      
    <b-col>
        <h4><b>1.List Your Business</b></h4>
        <p><b>list your Businees, commplete your profile,
            Showcase your service and product to 
            our global users</b></p>

    </b-col>
    <b-col>
        <h4><b>2.Give Offers to customers</b></h4>
        <p><b>list your Businees, commplete your profile,
            Showcase your service and product to 
            our global users</b></p>
    </b-col>
    <b-col>
        <h4><b>3.Get Paid</b></h4>
        <p><b>list your Businees, commplete your profile,
            Showcase your service and product to 
            our global users</b></p>
    </b-col>
  </b-row>
        </b-jumbotron>
        
                
 
                                        <br>
                                       <div class="container6">
                                          <img src="../assets/baner1.jpg" alt="Snow" style="width:100%;">
                                          <div class="top-left">
                                            <label style="color: white;font-size: 80px;">
                                              <b>Business Your Way</b></label><br>
                                              <label style="color: white;font-size: 50px;">
grow your business </label>
                                            </div>
                                          <!--<div class="top-right">Top Right</div>
                                          <div class="bottom-right">Bottom Right</div>
                                          <div class="centered">Centered</div>-->
                                        </div>
                              
                      
    </div>
</template>
<script>
       import carousel from '@/components/carousel'
       import Hooper from '@/components/Hooper'
       import hooper2 from '@/components/hooper2'

       import MenuIcon from "vue-material-design-icons/Menu.vue"
       import navbar from '@/components/navbar'
       import sellernavbar from '@/components/sellernavbar'

       import footer1 from '@/components/footer1'


        export default {
           components: {
          carousel,
          Hooper,
          hooper2,
          MenuIcon,
          navbar,
          footer1,
          sellernavbar
          
          
        },
       }
      </script>

<style>
  .container2 {
    position: relative;
    font-family: Arial;
  }
  
  .text-block {
    position: absolute;
    top: 20px;
    left: 20px;
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
          .container6 {
            position: relative;
            text-align: center;
            color: white;
          }
          
          .bottom-left {
            position: absolute;
            bottom: 8px;
            left: 16px;
          }
          
          .top-left {
            position: absolute;
            top: 8px;
            left: 16px;
          }
          
          .top-right {
            position: absolute;
            top: 8px;
            right: 16px;
          }
          
          .bottom-right {
            position: absolute;
            bottom: 8px;
            right: 16px;
          }
          
          .centered {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          </style>