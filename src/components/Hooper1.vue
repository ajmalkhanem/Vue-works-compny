<template>
  <div>
    <b-row>
      <b-col>
        <div class="col-md-12">
          <div class="container1">
            <img
              src="../assets/edu.jpg"
              alt="Avatar"
              class="image"
              style="width:400px;height: 300px;"
            />
            <div class="middle">
              <div class="text">
                <b>Education</b>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="col-md-12">
          <div class="container1">
            <img
              src="../assets/car.jpg"
              alt="Avatar"
              class="image"
              style="width:400px;height: 300px;"
            />
            <div class="middle">
              <div class="text">
                <b>Automobiles</b>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="col-md-12">
          <div class="container1">
            <img src="../assets/rest.jpg" alt="Avatar" class="image" style="width:400px;height: 300px;">
            <div class="middle">
              <div class="text">
                <b>Restaurant</b>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <div class="col-md-12">
          <div class="container1">
            <img
              src="../assets/edu.jpg"
              alt="Avatar"
              class="image"
              style="width:400px;height: 300px;"
            />
            <div class="middle">
              <div class="text">
                <b>Education</b>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="col-md-12">
          <div class="container1">
            <img
              src="../assets/car.jpg"
              alt="Avatar"
              class="image"
              style="width:400px;height: 300px;"
            />
            <div class="middle">
              <div class="text">
                <b>Automobiles</b>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="col-md-12">
          <div>
            <b-card
              title="What is your business"
              style="max-width: 400px;height: 300px;"
              class="mb-2"
            >
              <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

              <b-button href="#" variant="primary">Become seller</b-button>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.container1 {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container1:hover .image {
  opacity: 0.3;
}

.container1:hover .middle {
  opacity: 1;
}

.text {
  color: rgb(15, 10, 10);
  font-size: 25px;
  padding: 16px 32px;
  text-align: left;
}
</style>

