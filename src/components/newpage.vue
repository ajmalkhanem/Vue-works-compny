<template>
  <div>
    <div class="container">
      <div class="col-md-12 row">
        <div class="col-md-6">
          <p style="color:black!important;padding-top:20px!important;">
            <a href="/" style="text-decoration: none!important;">
              <strong>Home</strong>
            </a> > &nbsp;
            <strong>My Vehicles</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <br />
      <div class="row">
        <div class="col-md-6" v-for="listing in list">
          <div class="row box-two">
            <div class="col-md-3">
              <img
                v-bind:src="'http://13.233.110.196/document/get/'+listing.documents[0]"
                style="width:100%;height: auto;"
              />
            </div>
            <div class="col-md-9">
              <h6 class="new">{{listing.vehicleName}}</h6>
              <hr class="cloudgmhr" />
              <h10 class="clougmh10">
                <i class="fa fa-car" aria-hidden="true"></i>
                &nbsp;Registration No : {{ listing.plateNo}}
              </h10>
              <br />
              <h10 class="clougmh10">
                <i class="fa fa-cog" aria-hidden="true"></i>
                &nbsp;TC No : {{ listing.tcNo}}
              </h10>
              <div class="newcloud">
                <router-link
                  v-bind:to="'/editcar1/' + listing._id"
                  style="text-decoration: none!important;"
                >
                  <i class="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit
                </router-link>|
                <router-link
                  v-bind:to="'/profile/' + listing._id"
                  style="text-decoration: none!important;"
                >
                  <i class="fa fa-street-view" aria-hidden="true"></i>&nbsp;View
                </router-link>|
                <router-link
                  v-bind:to="'/deletecar/' + listing._id"
                  style="text-decoration: none!important;"
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <p align="center">
      <router-link to="/addcar1" style="text-decoration: none!important;">
        <b-button variant="primary">Add New Vehicle</b-button>
      </router-link>
    </p>
  </div>
</template>
  <script>
export default {
  props: ["id"],
  components: {},
  data() {
    return {
      list: []
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData() {
      axios({
        method: "POST",
        headers: {
          to: localStorage.getItem("token")
        },
        url: "http://13.233.110.196/list/vehicle/"
      }).then(response => {
        this.list = response.data.data;
      });
    }
  }
};
</script>
  <style>
.cloudgmhr {
  margin-top: 0.3rem !important;
  margin-bottom: 0.3rem !important;
}
.box-two {
  background: #fff none repeat scroll 0% 0%;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 10px 10px 10px;
  margin-left: 10px;
  margin-bottom: 20px;
}
.new {
  text-transform: uppercase;
  padding-top: 5px;
  font-weight: 700;
}
.cloudgmh10 {
  padding-bottom: 10px;
  color: #565454;
  font-weight: 300;
}
.jj {
  float: left;
}

.newcloud {
  margin-top: 10px;
  background-color: #eef1f3;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
}
</style>