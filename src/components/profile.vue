<template>
  <div>
    <hr class="rr" style="margin:0!important;">
    <div class="container" style="background-color: white!important;">
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
                <th scope="col" style=" background: rgb(242, 235, 235)">
                  <router-link
                    :to="'/profile/' + this.id"
                    style="text-decoration: none!important;"
                  >Maintenance Analitics</router-link>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
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
          <h4>ANALYTICS</h4>
          <div class="card-columns">
              
              <div class="card bg-light">
                  <div class="card-body text-center">
                    <p class="card-text">Total Kilometer</p>
                    
                    <p class="card-text">{{km}}</p>
                  </div>
                </div>
              <div class="card bg-light">
                  <div class="card-body text-center">
                      <p class="card-text">Total Expense</p>
                    
                      <p class="card-text">{{ex}}</p>
                  </div>
                </div>
              <div class="card bg-light">
                <div class="card-body text-center">
                    <p class="card-text">Mileage</p>
                    
                    <p class="card-text">{{mile}}</p>
                </div>
              </div>
              
             
            </div><br>
            <b-card header="Your Driving Cost" class="text-center">
                <b-card-text>Service Cost : Rs.  {{sc}}</b-card-text>
                <b-card-text>Fuel Cost  : Rs.   {{fc}}</b-card-text>

              </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


  export default {
    props: ['id'],
    components: {


    },
    data() {
      return {

        list: [],
        km:'',
        sc:'',
        fc:'',
        mile:'',
        ex:'',

      };
    },
    mounted: function () {
      this.getData();
      this.data1();
    },
    methods: {
      getData() {
        axios({
          method: 'POST',
          headers: {
            to: localStorage.getItem("token")
          },
          url: 'http://13.233.110.196/list/vehicle/',

        })
          .then((response) => {

            // console.log(response.data) 
            //console.log(response.data[0])     
            this.list = response.data.data

          })
      },
      data1() {
        axios({
          method: 'POST',
          headers: {
            to: localStorage.getItem("token")
          },
          url: 'http://13.233.110.196/vehicle/analytics',
          data:{
            id:this.id
          }

        })
          .then((response) => {

            // console.log(response.data) 
            //console.log(response.data[0])     
            this.km = response.data.km
            this.ex = response.data.expense
            this.fc = response.data.fuelcost
            this.sc = response.data.servicecost
            this.mile = response.data.mileage




          })
      }

    }
  }

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