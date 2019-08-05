<template>
  <div>
    <div>
      <b-carousel id="carousel-1" :interval="4000" controls indicators background="#ababab"
      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" >
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="400"
            src="http://wtautobody.com/wp-content/uploads/2015/04/b2.jpg" alt="image slot">
        </b-carousel-slide>

        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="400"
            src="http://www.testart.eu/wp-content/uploads/2017/01/bedienung-1600x400.jpg"
            alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="400"
            src="https://skodadealers.ie/wp-content/uploads/2016/07/dealer_special_offers-1600x400.jpg" alt="image slot">
        </b-carousel-slide>

      </b-carousel>
    </div>
    <div class="container" style="padding-top: 30px;">
      <div class="row">
        <div v-for="listing in list">
          <router-link v-bind:to="'/profile/' + listing._id">

            <div class="col-md-6" style="padding-right: 30x;">
              <div class="row " >



                <div class="card mb-3 ">
                  <div class="row no-gutters">
                    <div class="col-md-4 ">
                      <img src="../assets/car.jpg" class="card-img img3 im1" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body bg">
                        <div class="bd">
                          <h5 style="text-align: left;" class="card-title st"><b> &nbsp;{{ listing.vehicleName}} </b>
                          </h5>

                          <div class="row">

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
                                <span class="pull-left"> {{ listing.plateNo}}</span>
                              </b-row>
                              <b-row>
                                <span class="pull-left">{{ listing.registerDate.slice(0,10)}}</span>
                              </b-row>
                              <b-row>
                                <span class="pull-left">{{ listing.tcNo}} </span>
                              </b-row>
                              <b-row>
                                <span class="pull-left">{{ listing.polexpiryDate.slice(0,10)}} </span>
                              </b-row>
                              <b-row>
                                <span class="pull-left">{{ listing.inexpiryDate.slice(0,10)}} </span>
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
          </router-link>
          <router-link :to="'/editcar1/' + listing._id">y</router-link>

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