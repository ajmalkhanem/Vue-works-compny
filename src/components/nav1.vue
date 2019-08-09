<template>
  <div>
  
        <b-navbar  toggleable="lg" type="light" variant="light" style="padding-top:10px!important;padding-bottom:10px!important;">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <h5 style="color: whitesmoke!important;">_____</h5>
         <a href="/" style="text-decoration: none!important;"> <h5 style="color:black!important;"></h5></a>
             <!--<a href="Home"><b-nav-text><h4 style="color:black!important;">TIES</h4></b-nav-text></a>-->
               <b-collapse is-nav id="nav_collapse">
                  <b-nav-item href="#" class="mx-auto"></b-nav-item>
                  <b-nav-item >
                      <router-link to="/sellerindex" style=" text-decoration: none!important;"><span style="padding-left:10px;"> Become a Seller </span></router-link>
                    <span style="padding-left:10px;" > | </span>
                   <router-link to="/signup1" style=" text-decoration: none!important;" ><span style="padding-left:10px;">SignUp </span></router-link>
                    <span style="padding-left:10px;">| </span>
                    <router-link to="/signin" style=" text-decoration: none!important;"> <span style="padding-left:10px;">SignIn </span></router-link>
                  </b-nav-item>
                  <b-nav-item class=" navt ">
                      <router-link to=""><strong>
                          <div style="color:  #111113 !important;">
                            <img src="../assets/ind.png" style="width:25px;height:20px;">
                          </div>
                        </strong></router-link>
                    </b-nav-item>
                    <b-nav-item class="navt ">
                      <router-link to=""><strong>
                          <div style="color:  #111113 !important;">
                            <img src="../assets/uae.png" style="width:25px;height:25px;">
                          </div>
                        </strong></router-link>
                    </b-nav-item>
                 
                 
                 </b-collapse>
                
               <b-navbar-brand>
                  <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
                  </b-navbar-brand>
              </b-navbar>
      


   
    <!---->
    <div class="container" style="background-color: white!important;">
      <b-navbar
        toggleable="lg"
        type="light"
        variant="light"
        style="background-color:white!important;"
      >
        <a href="home">
          <b-img
            :src="require('../assets/CGMlo.png')"
            style=" width:250px; height:130px;padding-bottom:10px;"
          ></b-img>
        </a>
        <b-nav-item >
              
            <b-nav-item-dropdown  text="CATEGORIES" class="ii" style="padding-left:70px!important;" right>
                <b-dropdown-item href="#">Automobile</b-dropdown-item>
                <b-dropdown-item href="#">Communication</b-dropdown-item>
                <b-dropdown-item href="#">Education </b-dropdown-item>
                <b-dropdown-item href="#">Restaurant </b-dropdown-item>
                <b-dropdown-item href="#">Stock Market </b-dropdown-item>
                <b-dropdown-item href="#"> Real Estate </b-dropdown-item>
                <b-dropdown-item href="#">Insurance </b-dropdown-item>
                <b-dropdown-item href="#"> Health & Wealth</b-dropdown-item>
                <b-dropdown-item href="#">Entertainment & Sports </b-dropdown-item>
                <b-dropdown-item href="#">JObs </b-dropdown-item>
                <b-dropdown-item href="#">Travel & Tourism </b-dropdown-item>
                <b-dropdown-item href="#"> Market Place  </b-dropdown-item>
              </b-nav-item-dropdown>
          </b-nav-item>
     
    
      
        
<b-nav-item class="ml-auto">
  
          <div class="input-group srh sw" style="width: 13cm ;padding-bottom:10px;">
            <input
              type="text"
              class="form-control"
              placeholder="Search here"
              style="margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;"
            />
            <div class="input-group-append">
              <button type="button" class="btn btn-danger">
                <span>
                  <i class="fa fa-search"></i>
                </span>
              </button>
            </div>
          </div></b-nav-item>
        

        <!-- <b-nav-item href="#" class="mx-auto">
                <b-img :src="require('../assets/CGMlo.png')" style=" width:250px; height:130px;padding-bottom:10px;"></b-img>
        </b-nav-item>-->

        <b-navbar-brand>
          <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
        </b-navbar-brand>
      </b-navbar>
    </div>

    <!--3rd-->
   
    <b-navbar  toggleable="lg" type="light" variant="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
         
        
              <h5 style="color: whitesmoke!important;">________</h5>
              <b-nav-item-dropdown class="hv cate" text="CATEGORIES" right>
                  <b-dropdown-item  router-link to="/signin">Automobile</b-dropdown-item>
                  <b-dropdown-item href="#">Communication</b-dropdown-item>
                  <b-dropdown-item href="#">Education </b-dropdown-item>
                  <b-dropdown-item href="#">Restaurant </b-dropdown-item>
                  <b-dropdown-item href="#">Stock Market </b-dropdown-item>
                  <b-dropdown-item href="#"> Real Estate </b-dropdown-item>
                  <b-dropdown-item href="#">Insurance </b-dropdown-item>
                  <b-dropdown-item href="#"> Health & Wealth</b-dropdown-item>
                  <b-dropdown-item href="#">Entertainment & Sports </b-dropdown-item>
                  <b-dropdown-item href="#">JObs </b-dropdown-item>
                  <b-dropdown-item href="#">Travel & Tourism </b-dropdown-item>
                  <b-dropdown-item href="#"> Market Place  </b-dropdown-item>
                </b-nav-item-dropdown>
            
       
      
            <b-collapse is-nav id="nav_collapse">
                <b-nav-item href="#" class="mx-auto"></b-nav-item>

          <b-nav-item href="/">HOME</b-nav-item>
          
         

        
        <b-nav-item href="#">PAGES</b-nav-item>
        
         
       
        <b-nav-item href="#">SERVICES</b-nav-item>
         
      
        <b-nav-item href="#">CONTACT US</b-nav-item>
         
        
        <b-nav-item href="#">PARTNER WITH US</b-nav-item>
         
      </b-collapse>
        <b-nav-item class="ml-auto">
          <i class="fa fa-phone">1234567890</i>
        </b-nav-item>
    

      
  <b-navbar-brand>
     <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
     </b-navbar-brand>
 </b-navbar>




  </div>
</template>
    
    <script lang="js">
       export default    {
         name: 'app-header'
                         }
    </script>
    
    <style>
.navbar .nav-text .h3 {
  text-align: center;
}
.navbar-toggler {
  background-color: white !important;
}
@media (min-width: 1281px) {
  .navbar-expand-lg .navbar-nav .nav-link .nav-item {
    margin-right: 15px;
    margin-left: 15px;
    padding-left: 100px;
  }
}
@media (min-width: 1025px) and (max-width: 1280px) {
  .navbar-expand-lg .navbar-nav .nav-link .nav-item .nav-text .h3 {
    margin-right: 15px;
    margin-left: 15px;
    padding-left: 200px;
    font-size: 12px;
    text-align: center;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .navbar-expand-lg .navbar-nav .nav-link .nav-item .nav-text .h3 {
    margin-right: 15px;
    margin-left: 15px;
    padding-left: 150px;
  }
}
@media (min-width: 481px) and (max-width: 767px) {
  .navbar-expand-lg .navbar-nav .nav-link .nav-item {
    margin-right: 15px;
    margin-left: 15px;
    padding-left: 100px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .navbar-expand-lg .navbar-nav .nav-link .nav-item {
    margin-right: 15px;
    margin-left: 15px;
    padding-left: 100px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
 .cate {
display:none!important;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
    .sw{
      width:8cm!important;
    
    }
}
@media (min-width: 320px) and (max-width: 480px) {
.onlylap{
  display: none!important;
}
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
}
a {
  color: black;
  font-weight: normal !important;
  font-size: 16px !important;
}
a:hover {
  color: black !important;
}
a :hover {
  text-decoration: none !important;
}
.srh {
  padding-right: 50px !important;
  padding-top: 15px;
  text-align: left;
}
@media (min-width: 760px) and (max-width: 1800px) {
  .ii {
    display: none !important;
  }
}
.navbar {
  position: relative;
  padding: 0rem 0rem !important;
}
</style>
