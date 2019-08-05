<template>
  <div>
    <hr class="rr" style="margin:0!important"><br>
    <div class="container">
      <h3>Edit Profile</h3>
    </div><br>
    {{msg}}
    <div class="container" style="background-color: #f5f5f5;">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/download1.png">
        </div>
        <div class="col-md-8" style="padding-top:40px!important;padding-bottom:40px!important;">
          <h5><strong>Add Your Profile Picture Here</strong></h5>
          <div style="padding-top:50px!important;">
            <router-link to="" id="bu" style="text-decoration: none!important;">Upload Image</router-link>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <!--2nd-->
    <div class="container tt">
      <div class="row">
        <div class="col-md-4">
          <h5 style="padding-top:20px!important;padding-left:50px!important;">GENERAL DETAILS</h5>
        </div>
        <div class="col-md-5">


          <form @submit.prevent="submit1" style="padding-top:30px!important;">


            <div class="form-group">

              <label for="exampleInputEmail1" style="text-align: left!important;"></label>
              <input type="text" class="form-control" v-model="users1.firstname" aria-describedby="emailHelp"
                placeholder="First Name">

            </div>



            <div class="form-group">
              <input type="text" class="form-control" v-model="users1.lastname" aria-describedby="emailHelp"
                placeholder="Last Name ">

            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="users1.nationality" aria-describedby="emailHelp"
                placeholder="Nationality ">

            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="users1.email" aria-describedby="emailHelp"
                placeholder="Promo Reference Code ">

            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="users1.ph" aria-describedby="emailHelp"
                placeholder="Promo Reference Code ">

            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="users1.username" aria-describedby="emailHelp"
                placeholder="Promo Reference Code ">

            </div>
            <br>
            <p style="text-align: right!important;">
                <button  type="submit">submit</button>
                <br><br></p>
             

          </form>
        </div><br>
      </div>
    </div><br>
  </div>
</template>
<script>
  import navbar from '@/components/navbar'
  import navbar1 from '@/components/navbar1'

  import axios from "axios";
  //import store from "../store";
  export default {
    props: ['id'],

    components:
    {
      navbar,
      navbar1
    },
    data() {

      return {
        list: [],
        users1:
        {
          firstname: '',
          lastname: '',
          nationality: '',
          email: '',
          ph: '',
          username: ''


        },
        
        msg: '',
        token: localStorage.getItem("token")

      };
    },
    mounted: function () {
      this.submit1();
      //alert(this.id)
    },
    
    methods: {


      submit1(ev) {
        axios({
          method: 'POST',
          headers: {
            to: localStorage.getItem("token")
          },
          url: 'http://13.233.110.196/user/me/',
          data: {
            id: this.id
          }

        })
          .then((response) => {
            this.users1.firstname = response.data.data.firstname
            this.users1.lastname = response.data.data.lastname
            this.users1.nationality = response.data.data.nationality
            this.users1.email = response.data.info.email
            this.users1.ph = response.data.info.ph
            this.users1.username = response.data.info.username


            console.log(response.data)
            console.log(this.list = response.data.data)



          })
        ev.preventDefault()


        axios.post('http://13.233.110.196/edit/user/', {
          to: this.token,
          firstname: this.users1.firstname,
          lastname: this.users1.lastname,
          email: this.users1.email,
          nationality: this.users1.nationality,
          lon: "0.00",
          lat: "0.00",
          username: this.users1.username,
          ph: this.users1.ph
          //documents: "asasa"




        })

          .then((response) => {
            this.msg = response.data.msg
            //store.commit("loginUser",response.data.token);
            //localStorage.setItem("token", response.data.token)
            this.$router.push({
              name: "profile"
            });
          })
          //this.$store.dispatch('submit1', { username, password })
          //.then(() => this.$router.push('/Home'))
          .catch((ev) => { })
        ev.target.reset()
      }

    }
  };
</script>
<style>
  .rr {
    border: 1px solid rgb(240, 240, 240) !important;
    border-radius: 3px !important;
  }

  #bu {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;

    border: none;
    border: solid 2px blue !important;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0);
    font-size: 25px;
  }

  .ee {
    background-color: azure;
  }

  .tt {
    background-color: #f5f5f5;
  }
</style>