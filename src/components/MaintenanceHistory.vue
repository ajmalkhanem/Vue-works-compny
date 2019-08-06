<template>
  <div>
    <hr class="rr" style="margin:0!important;" />
    <div class="container">
      <div class="col-md-12 row">
        <div class="col-md-6">
          <p style="color:black!important;padding-top:20px!important;">
            <a href="/" style="text-decoration: none!important;">
              <strong>Home</strong>
            </a> > &nbsp;
            <strong>My Account</strong>
          </p>
        </div>
      </div>
      <div class="col-md-12 row" style="padding-top:40px!important;">
        <div class="col-md-4">
          <table class="table table-bordered">
            <thead class="oo">
              <tr>
                <th scope="col">
                  <router-link
                    :to="'/profile/' + this.id"
                    style="text-decoration: none!important;"
                  >Maintenance Analitics</router-link>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style=" background: rgb(242, 235, 235)">
                  <router-link
                    :to="'/MaintenanceHistory/' + this.id"
                    style="text-decoration: none!important;"
                  >Maintenance History</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/FuelFillingHistory/' + this.id"
                    style="text-decoration: none!important;"
                  >Fuel Filling History</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/PenaltyHistory/' + this.id"
                    style="text-decoration: none!important;"
                  >Penalty History</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Addnewbills/' + this.id"
                    style="text-decoration: none!important;"
                  >Add new Maintenance bills</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Addfuelfilling/' + this.id"
                    style="text-decoration: none!important;"
                  >Add Fuel Filling</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Addemidetails/' + this.id"
                    style="text-decoration: none!important;"
                  >Add EMI Details</router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <router-link
                    :to="'/Vehiclerenewal/' + this.id"
                    style="text-decoration: none!important;"
                  >Vehicle Renewal and Penalty Charges</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-8">
          <h5>MAINTENANCE HISTORY</h5>
          <br />
          <p v-if="list.maintenanceBills.length"></p>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Issued_Date</th>
                <th scope="col">Category</th>
                <th scope="col">Station</th>
                <th scope="col">Odometer</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody v-for="(file) in list.maintenanceBills" :key="file.id">
              <tr>
                <th scope="row"></th>
                <td>{{file.name}}</td>
                <td>{{file.amount}}</td>
                <td>{{file.date.slice(0,10)}}</td>
                <td>{{file.category}}</td>
                <td>{{file.station}}</td>
                <td>{{file.odometer}}</td>
                <td>
                  <b-button variant="danger">Delete</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: ["id"],
  data() {
    return {
      list: []
      // Note 'age' is left out and will not appear in the rendered table
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
.oo {
  color: blue !important;
}

.table {
  width: 80% !important;
}

.th {
  color: cornflowerblue;
}

.rr {
  border: 1px solid rgb(240, 240, 240) !important;
  border-radius: 3px !important;
}
</style>