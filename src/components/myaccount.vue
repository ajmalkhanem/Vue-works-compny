<template>
  <div>
    <b-row>
      <b-col>
          <div>
              <b-card  class="overflow-hidden" style="max-width:600px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img src="http://arabellamc.com/arabella/themes/images/default-user.png" 
                    class="rounded-circle" style="width:200px;height:200px;"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="">
                       
                      <b-card-text>
                          <h3>{{  data  }} {{data1}}</h3>
                          {{data4}}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
      </b-col>
      <b-col>
          <b-card-img src="https://miro.medium.com/max/500/0*vsjfm2j0Y5-yZjME.gif" 
                    class="rounded-0" style="width:800px;height:240px;"></b-card-img>
            
      </b-col>
    </b-row>
      
      
<br>    <b-card header="Basic Details">
        <blockquote class="blockquote mb-0">
          <p><form action="">
              <b-row>
               
                <b-col>
                  <div class="form-group">
                    <h6><b>Citizenship:</b></h6>
                    <h6><b>Email Id:</b></h6>
                    <h6><b>Contact No:</b></h6>
      
                  </div>
                </b-col>
                <b-col>
                  <div class="form-group">
                    <h6><b>{{ data2}}</b></h6>
                    <h6><b>{{data3}}</b></h6>
                    <h6><b>{{data4}}</b></h6>
      
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
            </form></p>
          <footer class="blockquote-footer">
              <b-button v-b-toggle.collapse-1 variant="primary">Edit</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">
        <viewedit :id="this.id"></viewedit>
      </p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
                 
  
                
          </footer>
        </blockquote>
      </b-card>
    <p>
      
    </p>
    </b-tab>
    <b-row>
      <b-col>
          <b-card-group deck>
              <b-card
                header="featured"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                title="Title"
              >
                <b-card-text>Header and footers using props.</b-card-text>
              </b-card></b-card-group>
      </b-col>
      <b-col>
          <b-card-group deck>
              <b-card
                header="featured"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                title="Title"
              >
                <b-card-text>Header and footers using props.</b-card-text>
              </b-card></b-card-group>
      </b-col>
      <b-col>
          <b-card-group deck>
              <b-card
                header="featured"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                title="Title"
              >
                <b-card-text>Header and footers using props.</b-card-text>
              </b-card></b-card-group>
      </b-col>
    </b-row>


    <br><br>

  </div>
</template>

<script>
  import viewedit from '@/components/viewedit'


  export default {
    components: {

      viewedit,



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