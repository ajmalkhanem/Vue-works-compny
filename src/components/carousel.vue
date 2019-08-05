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
          src="https://2-images.motorcar.com/sites/13320/homepagelibrary/97690_13320.jpg"alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="400"
            src="https://s28720.pcdn.co/blog/wp-content/uploads/2016/02/3d978e8b-4d94-4e76-a578-e7d695b9a29f_shutterstock_318967643-1600x500.jpg"
            alt="image slot"
          >
        </b-carousel-slide>
        <b-carousel-slide>
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="400"
              src="https://inlinenetworks.attractionmarketingproject.com/wp-content/uploads/sites/141/2018/02/Inline-Networks-Quote-1-1600x500.jpg"
              alt="image slot"
            >
          </b-carousel-slide>
          <b-carousel-slide>
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="400"
              src="https://s.stpost.com/m/img/misc/how-we-do-business-lp-hero-img-120616.jpg"
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