<template>

<div>
  <hooper :infiniteScroll="true" :itemsToShow="4"   :progress="true" :autoPlay="true" :playSpeed="8000">
    
      <slide>
            <b-container class="bv-example-row">
                    <b-row>
                 <b-col sm="8">
                                    
                <div align="left">
                 <b-card title="DOCUMENTS">
                                       
            <b-card-text style="color: lightseagreen;">DOCUMENT VARIFICATION
            </b-card-text>
           
             <b-container class="bv-example-row">
            <b-row>
            <b-col>
            <img src="../assets/car.jpg" style="width: 200px;height: 200px;"  alt="Sample image">
            </b-col>
             <b-col></b-col><b-col></b-col>
            </b-row><br><br>
            <b-row>
            <b-col>bvjhfh</b-col>
            <b-col>jajamk</b-col>
            <b-col>liyh</b-col>
            </b-row>
         </b-container></b-card></div>
        </b-col>
                            </b-row></b-container>  
        </slide> 
    <slide>
            <b-container class="bv-example-row">
                    <b-row>
                 <b-col sm="8">
                                    
                <div align="left">
                 <b-card title="DOCUMENTS">
                                       
            <b-card-text style="color: lightseagreen;">DOCUMENT VARIFICATION
            </b-card-text>
           
             <b-container class="bv-example-row">
            <b-row>
            <b-col>
            <img src="../assets/car.jpg" style="width: 200px;height: 200px;" class="rounded-circle" alt="Sample image">
            </b-col>
             
            </b-row><br><br>
            <b-row>
            <b-col>bvjhfh</b-col>
            <b-col>jajamk</b-col>
            <b-col>liyh</b-col>
            </b-row>
         </b-container></b-card></div>
        </b-col>
                            </b-row></b-container>
    </slide> 
   
      <slide>
            <b-container class="bv-example-row">
                    <b-row>
                 <b-col sm="8">
                                    
                <div align="left">
                 <b-card title="DOCUMENTS">
                                       
            <b-card-text style="color: lightseagreen;">DOCUMENT VARIFICATION
            </b-card-text>
           
             <b-container class="bv-example-row">
            <b-row>
            <b-col>
            <img src="../assets/car.jpg" style="width: 200px;height: 200px;" class="rounded-circle" alt="Sample image">
            </b-col>
             
            </b-row><br><br>
            <b-row>
            <b-col>bvjhfh</b-col>
            <b-col>jajamk</b-col>
            <b-col>liyh</b-col>
            </b-row>
         </b-container></b-card></div>
        </b-col>
                            </b-row></b-container>
      </slide> 

      <slide>
            <b-container class="bv-example-row">
                    <b-row>
                 <b-col sm="8">
                                    
                <div align="left">
                 <b-card title="DOCUMENTS">
                                       
            <b-card-text style="color: lightseagreen;">DOCUMENT VARIFICATION
            </b-card-text>
           
             <b-container class="bv-example-row">
            <b-row>
            <b-col>
            <img src="../assets/car.jpg" style="width: 200px;height: 200px;" class="rounded-circle" alt="Sample image">
            </b-col>
             
            </b-row><br><br>
            <b-row>
            <b-col>bvjhfh</b-col>
            <b-col>jajamk</b-col>
            <b-col>liyh</b-col>
            </b-row>
         </b-container></b-card></div>
        </b-col>
                            </b-row></b-container>  
      </slide> 

    
<hooper-navigation slot="hooper-addons" style="padding-left:80px!important;"></hooper-navigation>
  </hooper>
</div>

</template>
<script>
  import {
  Hooper,
  Slide,
  Navigation as HooperNavigation 
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  export default {
     components: {
    Hooper,
    Slide,
    HooperNavigation
  },
 }
</script>
<style>
.bgt{
  height:auto;
  width:auto;
 
}
@media (min-width: 576px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto !important; 
}
}

@media (min-width:375px) {

.bgt{
  height:auto;
  width:300px;
 
}
}
@media (min-width:375px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:1281px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:1441px) {
.hooper{
    position: relative;
   
    width: auto;
    height: auto; 
}
}
@media (min-width:1025px) {
.hooper{
    position: relative;
  
    width: auto;
    height: auto; 
}
}
@media (min-width:768px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:320px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}

h1, h2 {
  font-weight: normal;
}
@media (min-width:1441px) {
.bgt{
  height:auto;
  width:auto; 
}
}


.bk{
  background-color:grey;
}
.two {
  border-style: solid;
  border-width: 1px;
  border-color:black;
 
}

.so{
 background-color: brown!important;
}
.para {
    color: black !important;
      font-size: 15px !important ;
      line-height: 1.5 !important;
      text-align: justify !important;
      display: block !important;
      margin-block-start: 1em !important;
      margin-block-end: 1em !important;
      margin-inline-start: 0px !important;
      margin-inline-end: 0px !important;
  }
  .square_btn
  {
      display: inline-block;
      padding: 7px 20px;
      border-radius: 25px;
      text-decoration: none;
      color: #FFF;
      background: cornflowerblue;
      transition: .4s;
  }
  



.container1 {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container1:hover .image {
  opacity: 0.3;
}

.container1:hover .middle {
  opacity: 1;
}

.text {
  color: rgb(15, 10, 10);
  font-size: 25px;
  padding: 16px 32px;
  text-align: left;
}
</style>

