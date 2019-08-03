<template>
  <div>
    <div>
      <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
        img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="400"
            src="https://jovinacooksitalian.files.wordpress.com/2018/07/famagusta-tiser.jpg" alt="image slot">
        </b-carousel-slide>

        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="400"
            src="https://www.travelerchoice.com/wp-content/uploads/2016/05/TC08057-Lifestyle-Photo_home-page-banner.jpg"
            alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="400"
            src="https://mauibrewingco.com/maui-content/uploads/2017/08/Waikiki_Slider_Burger.jpg" alt="image slot">
        </b-carousel-slide>

      </b-carousel>
    </div>
    <div class="container" style="padding-top: 30px;">
      <div class="row">


        <div class="col-md-6" style="padding-right: 30x;">
          <div class="row " style="padding-bottom: 20px">
            <div class="card mb-3 ">
              <div class="row no-gutters">
                <div class="col-md-4 ">
                  <img src="../assets/h22.jpg" class="card-img img3 im1" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body bg">
                      <div class="bd">
                        <h5 style="text-align: left;" class="card-title st"><b> &nbsp; Vehicle Name</b> </h5>
  
                        <div class="row">
                          <div class="col-md-1">
  
                          </div>
                          <div class="col-md-6">
                            <b-row>
                              <span class="pull-left"><b>Traffic Plate: </b></span>
  
                            </b-row>
                            <b-row>
                              <span class="pull-left"><b>Registeration Date:</b> </span>
                            </b-row>
                            <b-row>
                                <span class="pull-left"><b>TC Number:</b> </span>
                            </b-row>
                            <b-row>
                                <span class="pull-left"><b>Policy Expire:</b></span>
                            </b-row>
                            <b-row>
                                <span class="pull-left"><b>Insurance Expire:</b></span>
                            </b-row>
  
                          </div>
                          <div class="col-md-4">
                            <b-row>
                              <span class="pull-left"> 1234567</span>
                            </b-row>
                            <b-row>
                              <span class="pull-left">11/11/2018</span>
                            </b-row>
                            <b-row>
                              <span class="pull-left">456789 </span>
                            </b-row>
                            <b-row>
                                <span class="pull-left">11/11/2025 </span>
                            </b-row>
                            <b-row>
                                <span class="pull-left">11/11/2025 </span>
                            </b-row>
  
                          </div>
  
  
                        </div>
  
                      </div>
  
  
                    </div>
  
  
                  </div>
              </div>
            </div>



          </div>
        </div>
        <div class="col-md-6">
          <div class="row " style="padding-bottom: 20px">
            <div class="card mb-3 ">
              <div class="row no-gutters">
                <div class="col-md-4 ">
                  <img src="../assets/h22.jpg" class="card-img img3 im1" alt="...">
                </div>

                <div class="col-md-8">
                  <div class="card-body bg">
                    <div class="bd">
                      <h5 style="text-align: left;" class="card-title st"><b> &nbsp; Vehicle Name</b> </h5>

                      <div class="row">
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-6">
                          <b-row>
                            <span class="pull-left"><b>Traffic Plate: </b></span>

                          </b-row>
                          <b-row>
                            <span class="pull-left"><b>Registeration Date:</b> </span>
                          </b-row>
                          <b-row>
                              <span class="pull-left"><b>TC Number:</b> </span>
                          </b-row>
                          <b-row>
                              <span class="pull-left"><b>Policy Expire:</b></span>
                          </b-row>
                          <b-row>
                              <span class="pull-left"><b>Insurance Expire:</b></span>
                          </b-row>

                        </div>
                        <div class="col-md-4">
                          <b-row>
                            <span class="pull-left"> 1234567</span>
                          </b-row>
                          <b-row>
                            <span class="pull-left">11/11/2018</span>
                          </b-row>
                          <b-row>
                            <span class="pull-left">456789 </span>
                          </b-row>
                          <b-row>
                              <span class="pull-left">11/11/2025 </span>
                          </b-row>
                          <b-row>
                              <span class="pull-left">11/11/2025 </span>
                          </b-row>

                        </div>


                      </div>

                    </div>


                  </div>


                </div>
              </div>
            </div>
          </div>



        </div>
      </div>


    </div>
  </div>

  </div>
</template>
<script>
</script>
<style>
  .bg {
    max-width: 800px;
    max-height: 180px !important;
  }

  .im1:hover {
    opacity: 1.0;
    filter: alpha(opacity=100);
    /* For IE8 and earlier */
  }

  .img3 {
    opacity: 0.7;
    filter: alpha(opacity=50);
    /* For IE8 and earlier */
    height: 100% !important;
    width: 100% !important;
  }

  .st {
    text-transform: uppercase;
    color: black;
    letter-spacing: 2px;
    position: relative;

  }

  .dot-hr {
    border-bottom: 1px dotted #CECBC7;
    margin-bottom: 10px;
  }

  .pull-left {
    float: left !important;
  }

  .pull-right {
    float: right !important;
  }

  .ab {
    font-weight: 600;
    color: #ff0000;
    font-size: 25px;
  }

  .needs {
    text-overflow: ellipsis !important;

    width: 30em;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left !important;
  }
</style>