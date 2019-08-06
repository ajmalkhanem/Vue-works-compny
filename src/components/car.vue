<template>
  <div>
    <b-row>
      <b-col>
        <br />
        <div>
          <div>
            <b-card no-body>
              <b-tabs pills card end>
                <b-tab title=".">
                  <b-card-text>
                    <form action>
                      <b-row>
                        <b-col>
                          <div class="form-group">
                            <img src="../assets/car.jpg" style="width:200px;height:200px;" />
                          </div>
                        </b-col>
                        <b-col>
                          <div class="form-group">
                            <h2 for="email" style="color: black;">
                              <b>{{list.vehicleName}}</b>
                            </h2>
                            <br />
                            <h6>
                              <b>Traffic Plate:</b>
                            </h6>
                            <h6>
                              <b>Registration Date:</b>
                            </h6>
                            <h6>
                              <b>TC Number:</b>
                            </h6>
                            <h6>
                              <b>Policy Expire:</b>
                            </h6>
                            <h6>
                              <b>Insurance Expire</b>
                            </h6>
                          </div>
                        </b-col>
                        <b-col>
                          <div class="form-group">
                            <h2 for="email" style="color: black;">Details</h2>
                            <br />
                            <h6>
                              <b>{{list.plateNo}}</b>
                            </h6>
                            <h6>
                              <b>{{list.registerDate}}</b>
                            </h6>
                            <h6>
                              <b>{{list.tcNo}}</b>
                            </h6>

                            <h6>
                              <b>{{list.polexpiryDate}}</b>
                            </h6>
                            <h6>
                              <b>{{list.inexpiryDate}}</b>
                            </h6>
                          </div>
                        </b-col>

                        <b-col>
                          <div class="form-group">
                            <div class="chip">
                              <router-link to>
                                <img src="../assets/share.png" alt="Person" width="96" height="96" />
                              </router-link>
                            </div>
                            <div class="chip">
                              <router-link to>
                                <img src="../assets/se.jpg" alt="Person" width="96" height="96" />
                              </router-link>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <div class="form-group"></div>
                        </b-col>
                        <b-col>
                          <div class="form-group"></div>
                        </b-col>
                      </b-row>

                      <hr />
                      <br />
                      <b-row>
                        <b-col>
                          <div>
                            <b-button v-b-toggle.collapse-1 variant="light">Add Maintanance Bill</b-button>
                            <b-collapse id="collapse-1" class="mt-2">
                              <b-card>
                                <p class="card-text">
                                  <modal1 :id="this.id"></modal1>
                                </p>
                              </b-card>
                            </b-collapse>
                          </div>
                        </b-col>
                        <b-col>
                          <div>
                            <b-button v-b-toggle.collapse-2 variant="light">Fuel Filling</b-button>
                            <b-collapse id="collapse-2" class="mt-2">
                              <b-card>
                                <p class="card-text">
                                  <modal2 :id="this.id"></modal2>
                                </p>
                              </b-card>
                            </b-collapse>
                          </div>
                        </b-col>

                        <b-col>
                          <div>
                            <b-button v-b-toggle.collapse-3 variant="light">Add Penalty</b-button>
                            <b-collapse id="collapse-3" class="mt-2">
                              <b-card>
                                <p class="card-text">
                                  <modal3 :id="this.id"></modal3>
                                </p>
                              </b-card>
                            </b-collapse>
                          </div>
                        </b-col>
                        <b-col>
                          <modal4></modal4>
                        </b-col>
                      </b-row>

                      <div class="form-group form-check">
                        <label class="form-check-label"></label>
                      </div>
                    </form>
                  </b-card-text>
                </b-tab>
                <b-tab title=" Edit">
                  <b-card-text>
                    <editcar :id="this.id"></editcar>
                  </b-card-text>
                </b-tab>
                <b-tab title="Service History">
                  <b-card-text>
                    <p v-if="list.maintenanceBills.length">
                      {{list.maintenanceBills[0].name}}
                      {{list.maintenanceBills[0].odometer}}
                    </p>
                    <p v-else>No data Found</p>
                  </b-card-text>
                </b-tab>
                <b-tab title="Maintanance Analytics">
                  <b-card-text>hhhhhh</b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import navbar2 from "@/components/navbar2";
import navbar1 from "@/components/navbar1";
import editcar from "@/components/editcar";
import modal1 from "@/components/modal1";
import modal2 from "@/components/modal2";
import modal3 from "@/components/modal3";
import modal4 from "@/components/modal4";
import documentreg from "@/components/documentreg";
import history from "@/components/history";

export default {
  props: ["id"],
  components: {
    navbar2,
    documentreg,
    navbar1,
    editcar,
    modal1,
    modal2,
    modal3,
    modal4,
    history
  },
  data() {
    return {
      list: []
    };
  },
  mounted: function() {
    this.getData();
    //alert(this.id)
  },
  methods: {
    getData() {
      //alert(this.id)
      axios({
        method: "POST",
        headers: {
          to: localStorage.getItem("token")
        },
        url: "http://13.233.110.196/view/vehicle/",
        data: {
          id: this.id
        }
      }).then(response => {
        console.log(response.data);
        console.log((this.list = response.data.data));
      });
    }
  }
};
</script>

<style>
#rcorners1 {
  border-radius: 25px;
  padding: 20px;
  width: 200px;
  height: 8px;
  text-align: center;
}
</style>
<style>
.chip {
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: white;
}

.chip img {
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
<style>
body,
html {
  height: 100%;
  margin: 0;
}

.bg5 {
  /* The image used */
  background-image: url("https://i.pinimg.com/originals/46/1d/25/461d254f8563f8945ce3a385f289df17.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

div.transbox1 {
  margin: 30px;
  background-color: #ffffff;
  border: 1px solid white;
  opacity: 2;
  filter: alpha(opacity=60);
  /* For IE8 and earlier */
}
</style>