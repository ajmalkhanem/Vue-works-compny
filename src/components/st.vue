<template>
        <div>

                <div v-for="listing in list" >
                  <router-link v-bind:to="'/car/' + listing._id">
                   
                    <div id="rcorners1"
                      style="width:600px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:250px;float:left;">
                      <br>
                      <div class="col-md-12 row">
                            <div class="col-md-4">
                                
                      <img src="../assets/car.jpg" style="width: 200px;height:200px;"></div>
                      <div class="col-md-8">
                          <div class="col-md-12 row">
                              <div class="col-md-6">
                                  <h6>Traffic Plate</h6>
                                  <h6>Registration Date</h6>
                                  <h6>TC Number</h6>
                                  <h6>Policy Expire</h6> 
                                  <h6>Insurance Expire</h6>
                                  </div>
                                  <div class="col-md-6">
                      <!-- <h6>{{ listing.vehicleName}}</h6> -->
                      <h6>{{ listing.plateNo}}</h6>
                      <h6>{{ listing.registerDate.slice(.10)}}</h6>
                     
                            <h6>{{ listing.tcNo}}</h6>
                            <h6>{{ listing.polexpiryDate}}</h6>
                            <h6>{{ listing.inexpiryDate}}</h6>
                      </h6>
                    </div>
                      
                      </div></div>
                     
                    </div>
                </div>
                  </router-link>
            
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