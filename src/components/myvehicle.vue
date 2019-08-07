<template>
  <div>
    <div v-for="listing in list">
      <router-link v-bind:to="'/car/' + listing._id">
        <div
          id="rcorners1"
          style="width:300px;margin-bottom:20px;box-shadow: 0 4px 8px 0 rgba(228, 232, 233, 0.801), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:1px 1px; text-align: center;background-color:#ffffff;border:solid rgb(235, 238, 240) 2px;height:300px;float:left;margin-top:20px;margin-left:20px;"
        >
          <br />
          <h2>
            <b>{{ listing.vehicleName}}</b>
          </h2>

          <img src="../assets/car.jpg" style="width: 200px;height:200px;" />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
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
        // console.log(response.data)
        //console.log(response.data[0])
        this.list = response.data.data;
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
}
</style>