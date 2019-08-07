<template>
  <div>
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            id="rcorners1"
            style="width:500px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:white;border:solid rgb(235, 238, 240) 2px;height:420px;float:left;margin-top:20px;margin-left:20px;"
          >
            <br />
            <br />
            <h2>
              <b>
                <label style="color:#03adfc;">Reset password</label>
              </b>
            </h2>
            <br />
            <h6>Please enter your email address and we w'll</h6>
            <h6>you a link to reset your password</h6>
            <form @submit.prevent="submit1">
              <div class="form-group">
                <b-row>
                  <b-col>
                    <label for="username">
                      <b></b>
                    </label>
                  </b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>

                <b-row>
                  <b-col></b-col>
                  <b-col>
                    <input
                      type="email"
                      pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                      style="width:330px;height:60px;background-color: #ffffff;text-align: center;"
                      id="rcorners1"
                      required
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Registered email"
                    />
                  </b-col>
                  <b-col></b-col>
                </b-row>
              </div>

              <button
                type="submit"
                style="width: 330px;height:60px;background-color: #03adfc;"
                id="rcorners1"
                class="btn btn-primary"
              >Submit</button>
            </form>
            <br />

            <h6 style="color:#03adfc;">Back to signin</h6>
          </div>
        </div>
        <div class="col">
          <b-row>
            <b-col>
              <img src="../assets/CLOUD.png" style="width: 500px;height:500px;" />
            </b-col>
            <b-col></b-col>
            <b-col></b-col>
          </b-row>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import navbar from "@/components/navbar";
import axios from "axios";
//import store from "../store";
export default {
  components: { navbar }
};
</script>

<style>
#rcorners1 {
  border-radius: 25px;
  padding: 20px;
  width: 200px;
  height: 8px;
}
</style>



