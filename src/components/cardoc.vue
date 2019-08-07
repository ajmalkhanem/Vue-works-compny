<template>
  <div>
    <div align="left">
      <b-card-text></b-card-text>

      <br />
      <br />

      <b-row>
        <b-col>
          <div class="coupon">
            <div class="container" style="background-color:white"></div>
            <div class="container">
              <p>
                <input type="file" />
              </p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="coupon">
            <div class="container" style="background-color:white"></div>
            <div class="container">
              <p>
                <input type="file" />
              </p>
            </div>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <br />
      <b-row>
        <b-col>
          <div class="form-group">
            <label for style="color: cadetblue;">
              <b></b>
            </label>
            <br />
            <b-button variant="info">Submit</b-button>
          </div>
        </b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <br />
    </div>
  </div>
</template>
<style>
body {
  font-family: Arial;
}

.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}
</style>