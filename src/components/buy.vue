<template>
    <div>



<div class="flip-box" style="width: 200px;height: 150px;">
  <div class="flip-box-inner" >
    <div class="flip-box-front" >
        <br>
            <div class="chip">
                    <img src="../assets/coin.png" alt="Person" width="96" height="96">
                    <b>100 coins</b>
                    
                  </div>
                  <br><br>
                  <p>$100</p>

    </div>
    <div class="flip-box-back" >
        <br>
<button type="button" class="btn btn-warning">Buy Now</button>
    </div>
  </div>
</div>

    </div>
</template>
<style>
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
        
        .flip-box {
          background-color: transparent;
          width: 300px;
          height: 200px;
          border: 1px solid #f1f1f1;
          perspective: 1000px;
        }
        
        .flip-box-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-box:hover .flip-box-inner {
          transform: rotateX(180deg);
        }
        
        .flip-box-front, .flip-box-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        
        .flip-box-front {
          background-color: rgb(240, 220, 220);
          color: black;
        }
        
        .flip-box-back {
          background-color:white;
          color: white;
          transform: rotateX(180deg);
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
  background-color:white;
}

.chip img {
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
         