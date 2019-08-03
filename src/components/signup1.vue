<template>
        <div>
            <hr class="rr" style="margin: 0!important;">
            <div class="container">
                <div class="row">
                    
    
                    <div class="col-md-6" style="padding-top:10px!important;padding-bottom:50px!important;">
                        <div
                            style="padding-left:20px!important;padding-right:20px!important;text-align: center;background-color:white;border:solid rgb(235, 238, 240) 2px;float:left;margin-top:20px;margin-left:20px;">
                            <br><br>
                            <h2 style="color:#03adfc;">Sign Up</h2>
    
                            <p>By joining I agree to receive emails from CloudGM</p><br>
                            <form @submit.prevent="submit1" style="padding-bottom:30px!important;">
                                <div class="form-group">
    
                                    <b-row>
    
                                        <b-col>
                                            <input type="text"
                                                style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                                                required class="form-control" id="rcorners1" aria-describedby="emailHelp"
                                                placeholder="Username">
                                        </b-col>
    
                                    </b-row>
                                </div>
    
                                <div class="form-group">
                                     <b-row>
                                         <b-col>
                                            <input type="password"
                                                style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                                                required class="form-control" id="rcorners1" aria-describedby="emailHelp"
                                                placeholder="Password">
                                        </b-col>
    
                                    </b-row>
                                </div>
                                <div class="form-group">
                                        <b-row>
                                            <b-col>
                                               <input type="text"
                                                   style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                                                   required class="form-control" id="rcorners1" aria-describedby="emailHelp"
                                                   placeholder="Mobile">
                                           </b-col>
       
                                       </b-row>
                                   </div>
                                   <div class="form-group">
                                        <b-row>
                                            <b-col>
                                               <input type="text"
                                                   style="width:330px;background-color: rgb(233, 238, 240);text-align: center;"
                                                   required class="form-control" id="rcorners1" aria-describedby="emailHelp"
                                                   placeholder="Email">
                                           </b-col>
       
                                       </b-row>
                                   </div>
                                <br>
                                
                                <button
                                type="submit"
                                class="btn btn-primary"
                                style="background-color: #03adfc;"
                              >Sign up</button>
                              Already member
                              <router-link to="/login">
                                <b>
                                  <label style="color:#03adfc;">Signin</label>
                                </b>
                              </router-link>
                              <br><br>
                              
    
                                <!-- <button type="button" class="btn btn-light">
                            <router-link to="/signupb">Signup as a business</router-link>
                          </button>-->
    
                                <br>
                                <br>
                                <div> ________________ or ______________</div>
                                <br>
                                <div class="square_bt">
                                    <router-link to="" class="square_bt">Continue with Facebook</router-link>
                                </div>
                                <br>
                                <br>
                                <div class="squarbt">
                                    <router-link to="" class="squarbt">Continue with Google</router-link>
                                </div>
    
                            </form>
    
    
                        </div>
    
    
                    </div>
                    <div class="col-md-6 hid" style="padding-top:10px!important;">
                        <div id="rectangle" class="rt">
                            <p style="text-align: center!important;"> <img src="../assets/221.jpg"
                                    style="width:400px;height:400px;padding-top:40px!important;">
                            </p>
                        </div>
                    </div>
    
                </div>
    
            </div>
        </div>
    </template>
    <script>
    </script>
    <style>
        .square_bt {
            display: inline-block;
            padding: 7px 20px;
            border-radius: 25px;
            text-decoration: none;
            color: #FFF;
            background: #00008b;
            transition: .4s;
        }
    
        .squarbt {
            display: inline-block;
            padding: 7px 20px;
            border-radius: 25px;
            text-decoration: none;
            color: black;
            background: rgb(240, 240, 240);
            transition: .4s;
        }
    
        @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            .hid {
                display: none;
            }
        }
    
        @media only screen and (min-device-width : 480px) and (max-device-width : 768px) {
            .hid {
                display: none;
            }
        }
    
        @media only screen and (min-device-width : 768px) and (max-device-width : 1000px) {
            .hid {
                display: none;
            }
        }
    
    
        @media only screen and (min-device-width: 1024px) and (max-device-width: 1300px) {
            .rt {
                width: 650px;
                height: 750px;
                background: rgb(240, 240, 240);
                border-top-left-radius: 290px;
                border-bottom-left-radius: 350px;
    
            }
        }
    
        @media only screen and (min-device-width: 1301px) and (max-device-width: 1500px) {
            .rt {
                width: 800px;
                height: 750px;
                background: rgb(240, 240, 240);
                border-top-left-radius: 290px;
                border-bottom-left-radius: 350px;
    
            }
        }
    
        @media only screen and (min-device-width: 1501px) and (max-device-width: 1700px) {
            .rt {
                width: 1500px;
                height: 700px;
                background: rgb(240, 240, 240);
                border-top-left-radius: 290px;
                border-bottom-left-radius: 350px;
    
            }
        }
        .rr {
    border: 1px solid rgb(240, 240, 240) !important;
    border-radius: 3px !important;
  }
    </style>