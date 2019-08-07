<template>
  <div>
    <hr class="rr" style="margin:0!important" />
    <div class="container">
      <div class="row">
        <div class="col-md-6" style="padding-top:10px!important;padding-bottom:50px!important;">
          <div
            style="padding-left:20px!important;height: 500px; padding-right:20px!important;text-align: center;background-color:white;border:solid rgb(235, 238, 240) 2px;float:left;margin-top:20px;margin-left:20px;"
          >
            <br />
            <br />
            <br />

            <h2 style="color:#03adfc;">Reset Password</h2>
            <br />

            <p style="font-size: 14px">
              Please enter your email address and we'll send you a
              <br />link to reset your password
            </p>
            <br />
            <br />
            <form @submit.prevent="submit1" style="padding-bottom:30px!important;">
              <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <div class="form-group">
                    <input
                      type="text"
                      style="width:100%;background-color: rgb(233, 238, 240);text-align: center;"
                      required
                      class="form-control"
                      id="rcorners1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>
                <div class="col-md-8"></div>
              </div>

              <br />
              <br />
              <br />
              <b-row>
                <b-col>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style="background-color: #03adfc;"
                  >Submit</button>
                </b-col>
                <b-col>
                  <label style="color:#03adfc;">Back to Sign in</label>
                </b-col>
              </b-row>

              <!-- <button type="button" class="btn btn-light">
                        <router-link to="/signupb">Signup as a business</router-link>
              </button>-->
            </form>
          </div>
        </div>
        <div class="col-md-6 hid" style="padding-top:10px!important;">
          <div id="rectangle" class="rt">
            <p style="text-align: center!important;">
              <img
                src="../assets/221.jpg"
                style="width:400px;height:400px;padding-top:40px!important;"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.square_bt {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background: #00008b;
  transition: 0.4s;
}

.squarbt {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  background: rgb(240, 240, 240);
  transition: 0.4s;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .hid {
    display: none;
  }
}

@media only screen and (min-device-width: 480px) and (max-device-width: 768px) {
  .hid {
    display: none;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1000px) {
  .hid {
    display: none;
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1300px) {
  .rt {
    width: 650px;
    height: 700px;
    background: rgb(240, 240, 240);
    border-top-left-radius: 290px;
    border-bottom-left-radius: 350px;
  }
  .form {
    padding-left: 0px;
  }
}
@media only screen and (min-device-width: 1301px) and (max-device-width: 1500px) {
  .rt {
    width: 800px;
    height: 700px;
    background: rgb(240, 240, 240);
    border-top-left-radius: 290px;
    border-bottom-left-radius: 350px;
  }
}
@media only screen and (min-device-width: 1501px) and (max-device-width: 1700px) {
  .rt {
    width: 1500px;
    height: 700px;
    background: rgb(240, 240, 240);
    border-top-left-radius: 290px;
    border-bottom-left-radius: 350px;
  }
}
@media only screen and (min-device-width: 1701px) and (max-device-width: 2000px) {
  .rt {
    width: 1800px;
    height: 700px;
    background: rgb(240, 240, 240);
    border-top-left-radius: 290px;
    border-bottom-left-radius: 350px;
  }
}
.rr {
  border: 1px solid rgb(240, 240, 240) !important;
  border-radius: 3px !important;
}
</style>