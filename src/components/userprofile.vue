<template>
  <div>
    <navbar2></navbar2>
    <div class="bg1">

<br>
      <div class="transbox1">
        <b-card no-body>
          <b-tabs pills card vertical>

            <b-tab title="MY ACCOUNT" active>

              <b-card-text>

                <navbar1></navbar1>

                <myaccount></myaccount>





              </b-card-text>
            </b-tab>
            <b-tab title="MY VEHICLE">
              <b-card-text>
                <br>
                <router-link to="/addcar">
                  <b-button variant="">+ Add New</b-button>
                </router-link>
                <myvehicle></myvehicle>

              </b-card-text>
            </b-tab>
            <b-tab title="BUY & SELL">
              <b-card-text>
                <b-row>

                  <b-col>
                    <img src="../assets/look.jpg" style="width:100%;height:300px;">
                  </b-col>
                  <b-col>
                    <img src="../assets/seell.png" style="width:100%;height:300px;">
                  </b-col>
                </b-row>
                <div>
                  <b-tabs content-class="mt-3">
                    <b-tab title="New Car" active>
                      <p>
                        <newcar></newcar>

                      </p>
                    </b-tab>
                    <b-tab title="Used Car">
                      <p>
                        <usedcar></usedcar>
                      </p>
                    </b-tab>

                  </b-tabs>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="ACCESSORIES">
              <b-card-text>
                <access></access>
              </b-card-text>
            </b-tab>
            <b-tab title="FUEL STATIONS">
              <b-card-text>
                <fuel></fuel>
              </b-card-text>
            </b-tab>
            <b-tab title="HELP & SUPPORT">
              <b-card-text>Help & Support</b-card-text>
            </b-tab>



          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  import Hooper from '@/components/Hooper'
  import myaccount from '@/components/myaccount'
  import buy from '@/components/buy'
  import navbar1 from '@/components/navbar1'
  import navbar2 from '@/components/navbar2'
  import car from '@/components/car'
  import newcar from '@/components/newcar'
  import usedcar from '@/components/usedcar'
  import access from '@/components/access'
  import fuel from '@/components/fuel'
  import myvehicle from '@/components/myvehicle'






  export default {
    components: {
      Hooper,
      myaccount,
      buy,
      navbar1,
      navbar2,
      car,
      newcar,
      usedcar,
      access,
      fuel,
      myvehicle



    },
  }
</script>
<style>
  #rcorners1 {
    border-radius: 25px;
    padding: 20px;
    width: 200px;
    height: 8px;
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
<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial;
    font-size: 17px;
  }

  .container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }

  .container img {
    vertical-align: middle;
  }

  .container .content {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    /* Fallback color */
    background: rgba(0, 0, 0, 0.5);
    /* Black background with 0.5 opacity */
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
  }
</style>
<style>
  body,
  html {
    height: 100%;
    margin: 0;
  }

  .bg1 {
    /* The image used */
    background-image: url("https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Solar-web_17f1199fab90a9f453b9ba4167c28e87.jpg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div.transbox1 {
    margin: 30px;
    background-color: #ffffff;
    border: 1px solid white;
    opacity: 2;
    filter: alpha(opacity=60);
    /* For IE8 and earlier */
  }
</style>