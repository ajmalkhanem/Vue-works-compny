<template>
    <div>
        <div>
            <carousel></carousel>
        </div>
        <div class="container">
            <div class="row" style="padding-top: 80px;padding-bottom:30px">

                <div class="col-md-4 ">
                       <router-link v-bind:to="profile"><div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                                <div class="card-body">
                                  <p style="text-align: center;">
                                  
                                      <span><i class="fa fa-car fa-5x" style="color: blue"></i></span>
                                      <p style="text-align: center; color: blue;" > My vehicles</p>
                                  
                              
                                </div>
                              </div></router-link>
                </div>

                <div class="col-md-4 ">
                    <div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                            <div class="card-body">
                              <p style="text-align: center;">
                              
                                  <span><i class="fa fa-building fa-5x" style="color: blue"></i></span>
                                  <p style="text-align: center; color: blue;" > Emergency Services</p>
                              
                          
                            </div>
                          </div>
            </div>
            <div class="col-md-4 ">
                <div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                        <div class="card-body">
                          <p style="text-align: center;">
                          
                              <span><i class="fa fa-building fa-5x" style="color: blue"></i></span>
                              <p style="text-align: center; color: blue;" > Buy & Sell</p>
                          
                      
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
                              
                          
                            </div>
                          </div>
            </div>
            <div class="col-md-4 ">
                <div class="card " style="width: 18rem; height: 220px; border-radius: 25px">
                        <div class="card-body">
                          <p style="text-align: center;">
                          
                              <span><i class="fa fa-building fa-5x" style="color: blue"></i></span>
                              <p style="text-align: center; color: blue;" > Fuel Stations</p>
                          
                      
                        </div>
                      </div>
        </div>
        <div class="col-md-4 ">
            <div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
                    <div class="card-body">
                      <p style="text-align: center;">
                      
                          <span><i class="fa fa-question fa-5x" style="color: blue"></i></span>
                          <p style="text-align: center; color: blue;" > Help and Support</p>
                      
                  
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
    import hoop from '@/components/hoop'
    import carousel from '@/components/carousel'

  export default {
    props:['id'],
    name:"slider",
    components: {

hoop,
carousel
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
  .cd
  {
    border-radius: 75%;
  }
</style>