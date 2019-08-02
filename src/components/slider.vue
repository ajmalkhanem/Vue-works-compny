<template>
    <div>
        <div>
            <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
                img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
                <b-carousel-slide img-blank img-alt="Blank image">
                    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="../assets/s1.jpg"
                        alt="image slot">
                </b-carousel-slide>
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="../assets/s2.jpg"
                        alt="image slot">
                </b-carousel-slide>
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="../assets/s4.jpg"
                        alt="image slot">
                </b-carousel-slide>

            </b-carousel>
        </div>
        <div class="container">
            <div class="row" style="padding-top: 30px;padding-bottom:30px">

                <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                  <h5 class="card-title">Card title</h5>
                                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="card-link">Card link</a>
                                  <a href="#" class="card-link">Another link</a>
                                </div>
                              </div>
                </div>

                <div class="col-md-4" >
                        <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                  <h5 class="card-title">Card title</h5>
                                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="card-link">Card link</a>
                                  <a href="#" class="card-link">Another link</a>
                                </div>
                              </div>

                </div>
                <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                  <h5 class="card-title">Card title</h5>
                                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="card-link">Card link</a>
                                  <a href="#" class="card-link">Another link</a>
                                </div>
                              </div>
   
                </div>

            </div>
            <div class="row" style="padding-top: 30px;padding-bottom:30px">

                    <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                      <h5 class="card-title">Card title</h5>
                                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      <a href="#" class="card-link">Card link</a>
                                      <a href="#" class="card-link">Another link</a>
                                    </div>
                                  </div>
                    </div>
    
                    <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                      <h5 class="card-title">Card title</h5>
                                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      <a href="#" class="card-link">Card link</a>
                                      <a href="#" class="card-link">Another link</a>
                                    </div>
                                  </div>
    
                    </div>
                    <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                      <h5 class="card-title">Card title</h5>
                                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      <a href="#" class="card-link">Card link</a>
                                      <a href="#" class="card-link">Another link</a>
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
    import hoop from './hoop'

    export default{
        name:"slider",
        components:{
            hoop
        },
    }
</script>
<style>
</style>