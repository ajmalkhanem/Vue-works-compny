<template>
    <div>



      <div class="row"> 
        <div class="column">
            <div class="container1">
                <img src="../assets/o3.jpg" alt="Avatar" class="image"  style="width:100%;height:300px;">
                <div class="middle">
                  <div class="text"><b>Automobiles</b>
                  <p style="font-size:12px;">
                      “Don't Worry Drive Happy “
      
                      </p>  <b-button variant="light">Explore</b-button>
      
                  </div>
                </div>
              </div>
                    
                  
        <div class="container1">
          <img src="../assets/o7.jpg" alt="Avatar" class="image"  style="width:100%;height:260px;">
          <div class="middle">
            <div class="text"><b>Stock market</b>
            <p style="font-size:12px;">
"An Investor's Worst enemy in not the stock market but his own emotions"                      
</p>  <b-button variant="light">Explore</b-button>

            </div>
          </div>
        </div>            
        </div>
        <div class="column">
                    
                    
                   
                    
          <div class="container1">
            <img src="../assets/o8.jpg" alt="Avatar" class="image"  style="width:100%">
            <div class="middle">
              <div class="text"><b>Entertainment</b>
                          <p style="font-size:12px;">
                              "The most important question of your life ask your self "What do I want?"
                          </p>  <b-button variant="light">Explore</b-button>


              </div>
            </div>
          </div>  
          <div class="container1">
            <img src="../assets/o9.jpg" alt="Avatar" class="image"  style="width:100%;height: 280px;">
            <div class="middle">
              <div class="text"><b>Market Place</b>
                                            <p style="font-size:12px;">
                                                "Buy and sell"
                                                </p>  <b-button variant="light">Explore</b-button>


              </div>
            </div>
          </div> 
          
        </div>  
        <div class="column">
                 
          <div class="container1">
            <img src="../assets/o12.jpg" alt="Avatar" class="image"  style="width:100%">
            <div class="middle">
              <div class="text"><b>Jobs</b>
              <p style="font-size:12px;">
“Don't Wait For Opportunity Create It”
              </p>  <b-button variant="light">Explore</b-button>

              </div>
            </div>
          </div>          <div class="container1">
            <img src="../assets/011.jpg" alt="Avatar" class="image" style="width:100%">
            <div class="middle">
              <div class="text"><b>Insurance</b>
              <p style="font-size:12px;">
                  "The things you Regret most in life are the Risks you didn't take"
              </p>  <b-button variant="light">Explore</b-button>
  
              </div>
            </div>
          </div>    

        </div>
        <div class="column">
         
          <div class="container1">
            <img src="../assets/o2.jpg" alt="Avatar" class="image"  style="width:100%;height:280px;">
            <div class="middle">
              <div class="text"><b>Restaurants</b>
                                    <p style="font-size:12px;">
                                        “You Don't Need A Silver Fork To Eat Good Food”
                                    </p>
<b-button variant="light">Explore</b-button>

              </div>
            </div>
          </div> 
          <div class="container1">
              <b-card  class="image" style="width:100%;height:290px;"><br>
                <b>Start your Business</b>
                <p style="font-size:12px;">
                    “Plan Your Good Business”
                </p>  <b-button variant="primary">Become Seller</b-button>
  
                
              </b-card>
            </div>           
        </div>
      </div>
      
    </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Arial;
  }
  
  .header {
    text-align: center;
    padding: 32px;
  }
  
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
  }
  
  /* Create four equal columns that sits next to each other */
  .column {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }
  
  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }
  
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }
  
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }
  </style>

<style>



  .container1 {
    position: relative;
    width: 100%;
  }
  
  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .container1:hover .image {
    opacity: 0.3;
  }
  
  .container1:hover .middle {
    opacity: 1;
  }
  
  .text {
    color: rgb(15, 10, 10);
    font-size: 25px;
    padding: 16px 32px;
    text-align: left;
  }
  </style>
  
  