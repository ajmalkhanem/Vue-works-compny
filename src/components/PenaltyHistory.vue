<template>
  <div>
    <hr class="rr" style="margin:0!important;">
    <div class="container">
      <div class="col-md-12 row">
        <div class="col-md-6">
          <p style="color:black!important;padding-top:20px!important;"><a href="/" style="text-decoration: none!important;"><strong>Home</strong></a> > &nbsp
            <strong>My Account</strong></p>
        </div>

      </div>
      <div class="col-md-12 row" style="padding-top:40px!important;">
        <div class="col-md-4">
          <table class="table table-bordered">
            <thead class="oo">
              <tr>

                <th scope="col">
                  <router-link to="profile" style="text-decoration: none!important;">Maintenance Analitics
                  </router-link>
                </th>

              </tr>
            </thead>
            <tbody>
              <tr>

                <td>
                  <router-link to="MaintenanceHistory" style="text-decoration: none!important;">Maintenance History</router-link>
                </td>

              </tr>
              <tr>

                <td>
                  <router-link to="FuelFillingHistory" style="text-decoration: none!important;">Fuel Filling History</router-link>
                </td>

              </tr>
              <tr>

                <td style=" background: rgb(242, 235, 235)">
                  <router-link to="PenaltyHistory" style="text-decoration: none!important;">Penalty History</router-link>
                </td>

              </tr>
              <tr>

                <td>
                  <router-link to="Addnewbills" style="text-decoration: none!important;">Add new Maintenance bills
                  </router-link>
                </td>

              </tr>
              <tr>

                <td>
                  <router-link to="Addfuelfilling" style="text-decoration: none!important;">Add Fuel Filling</router-link>
                </td>

              </tr>
              <tr>

                <td>
                  <router-link to="Addemidetails" style="text-decoration: none!important;">Add EMI Details</router-link>
                </td>

              </tr>
              <tr>

                <td>
                  <router-link to="Vehiclerenewal" style="text-decoration: none!important;">Vehicle Renewal and Penalty Charges
                  </router-link>
                </td>

              </tr>

            </tbody>
          </table>
        </div>
        <div class="col-md-8">
          <h5>PENALTY HISTORY</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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