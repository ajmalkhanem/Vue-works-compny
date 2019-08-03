<template>
<div>
    <div class="navv" v-if="loggedIn==true">
      
    <b-navbar  toggleable="lg" type="light"  style="background-color: white;">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    &nbsp;&nbsp;&nbsp;<a href=""> <b-img :src="require('../assets/logo.png')" style="width:200px;height:130px;" ></b-img></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div class="topnav">
                       <div class="search-container">
                            <form action="">
                              <input type="text" style="background-color:#f2ebeb;width:350px;height:50px;" placeholder=" Search.." name="search">
                              <button  style="background-color:#f2ebeb;width:60px;height:50px;" type="submit" s><i class="fa fa-search"></i></button>                      
       </form>
                          </div>
                        </div>          <b-collapse is-nav id="nav_collapse">
          
          <b-nav-item href="#" class="mx-auto"></b-nav-item>
          <b-nav-item class="navt">
            </b-nav-item>
          <b-nav-item class="navt">
            </b-nav-item>
          <b-nav-item class="navt"><router-link to=""><strong><div style="color:	#111113 !important;">
            <img src="../assets/ind.png" style="width:25px;height:20px;">
            </div></strong></router-link></b-nav-item>
          <b-nav-item class="navt"><router-link to=""><strong><div style="color:	#111113 !important;">
            <img src="../assets/uae.png" style="width:25px;height:25px;">
            </div></strong></router-link></b-nav-item>
            <b-nav-item class="navt">
                    <div class="dropdown">
                            <img src="../assets/pro.png" class="rounded-circle" alt="Person" width="30" height="30">
                            {{data}}

                            <div class="dropdown-content">
                                    

                               
 <router-link to=""><div style="color:	#111113 !important;">Settings</div></router-link>    
 <router-link to="/editprofile"><div style="color:	#111113 !important;">Profile</div></router-link>  
  <a v-on:click="handlelogout()">logout</a>                       </div>
                        
                    </div>
                </b-nav-item>

         </b-collapse>
       <b-navbar-brand>
          <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
          </b-navbar-brand>
      </b-navbar>
    </div>
    <div class="navv" v-else>
      
    <b-navbar  toggleable="lg" type="light"  style="background-color: white;">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    &nbsp;&nbsp;&nbsp;<a href=""> <b-img :src="require('../assets/logo.png')" style="width:200px;height:130px;" ></b-img></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div class="topnav">
                       <div class="search-container">
                            <form action="">
                              <input type="text" style="background-color:#f2ebeb;width:350px;height:50px;" placeholder=" Search.." name="search">
                              <button  style="background-color:#f2ebeb;width:60px;height:50px;" type="submit" s><i class="fa fa-search"></i></button>                      
       </form>
                          </div>
                        </div>          <b-collapse is-nav id="nav_collapse">
          
          <b-nav-item href="#" class="mx-auto"></b-nav-item>
          <b-nav-item class="navt"><router-link to="/sellerindex"><strong><div style="color:	#111113 !important;">Become seller</div></strong></router-link></b-nav-item>
          <b-nav-item class="navt"><router-link to="/signup1"><strong><div style="color:	#111113 !important;">Signup</div></strong></router-link></b-nav-item>
          <b-nav-item class="navt"><router-link to="/signin"><strong><div style="color:	#111113 !important;">Signin</div></strong></router-link></b-nav-item>
          <b-nav-item class="navt"><router-link to=""><strong><div style="color:	#111113 !important;">
            <img src="../assets/ind.png" style="width:25px;height:20px;">
            </div></strong></router-link></b-nav-item>
          <b-nav-item class="navt"><router-link to=""><strong><div style="color:	#111113 !important;">
            <img src="../assets/uae.png" style="width:25px;height:25px;">
            </div></strong></router-link></b-nav-item>
            

         </b-collapse>
       <b-navbar-brand>
          <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
          </b-navbar-brand>
      </b-navbar>
    </div>
    </div>

    </template>
    
    <script lang="js">
    import store from "../store";

    export default {
        name: 'app',
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

        background-color: black !important;

    }

    .navt {
        color: rgb(18, 126, 66) !important;
    }

    .nav-item a {
        color: black !important;
        hover: black !important;
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

    #button {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 10px;
        padding-left: 10px;

        border: none;
        border: solid 2px #1a0c68 !important;
        border-radius: 5px;
        background: rgba(102, 97, 116, 0);
        font-size: 25px;
    }
</style>
<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
        background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown:hover .dropbtn {
        background-color: #3e8e41;
    }
</style>
<style>
    .chip {
        display: inline-block;
        padding: 0 25px;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        border-radius: 25px;
        background-color: white;
    }

    .chip img {
        float: left;
        margin: 0 10px 0 -25px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
</style>