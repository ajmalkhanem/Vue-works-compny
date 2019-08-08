<template>
  <div>
    <!---->
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      style="padding-top:10px!important;padding-bottom:10px!important;"
    >
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <h5 style="color: whitesmoke!important;">_____</h5>
      <a href="/" style="text-decoration: none!important;">
        <h5 style="color:black!important;">Welcome to CloudGM</h5>
      </a>
      <!--<a href="Home"><b-nav-text><h4 style="color:black!important;">TIES</h4></b-nav-text></a>-->
      <b-collapse is-nav id="nav_collapse">
        <b-nav-item href="#" class="mx-auto"></b-nav-item>
        <b-nav-item>
          <b-navbar-nav class="ml-auto">
            <h5 style="color:whitesmoke;">_________</h5>
            <b-nav-item>
              <b-nav-item-dropdown id="nav7_ddown" right>
                <template slot="button-content">
                  <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                </template>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-dropdown-item>
                  <router-link to="/pr">Profile</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link to>Settings</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <a v-on:click="handlelogout()">logout</a>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-nav-item>

            <b-nav-item>
              <router-link to>
                <strong>
                  <div style="color:	#111113 !important;">
                    <img src="../assets/ind.png" style="width:25px;height:20px;margin-top: 12px;" />
                  </div>
                </strong>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to>
                <strong>
                  <div style="color:	#111113 !important;">
                    <img src="../assets/uae.png" style="width:25px;height:25px;margin-top: 10px;" />
                  </div>
                </strong>
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-nav-item>
      </b-collapse>

      <b-navbar-brand>
        <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
      </b-navbar-brand>
    </b-navbar>

    <!--
    <b-navbar
      class="navbar navbar-expand-sm bg-whitesmoke navbar-whitesmoke"
      toggleable="lgh"
      type="light"
      variant="light"
    >
      
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <h5 style="color: whitesmoke!important;">_____</h5>
        <span>Welcome to CloudGM</span>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <h5 style="color:whitesmoke;"></h5>
            <b-nav-item>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <b-nav-item-dropdown id="nav7_ddown" right>
                <template slot="button-content">
                  <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                </template>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-dropdown-item><router-link to="/editprofile"> Profile</router-link></b-dropdown-item>
                <b-dropdown-item><router-link to="">Settings</router-link></b-dropdown-item>
                <b-dropdown-item>
                  <a v-on:click="handlelogout()">logout</a>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-nav-item>

            <b-nav-item>
              <router-link to>
                <strong>
                  <div style="color:	#111113 !important;">
                    <img src="../assets/ind.png" style="width:25px;height:20px;margin-top: 12px;" />
                  </div>
                </strong>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to>
                <strong>
                  <div style="color:	#111113 !important;">
                    <img src="../assets/uae.png" style="width:25px;height:25px;margin-top: 10px;" />
                  </div>
                </strong>
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      
    </b-navbar>
    -->

    <div class="container" style="background-color: white!important;">
      <b-navbar
        toggleable="lg"
        type="light"
        variant="light"
        style="background-color:white!important;"
      >
        <a href="Home">
          <b-img
            :src="require('../assets/CGMlo.png')"
            style=" width:250px; height:130px;padding-bottom:10px;"
          ></b-img>
        </a>

        <b-nav-item class="ml-auto">
          <div class="input-group srh sw" style="width: 13cm ;padding-bottom:10px;">
            <input
              type="text"
              class="form-control"
              placeholder="Search here"
              style="margin-top: 0px!important;
              margin-right: 0px!important;
              margin-bottom: 0px!important;
              margin-left: 0px!important;"
            />
            <div class="input-group-append">
              <button type="button" class="btn btn-danger">
                <span>
                  <i class="fa fa-search"></i>
                </span>
              </button>
            </div>
          </div>
        </b-nav-item>

        <!-- <b-nav-item href="#" class="mx-auto">
                  <b-img :src="require('../assets/CGMlo.png')" style=" width:250px; height:130px;padding-bottom:10px;"></b-img>
  
        </b-nav-item>-->

        <b-navbar-brand>
          <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
        </b-navbar-brand>
      </b-navbar>
    </div>

    <b-navbar toggleable="lg" style="background-color:#f8f9fa" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <div style="padding-left: 100px;">
        <b-nav-item class="hv">
          <div v-if="loggedIn==true">
            <b-nav-item-dropdown class="hv" text="CATEGORIES" right>
              <b-dropdown-item router-link to="/slider">Automobile</b-dropdown-item>
              <b-dropdown-item href="#">Communication</b-dropdown-item>
              <b-dropdown-item href="#">Education</b-dropdown-item>
              <b-dropdown-item href="#">Restaurant</b-dropdown-item>
              <b-dropdown-item href="#">Stock Market</b-dropdown-item>
              <b-dropdown-item href="#">Real Estate</b-dropdown-item>
              <b-dropdown-item href="#">Insurance</b-dropdown-item>
              <b-dropdown-item href="#">Health & Wealth</b-dropdown-item>
              <b-dropdown-item href="#">Entertainment & Sports</b-dropdown-item>
              <b-dropdown-item href="#">JObs</b-dropdown-item>
              <b-dropdown-item href="#">Travel & Tourism</b-dropdown-item>
              <b-dropdown-item href="#">Market Place</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div v-else router-link to="/signin"></div>
        </b-nav-item>
      </div>
      <!--<a href="Home"><b-nav-text><h4 style="color:black!important;">TIES</h4></b-nav-text></a>-->
      <b-collapse style="padding-right: 110px" is-nav id="nav_collapse">
        <b-nav-item href="/">HOME</b-nav-item>
        <!-- <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>-->

        <b-nav-item href="#">PAGES</b-nav-item>
        <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>-->

        <b-nav-item href="#">SERVICES</b-nav-item>
        <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>-->

        <b-nav-item href="#">CONTACT US</b-nav-item>
        <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>-->

        <b-nav-item href="#">PARTNER WITH US</b-nav-item>
        <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>-->
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
     <script lang="js">
    import nav1 from '@/components/nav1'
import navlogged from '@/components/navlogged'
    import store from "../store";

    export default {
        name: 'app',
        components:{
            nav1,
            navlogged
        },
        data() {

            return {
                data: localStorage.getItem("data")

            }
        },
        computed: {
        loggedIn(){
            return  store.state.isLoggedIn
        }
    },
        methods: {
            handlelogout() {
                //alert("hai")
                store.commit("logoutUser");
                localStorage.removeItem('token')
                localStorage.removeItem('data')
                localStorage.removeItem('data1')
                localStorage.removeItem('data2')
                localStorage.removeItem('data3')
                localStorage.removeItem('data4')
                this.$router.push({ name: 'signin' })
            }
        }
    }
</script>
    
    <style>
.navbar .nav-text .h3 {
  text-align: center;
}
.navbar-toggler {
  background-color: white !important;
}
.navvink {
  color: black !important;
}
.nav-item a {
  color: black !important;
}
a:hover {
  color: black !important;
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
.fa-facebook-f {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.fa-instagram {
  color: white;
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
}
.srh {
  padding-right: 50px !important;
  padding-top: 15px;
  text-align: left;
}
@media (min-width: 320px) and (max-width: 480px) {
  .sw {
    width: 8cm !important;
  }
}
@media (min-width: 760px) and (max-width: 1800px) {
  .ii {
    display: none !important;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .yy {
    display: none;
  }
}
</style>