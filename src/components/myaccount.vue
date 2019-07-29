<template>
  <div>
    <div class="chip">
      <img src="../assets/pro.jpg" alt="Person" style="width:170px; height:170px;">
{{data0}}
    </div>
    <div class="chip">
      <h3><b>{{  data  }} {{data1}}</b></h3>
    </div>
    <br><br><br><br><br><br><br>
    <p>
      <form action="">
        <b-row>
          <b-col>
            <div class="form-group">

            </div>
          </b-col>
          <b-col>
            <div class="form-group">
              <h2 for="email" style="color:cadetblue"><b>Basic</b></h2><br>
              <h6><b>Citizenship:</b></h6>
              <h6><b>Email Id:</b></h6>
              <h6><b>Contact No:</b></h6>

            </div>
          </b-col>
          <b-col>
            <div class="form-group">
              <h2 for="email" style="color: black;"><b>..</b></h2><br>
              <h6><b>{{ data2}}</b></h6>
              <h6><b>{{data3}}</b></h6>
              <h6><b>{{data4}}</b></h6>

            </div>
          </b-col>
          <b-col></b-col>
          
          <b-col>
            <div class="form-group">

              <div class="chip">
                <router-link to="/viewedit"><img src="../assets/edit.jpg" alt="Person" width="96" height="96">
                  Edit Details</router-link>

              </div>


            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="form-group">

            </div>
          </b-col>
          <b-col>
            <div class="form-group">
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="form-group">


            </div>
          </b-col>
        </b-row>

        <div class="form-group form-check">
          <label class="form-check-label">
          </label>
        </div>
      </form>
    </p>
    </b-tab>


    <br><br>

  </div>
</template>

<script>
  import documentreg from '@/components/documentreg'


  export default {
    components: {

      documentreg



    },
    data() {
      return {
        data0: localStorage.getItem("data0"),   
        data: localStorage.getItem("data"),
        data1: localStorage.getItem("data1"),
        data2: localStorage.getItem("data2"),
        data3: localStorage.getItem("data3"),
        data4: localStorage.getItem("data4")






      };
    }
    //data: localStorage.getItem("data")
   /* mounted: function () {
      this.getData();
    },
    methods: {
      getData() {
        
        //this.data=localStorage.getItem("data")
        //console.log(localStorage.getItem("data"))
      }
    }*/
  }
</script>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: white;
    color: black;
  }

  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
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