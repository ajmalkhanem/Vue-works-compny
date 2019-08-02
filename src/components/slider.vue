<template>
    <div>
        <div>
            <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
                img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
                <b-carousel-slide>
                  <img
                  slot="img"
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="400"
                  src="https://jovinacooksitalian.files.wordpress.com/2018/07/famagusta-tiser.jpg"
                  alt="image slot"
                >
                </b-carousel-slide>

                <b-carousel-slide >
                  <img
                  slot="img"
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="400"
                  src="https://www.travelerchoice.com/wp-content/uploads/2016/05/TC08057-Lifestyle-Photo_home-page-banner.jpg"alt="image slot"
                >
                </b-carousel-slide>
                <b-carousel-slide>
                  <img
                  slot="img"
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="400"
                  src="https://mauibrewingco.com/maui-content/uploads/2017/08/Waikiki_Slider_Burger.jpg"
                  alt="image slot"
                >
                </b-carousel-slide>
                
            </b-carousel>
        </div>
        <div class="container">
            <div class="row" style="padding-top: 80px;padding-bottom:30px">

                <div class="col-md-4 ">
                        <div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                                <div class="card-body">
                                  <p style="text-align: center;">
                                  
                                      <span><i class="fa fa-car fa-5x" style="color: blue"></i></span>
                                      <p style="text-align: center; color: blue;" > My vehicles</p>
                                  </p>
                              
                                </div>
                              </div>
                </div>

                <div class="col-md-4 ">
                    <div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                            <div class="card-body">
                              <p style="text-align: center;">
                              
                                  <span><i class="fa fa-building fa-5x" style="color: blue"></i></span>
                                  <p style="text-align: center; color: blue;" > Emergency Services</p>
                              </p>
                          
                            </div>
                          </div>
            </div>
            <div class="col-md-4 ">
                <div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                        <div class="card-body">
                          <p style="text-align: center;">
                          
                              <span><i class="fa fa-building fa-5x" style="color: blue"></i></span>
                              <p style="text-align: center; color: blue;" > Buy & Sell</p>
                          </p>
                      
                        </div>
                      </div>
        </div>

            </div>
            <div class="row" style="padding-top: 30px;padding-bottom:30px">

                    
                <div class="col-md-4 ">
                    <div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                            <div class="card-body">
                              <p style="text-align: center;">
                              
                                  <span><i class="fa fa-cog fa-5x" style="color: blue"></i></span>
                                  <p style="text-align: center; color: blue;" > Accessories</p>
                              </p>
                          
                            </div>
                          </div>
            </div>
            <div class="col-md-4 ">
                <div class="card " style="width: 18rem; height: 220px; border-radius: 25px">
                        <div class="card-body">
                          <p style="text-align: center;">
                          
                              <span><i class="fa fa-building fa-5x" style="color: blue"></i></span>
                              <p style="text-align: center; color: blue;" > Fuel Stations</p>
                          </p>
                      
                        </div>
                      </div>
        </div>
        <div class="col-md-4 ">
            <div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                    <div class="card-body">
                      <p style="text-align: center;">
                      
                          <span><i class="fa fa-question fa-5x" style="color: blue"></i></span>
                          <p style="text-align: center; color: blue;" > Help and Support</p>
                      </p>
                  
                    </div>
                  </div>
    </div>
                </div>
        </div>
        <div>
            <hoop>

            </hoop>
        </div>

    </div>
</template>
<script>
    import hoop from './hoop'

    export default{
        name:"slider",
        components:{
            hoop
        },
    }
</script>
<style>
  .cd
  {
    border-radius: 75%;
  }
</style>