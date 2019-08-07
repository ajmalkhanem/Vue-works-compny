
 <b-navbar  toggleable="lg" type="light" variant="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
     <a href=""> <h5>Welcome to ClougGM</h5></a>
         <!--<a href="Home"><b-nav-text><h4 style="color:black!important;">TIES</h4></b-nav-text></a>-->
           <b-collapse is-nav id="nav_collapse">
              <b-nav-item href="#" class="mx-auto"></b-nav-item>
              <b-nav-item >
                  <router-link to="/sellerindex" style=" text-decoration: none!important;"><span style="padding-left:10px;"> Become a Seller </span></router-link>
                <span style="padding-left:10px;" > | </span>
               <router-link to="/signup1"style=" text-decoration: none!important;" ><span style="padding-left:10px;">SignUp </span></router-link>
                <span style="padding-left:10px;">| </span>
                <router-link to="/signin" style=" text-decoration: none!important;"> <span style="padding-left:10px;">SignIn </span></router-link>
              </b-nav-item>
             
              <b-nav-item  class="navvink"> <router-link to="" id="button" style="color:#006400 !important;"><strong>DONATE</strong></router-link></b-nav-item>
             </b-collapse>
             </b-navbar-nav toggleable="lg"> 
           <b-navbar-brand>
              <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
              </b-navbar-brand>
          </b-navbar>

          <div class="col-md-6">
                <div class="col-md-12 row">
                  <div class="col-md-4">
                    <img>
                  </div>
                  <div class="col-md-6">
                  </div>
                </div>


          </div>
