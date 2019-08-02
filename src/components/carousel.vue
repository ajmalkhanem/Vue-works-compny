<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      

      <!-- Slides with custom text -->
      

      <!-- Slides with image only -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
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
            src="https://jovinacooksitalian.files.wordpress.com/2018/07/famagusta-tiser.jpg"
            alt="image slot"
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

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      
    </b-carousel>

    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>