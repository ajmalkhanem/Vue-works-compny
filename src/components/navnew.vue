<template>
    <div>
            <b-navbar class="navbar navbar-expand-sm bg-whitesmoke navbar-whitesmoke" toggleable="lg" type="light" variant="light">
                <div class="container">
                        <span >Weicome to CloudGM </span>

                        <b-collapse id="nav-collapse" is-nav>
                                <b-navbar-nav class="ml-auto">
                                    
                                    <b-nav-item>
                
                                    
                                        <span style="padding-left:10px;">  Become a Seller  </span>
                                        <span style="padding-left:10px;"> | </span>
                                        <span style="padding-left:10px;">SignUp </span>
                                        <span style="padding-left:10px;">|  </span>
                                        <span style="padding-left:10px;">SignIn  </span>
                                        
                        
                                       
                
                
                                    </b-nav-item>
                
                                    <b-nav-item class=" navt "><router-link to=""><strong><div style="color:	#111113 !important;">
                                            <img src="../assets/ind.png" style="width:25px;height:20px;">
                                            </div></strong></router-link></b-nav-item>
                                          <b-nav-item class="navt "><router-link to=""><strong><div style="color:	#111113 !important;">
                                            <img src="../assets/uae.png" style="width:25px;height:25px;">
                                            </div></strong></router-link></b-nav-item>
                
                                </b-navbar-nav>
                
                
                            </b-collapse>
                </div>   
                
            
                </b-navbar>
       

        <div>
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
    </div>

</template>

<style>
    .h {
        width: 100%;
        color: black;
        border: 1px solid silver;
        border-radius: 3px;
    }

    .img1 {
        opacity: 0.7;
        filter: alpha(opacity=50);
        height: 40px;
        width: 30px !important;
    }

    reg:hover {
        display: inline-block;
        text-transform: uppercase;
        margin-bottom: 15px;
        background: transparent none repeat scroll 0% 0%;
        border-bottom: 2px solid #ff0000;
        font-size: 20px;
        line-height: 30px;
    }

    .img2 {
        height: 50px;
        width: 120px !important;
    }

    .bg-light {}

    -->.navbar .nav-text .h3 {
        text-align: center;
    }

    .navbar-toggler {

        background-color: darkgreen !important;

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
        border: solid 2px #006400 !important;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0);
        font-size: 25px;
    }

    .hv:hover {
        background-color: #808080;
    }

    .ml-1 {
        margin-left: ($spacer * .25) !important;
    }
</style>

<script>

</script>