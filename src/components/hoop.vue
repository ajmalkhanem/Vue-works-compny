<template>
  <div>
    <div class="container" style="padding-top: 50px; padding-bottom:50px">
      <hooper
        :infiniteScroll="true"
        :itemsToSlide="3"
        :progress="true"
        :autoPlay="true"
        :playSpeed="5000"
        :settings="hooperSettings"
      >
        <!--<slide>
                              <div class="col-md-12">
                                 <img src="../assets/l1.jpg" style="width:250px; height:250px;">
                              </div>  
        </slide>-->
        <slide>
          <div class="col-md-12">
            <img style="width:100%;height:auto;" src="../assets/h22.jpg" />
          </div>
        </slide>

        <slide>
          <div class="col-md-12">
            <img style="width:100%;height:auto;" src="../assets/ab2.jpg" />
          </div>
        </slide>

        <slide>
          <div class="col-md-12">
            <img src="../assets/ab2.jpg" style="width:100%; height:auto;" />
          </div>
        </slide>

        <hooper-navigation slot="hooper-addons" style="padding-left:80px!important;"></hooper-navigation>
      </hooper>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 3,
            pagination: "fraction"
          }
        }
      }
    };
  }
};
</script>
<style>
@media (min-width: 375px) {
  .hooper {
    width: 100%;
    height: auto;
  }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .hooper {
    width: 100%;
    height: auto;
  }
}

a {
  color: black !important;
}
.bk {
  background-color: grey;
}
.two {
  border-style: solid;
  border-width: 1px;
  border-color: black;
}

.so {
  background-color: brown !important;
}
.para {
  color: black !important;
  font-size: 15px !important ;
  line-height: 1.5 !important;
  text-align: justify !important;
  display: block !important;
  margin-block-start: 1em !important;
  margin-block-end: 1em !important;
  margin-inline-start: 0px !important;
  margin-inline-end: 0px !important;
}
.square_btn {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background: cornflowerblue;
  transition: 0.4s;
}
</style>
