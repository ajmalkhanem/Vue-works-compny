<template>

<div>
  <hooper :infiniteScroll="true" :itemsToShow="4"   :progress="true" :autoPlay="true" :playSpeed="8000">
    
      <slide>
        
          <div class="container1">
            <img src="../assets/edu.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
            <div class="middle">
              <div class="text"><b>Education</b></div>
            </div>
          </div>                <br><br>
           
        </slide> 
        <slide>
           
    
              <div class="container1">
                <img src="../assets/edu.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
                <div class="middle">
                  <div class="text"><b>Education</b></div>
                </div>
              </div>                <br><br>
                 
            </slide> 
            <slide>
                
        
                  <div class="container1">
                    <img src="../assets/edu.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
                    <div class="middle">
                      <div class="text"><b>Education</b></div>
                    </div>
                  </div>                <br><br>
                    
                </slide> 
                <slide>
                    
            
                      <div class="container1">
                        <img src="../assets/edu.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
                        <div class="middle">
                          <div class="text"><b>Education</b></div>
                        </div>
                      </div>                <br><br>
                        
                    </slide> 
                    <slide>
                        
                
                          <div class="container1">
                            <img src="../assets/edu.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
                            <div class="middle">
                              <div class="text"><b>Education</b></div>
                            </div>
                          </div>                <br><br>
                           
                        </slide> 
                        <slide>
                            
                    
                              <div class="container1">
                                <img src="../assets/edu.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
                                <div class="middle">
                                  <div class="text"><b>Education</b></div>
                                </div>
                              </div>                <br><br>
                                
                            </slide> 
                            <slide>
                                
                        
                                  <div class="container1">
                                    <img src="../assets/edu.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
                                    <div class="middle">
                                      <div class="text"><b>Education</b></div>
                                    </div>
                                  </div>                <br><br>
                                    
                                </slide> 
                                <slide>
                            
                                      <div class="container1">
                                        <img src="../assets/edu.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
                                        <div class="middle">
                                          <div class="text"><b>Education</b></div>
                                        </div>
                                      </div>                <br><br>
                                        
                                              
                              
                                    </slide> 
    <slide>

        <div class="container1">
          <img src="../assets/car.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
          <div class="middle">
            <div class="text"><b>Automobiles</b></div>
          </div>
        </div>                <br><br>
          
    </slide> 
   
      <slide>

              <div class="container1">
                <img src="../assets/rest.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
                <div class="middle">
                  <div class="text"><b>Restaurant</b></div>
                </div>
              </div>                <br><br>
                
                      
       
      </slide> 

      <slide>
          <div class="style_prevu_kit" style="background-color: lawngreen;">
                         <br><br>
           
                  
    </div>
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
  opacity: .9;
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
<style>
.fond{position:absolute;padding-top:85px;top:0;left:0; right:0;bottom:0;
  background-color:#00506b;}
 
 .style_prevu_kit
 {
     display:inline-block;
     border:0;
     width:196px;
     height:210px;
     position: relative;
     -webkit-transition: all 200ms ease-in;
     -webkit-transform: scale(1); 
     -ms-transition: all 200ms ease-in;
     -ms-transform: scale(1); 
     -moz-transition: all 200ms ease-in;
     -moz-transform: scale(1);
     transition: all 200ms ease-in;
     transform: scale(1);   
 
 }
 .style_prevu_kit:hover
 {
     box-shadow: 0px 0px 150px #000000;
     z-index: 2;
     -webkit-transition: all 200ms ease-in;
     -webkit-transform: scale(1.5);
     -ms-transition: all 200ms ease-in;
     -ms-transform: scale(1.5);   
     -moz-transition: all 200ms ease-in;
     -moz-transform: scale(1.5);
     transition: all 200ms ease-in;
     transform: scale(1.5);
 }</style>

