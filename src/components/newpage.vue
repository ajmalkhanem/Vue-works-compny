<template>
  <div>
    <div style="padding-top: 20px!important;padding-top: 10px!important;">
      <div v-for="listing in list">


        <div class="card container">
          <br>
          <div class="col-md-12 row " style="margin-top:0px;">

            <div class="col-md-3">


              <p v-for="doc in listing.documents">

                <img v-bind:src="'http://13.233.110.196/document/get/'+doc" class="card-img img3 im1"
                  style="width:200px;height:200px;"></p>
            </div>
            <div class="col-md-9">
              <h5 style="text-align: left;" class="card-title st"><b> &nbsp;{{ listing.vehicleName}} </b>
              </h5>
              <div class="col-md-12 row">

                <div class="col-md-3">

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
                <div class="col-md-3">
                  <b-nav-item-dropdown class="hv" text="Options " right>
                    <b-dropdown-item href="#">
                      <router-link v-bind:to="'/editcar1/' + listing._id" style="text-decoration: none!important;">Edit
                      </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <router-link v-bind:to="'/profile/' + listing._id" style="text-decoration: none!important;"> view
                      </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <router-link v-bind:to="'/deletecar/' + listing._id" style="text-decoration: none!important;">
                        Delete</router-link>
                    </b-dropdown-item>

                  </b-nav-item-dropdown>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
      <br>
      <p align="center"><router-link to="/addcar1" style="text-decoration: none!important;">
        <b-button variant="primary">Add New Vehicle</b-button></router-link></p>

      
    </div><br>
  </div>
</template>
<script>


  export default {
    props: ['id'],
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
  .jj {
    float: left;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
  }
</style>