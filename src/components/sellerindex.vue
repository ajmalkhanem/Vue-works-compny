<template>
    <div>
      <sellernavbar></sellernavbar>
                                        <b-jumbotron style="background-color:white;">
              <div class="container1">
                                          <img src="../assets/banner1.jpg" alt="Nature" style="width:1630px;height:500px;">
                                          <div class="text-block">
                                            <br>
                                            <h1 style="font-size: 100px;"><b> Business Your Way</b></h1>
                                            <p>Keep in customers happy We'll make grown easy</p>
                                         <b-button variant="primary">Become Seller</b-button>
 

                                          </div>
                                        </div>
                <br>
        <label style="font-size: 40px;"><b>Join Our Business Community</b></label><br><br>
        <Hooper1></Hooper1><br><br>
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
                                        <div class="container1">
                                          <img src="../assets/banner1.jpg" alt="Nature" style="width:1630px;">
                                          <div class="text-block">
                                            <br>
                                            <h3><b>Become seller</b></h3>
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
       import Hooper1 from '@/components/Hooper1'

       import MenuIcon from "vue-material-design-icons/Menu.vue"
       import navbar from '@/components/navbar'
       import sellernavbar from '@/components/sellernavbar'

       import footer1 from '@/components/footer1'


        export default {
           components: {
          carousel,
          Hooper,
          Hooper1,
          MenuIcon,
          navbar,
          footer1,
          sellernavbar
          
          
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