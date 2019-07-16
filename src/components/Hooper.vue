<template>

<div>
  <hooper :infiniteScroll="true" :itemsToShow="4"   :progress="true" :autoPlay="true" :playSpeed="8000">
    
      <slide>
          <div class="col-md-12">
              <div id="rcorners1" style="width:300px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:rgba(33, 99, 88, 0.39);border:solid rgb(235, 238, 240) 2px;height:300px;float:left;margin-top:20px;margin-left:20px;">

                  <img src="../assets/a2.png" style="width:150px;height: 150px;"></img>
                  <br><br>
                  <div class="text-center my-3">
                      <b-button v-b-tooltip.hover title="click to view details" class="btn btn-danger">Automobiles</b-button>
                    </div>  </div>      </div>  
        </slide> 
    <slide>
      <div class="col-md-12">
          <div id="rcorners1" style="width:300px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:rgba(33, 99, 88, 0.39);border:solid rgb(235, 238, 240) 2px;height:300px;float:left;margin-top:20px;margin-left:20px;">

              <img src="../assets/a11.jpg" style="width:150px;height: 150px;"></img>
              <br><br>
              <div class="text-center my-3">
                  <b-button v-b-tooltip.hover title="click to view details" class="btn btn-danger">Automobiles</b-button>
                </div>  </div> </div> 
    </slide> 
   
      <slide>
        <div class="col-md-12">
            <div id="rcorners1" style="width:300px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(119, 123, 124, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:rgba(33, 99, 88, 0.39);border:solid rgb(235, 238, 240) 2px;height:300px;float:left;margin-top:20px;margin-left:20px;">

                <img src="../assets/a1.png" style="width:150px;height: 150px;"></img>
                <br><br>
                <div class="text-center my-3">
                    <b-button v-b-tooltip.hover title="click to view details" class="btn btn-danger">Automobiles</b-button>
                  </div>
                   </div>   
        </div>  
      </slide> 

      <slide>
        <div class="col-md-12">
            <div id="rcorners1" style="width:300px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:rgba(33, 99, 88, 0.39);border:solid rgb(235, 238, 240) 2px;height:300px;float:left;margin-top:20px;margin-left:20px;">

                                                    <img src="../assets/a6.jpeg" style="width:150px;height: 150px;"></img>
                                                    <br><br>
                                                    <div class="text-center my-3">
                                                        <b-button v-b-tooltip.hover title="click to view details" class="btn btn-danger">Automobiles</b-button>
                                                      </div></div> </div> 
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
</style>
