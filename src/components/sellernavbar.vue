<template>
<div>
    <div class="navv" v-if="loggedIn==true">
      
   <navlogged></navlogged>
    </div>
    <div class="navv" v-else>
      
   <nav1></nav1>
    </div>
    </div>

    </template>
    
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