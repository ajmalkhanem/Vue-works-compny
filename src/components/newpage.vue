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
              <div v-for="listing in list">
                  <router-link v-bind:to="'/profile/' + listing._id">
                    <div id="rcorners1"
                      style="width:300px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:300px;float:left;margin-top:20px;margin-left:20px;">
                      <br>
                      <h2><b>{{ listing.vehicleName}}</b></h2>
                      
                      <img src="../assets/car.jpg" style="width: 200px;height:200px;">
                    </div>
                  </router-link>
            
                </div>



          </div>
        </div>
      
  

      </div>
    </div>

  </div>
</template>
<script>


  export default {
    components: {


    },
    data() {
      return {

        list: [],

      };
    },
    mounted: function () {
      this.getData();
    },
    methods: {
      getData() {
        axios({
          method: 'POST',
          headers: {
            to: localStorage.getItem("token")
          },
          url: 'http://13.233.110.196/list/vehicle/',

        })
          .then((response) => {

            // console.log(response.data) 
            //console.log(response.data[0])     
            this.list = response.data.data

          })
      },

    }
  };

</script>
<style>
  .bg {
    max-width: 800px;
    max-height: 180px !important;
  }
  .im1:hover {
  opacity: 1.0;
  filter: alpha(opacity=100); /* For IE8 and earlier */
  }
  .img3 {
  opacity: 0.7;
  filter: alpha(opacity=50); /* For IE8 and earlier */
  height: 100%!important;
  width: 100% !important;
}
.st{
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
    float: left!important;
}
.pull-right {
    float: right!important;
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
    float: left!important;
}
    


</style>