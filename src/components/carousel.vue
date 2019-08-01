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
          width="100%"
          height="650"
          src="https://eventnook.s3.amazonaws.com/u/1/coverimage_1807057462030_sabre-banner.png"alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide>
          <img
            slot="img"
            width="100%"
            height="650"
            src="https://www.ciegate.com/wp-content/uploads/ipad-meeting.jpg"
            alt="image slot"
          >
        </b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            width="100%"
            height="650"
            src="https://d2fni493fitngs.cloudfront.net/blog/wp-content/uploads/2019/01/22172629/Planoly-Blog-Post-Reaching-Out-to-Influencers-Banner-2.jpg"
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