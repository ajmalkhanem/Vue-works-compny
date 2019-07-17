<template>
    <div class="navv">
    <b-navbar  toggleable="lg" type="light"  style="background-color: #ebeef2;">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    &nbsp;&nbsp;&nbsp;<a href="">  <b-img :src="require('../assets/logo1.png')" ></b-img></a>
        <!--<a href="Home"><b-nav-text><h4 style="color:black!important;">TIES</h4></b-nav-text></a>-->
          <b-collapse is-nav id="nav_collapse">
          
          <b-nav-item href="#" class="mx-auto"></b-nav-item>
          <b-nav-item class="navt"  href="/" ><strong><div style="color:	#111113 !important;">HOME</div></strong></a></b-nav-item>
          <b-nav-item  class="navvink"><a href="#about">ABOUT</a></b-nav-item>
          <b-nav-item  class="navvink"><router-link to="">SERVICES</router-link></b-nav-item>
          <b-nav-item  class="navvink"><router-link to="">BUSINESS</router-link></b-nav-item>
          <b-nav-item  class="navvink"><router-link to="">VENDOR REGISTRATION</router-link></b-nav-item>

         
          <b-nav-item  class="navvink"> <router-link to="/login" id="button" style="color:#131314 !important;"><strong>LOGIN</strong></router-link></b-nav-item>
         </b-collapse>
         </b-navbar-nav toggleable="lg"> 
       <b-navbar-brand>
          <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
          </b-navbar-brand>
      </b-navbar>
    </div>
    </template>
    
    <script lang="js">
       export default    {
         name: 'app'
                         }
    </script>
    
    <style>
   
    .navbar .nav-text .h3{
      text-align:center;
    }
    .navbar-toggler{
        
        background-color:black  !important;
      
    }
    .navt{
        color:rgb(18, 126, 66)!important;
    }
    
    .nav-item a{
      color:black  !important;
      hover:black  !important;
    }
    a:hover{
      color:black  !important;
    }
    
    @media (min-width: 1281px) {
      .navbar-expand-lg .navbar-nav .nav-link  .nav-item  {
      
        margin-right: 15px;
        margin-left: 15px;
        padding-left:100px; 
         
    }
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      .navbar-expand-lg .navbar-nav .nav-link  .nav-item .nav-text .h3 {
      
        margin-right: 15px;
        margin-left: 15px;
        padding-left:200px;
        font-size:12px;
        text-align:center;  
    }
    }
    @media (min-width: 768px) and (max-width:1024px) {
      .navbar-expand-lg .navbar-nav .nav-link  .nav-item  .nav-text .h3{
       
        margin-right: 15px;
        margin-left: 15px;
        padding-left:150px; 
    }
    }
    @media (min-width: 481px) and (max-width: 767px) {
      .navbar-expand-lg .navbar-nav .nav-link  .nav-item {
      
        margin-right: 15px;
        margin-left: 15px;
        padding-left:100px;
      }
    }
    @media (min-width: 320px) and (max-width: 480px) {
       .navbar-expand-lg .navbar-nav .nav-link  .nav-item {
      
        margin-right: 15px;
        margin-left: 15px;
        padding-left:100px;
      }
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    
    li {
      display: inline-block;
      margin: 0 10px;
      hover-color:black  !important;
         text-decoration: none;
    }
    
    a {
      color: black;
      font-weight:normal !important;
      font-size:16px !important;
      
    }
    a:hover{
      color:black !important;
    }
     a :hover{
        text-decoration: none !important;
    }
    #button {
     padding-top:10px;
     padding-bottom:10px;
     padding-right:10px;
     padding-left:10px;
     
     border:none;
     border:solid 2px 	#1a0c68!important;
     border-radius: 5px;
     background: rgba(34, 8, 104, 0);
     font-size: 25px;
}

    </style>