<template>
    <div class="container" style="padding-top:20px!important;">

                <div v-for="listing in list" >
                  <router-link v-bind:to="'/profile/' + listing._id">
                   
                    <div id="rcorners1" class="ii"
                      style="width:600px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:250px;">
                      <br>
                      <div class="col-md-12 row  " >
                            <div class="col-md-4">
                                
                      <img src="../assets/car.jpg" style="width: 200px;height:200px;"></div>
                      <div class="col-md-8">
                          <div class="col-md-12 row" >
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
                      <h6>{{ listing.registerDate}}</h6>
                     
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
      props:['id'],
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
    
  
   
    .jj{
      float:left;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
    .ii {
    }
    }
  </style>