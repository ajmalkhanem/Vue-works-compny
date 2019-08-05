<template>
  <div>

    <b-navbar class="navbar navbar-expand-sm bg-whitesmoke navbar-whitesmoke" toggleable="lg" type="light"
      variant="light">
      <div class="container">
        <span>Weicome to CloudGM </span>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">

            <b-nav-item>


              <span style="padding-left:10px;"> Become a Seller </span>
              <span style="padding-left:10px;"> | </span>
              <span style="padding-left:10px;">SignUp </span>
              <span style="padding-left:10px;">| </span>
              <span style="padding-left:10px;">SignIn </span>





            </b-nav-item>

            <b-nav-item class=" navt ">
              <router-link to=""><strong>
                  <div style="color:	#111113 !important;">
                    <img src="../assets/ind.png" style="width:25px;height:20px;">
                  </div>
                </strong></router-link>
            </b-nav-item>
            <b-nav-item class="navt ">
              <router-link to=""><strong>
                  <div style="color:	#111113 !important;">
                    <img src="../assets/uae.png" style="width:25px;height:25px;">
                  </div>
                </strong></router-link>
            </b-nav-item>

          </b-navbar-nav>


        </b-collapse>
      </div>


    </b-navbar>
    <div class="container" style="background-color: white!important;">

      <b-navbar toggleable="lg" type="light" variant="light" style="background-color:white!important;">


        <a href="Home">
          <b-nav-text>
            <h6 style="color:black;"></h6>
          </b-nav-text>
        </a>

        <b-img :src="require('../assets/CGMlo.png')" style=" width:250px; height:130px;padding-bottom:10px;"></b-img>



        <b-nav-item class="ml-auto">
          <div class="input-group srh " style="width: 13cm ;padding-bottom:10px;">

            <input type="text" class="form-control" placeholder="Search here">
            <div class="input-group-append">
              <button type="button" class="btn btn-danger">
                <span><i class="fa fa-search"></i> </span>
              </button>
            </div>
          </div>

        </b-nav-item>




        <!-- <b-nav-item href="#" class="mx-auto">
                <b-img :src="require('../assets/CGMlo.png')" style=" width:250px; height:130px;padding-bottom:10px;"></b-img>

          </b-nav-item> -->

        </b-nav-item>


        </b-collapse>
        </b-navbar-nav toggleable="lg">
        <b-navbar-brand>
          <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
        </b-navbar-brand>
      </b-navbar>
    </div>
    <b-navbar toggleable="lg" style="background-color:#f8f9fa" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <div style="padding-left: 100px;">

        <b-nav-item class="hv">
          <i class="fa fa-list"></i> &nbsp;CATEGORIES
        </b-nav-item>
      </div>
      <!--<a href="Home"><b-nav-text><h4 style="color:black!important;">TIES</h4></b-nav-text></a>-->
      <b-collapse style="padding-right: 110px" is-nav id="nav_collapse">

        <b-nav-item class="mx-auto" href="#"></b-nav-item>

        <b-nav-item-dropdown class="hv" text="HOME" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown class="hv" text="PAGES" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown class="hv" text="SERVICES" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown class="hv" text="CONTACT US" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown class="hv" text="PARTNER WITH US" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>









        <b-nav-item class="ml-auto"><i class="fa fa-phone"> 1234567890</i></b-nav-item>
      </b-collapse>
      </b-navbar-nav toggleable="lg">
      <b-navbar-brand>
        <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script lang="js">
  export default {
    name: 'app-header'
  }
</script>

<style>
  .navbar .nav-text .h3 {
    text-align: center;
  }

  .navbar-toggler {

    background-color: black !important;

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

  @media (min-width: 768px) and (max-width:1024px) {
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
    hover-color: black !important;
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
    background: #3B5998;
    color: white;
  }

  .fa-twitter {
    background: #55ACEE;
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
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, .25);
  }

  .srh {
    padding-right: 50px !important;
    padding-top: 15px;
    text-align: left;
  }
</style>