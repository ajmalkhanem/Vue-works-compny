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
                src="https://pictures.dealer.com/m/metrolexusvictoriatc/1423/2271ab1ea247d72d4a9c20949c67d00dx.jpg"
                alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="1024" height="400"
                src="https://www.rjsautobodyplus.com/images/banner-reviews.jpg" alt="image slot">
            </b-carousel-slide>
    
          </b-carousel>
        </div>
        <div class="container">
            <div class="row" style="padding-top: 80px;padding-bottom:30px">

                <div class="col-md-4 ">
                  
                       <router-link to="/newpage"><div class="card " style="width: 18rem; height: 220px;border-radius: 25px">
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