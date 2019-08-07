 <template>
  <div>
    <br />
    <b-container style="background-color: white;">
      <b-row>
        <b-col>
          <img src="../assets/pro.png" />
          <hr />
          <h2 style="color: cadetblue;">
            <b>Complete Your Profile</b>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <br />
          <div>
            <b-card no-body>
              <b-tabs pills card end>
                <b-tab title="Business profile" active>
                  <b-card-text>
                    <form @submit.prevent="submit1">
                      <b-row>
                        <b-col>
                          <div class="form-group">
                            <label for="email" style="color: cadetblue;">
                              <b>Business Name:</b>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="users1.busname"
                              style="background-color: rgb(233, 238, 240);text-align: center;"
                              required
                            />
                          </div>
                        </b-col>
                        <b-col>
                          <div class="form-group">
                            <label for="email" style="color: cadetblue;">
                              <b>Business Reg Number</b>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="users1.busreg"
                              style="background-color: rgb(233, 238, 240);text-align: center;"
                              required
                            />
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <div class="form-group">
                            <label for="pwd" style="color: cadetblue;">
                              <b>Coperative Email:</b>
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              v-model="users1.busemail"
                              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                              required
                              style="background-color: rgb(233, 238, 240);text-align: center;"
                            />
                          </div>
                        </b-col>
                        <b-col>
                          <div class="form-group">
                            <label for="pwd" style="color: cadetblue;">
                              <b>Address:</b>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="users1.busaddress"
                              style="background-color: rgb(233, 238, 240);text-align: center;"
                              required
                            />
                          </div>
                        </b-col>
                      </b-row>
                      <br />
                      <h4 style="color: cadetblue;">
                        <b>Business Documents</b>
                      </h4>
                      <br />
                      <b-row>
                        <b-col>
                          <div class="coupon">
                            <div class="container" style="background-color:white"></div>
                            <div class="container">
                              <p>
                                <input type="file" />
                              </p>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                      <br />
                      <b-row>
                        <b-col>
                          <div class="coupon">
                            <div class="container" style="background-color:white"></div>
                            <div class="container">
                              <p>
                                <input type="file" />
                              </p>
                            </div>
                          </div>
                        </b-col>
                      </b-row>

                      <div class="form-group form-check">
                        <label class="form-check-label"></label>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <br />
    <navbar1></navbar1>
    <br />
    <br />
  </div>
</template>
    

<script>
import navbar from "@/components/navbar";
import navbar1 from "@/components/navbar1";

import axios from "axios";
//import store from "../store";
export default {
  components: { navbar, navbar1 },
  data() {
    return {
      users1: {
        busname: "",
        busreg: "",
        busemail: "",
        busaddress: ""
      },
      /* mounted() {
if (localStorage.users1.username) {
this.username = localStorage.users1.username;
}
},
watch: {
name(newName) {
localStorage.users1.username = newName;
}
},*/
      obj: "",
      token: localStorage.getItem("token")
    };
  },
  methods: {
    submit1(ev) {
      ev.preventDefault();
      var datas1 = {};

      datas1["busname"] = this.users1.busname;
      datas1["busreg"] = this.users1.busreg;
      datas1["busemail"] = this.users1.busemail;
      datas1["busaddress"] = this.users1.busaddress;

      console.log(datas1);

      //  axios({
      //   method: 'POST',
      //    url: 'http://ghgj.com',
      //    data : 'datas',
      //    contentType: 'application/json; charset=utf-8',
      //    dataType: 'json',
      //  })
      axios
        .post("http://13.233.110.196/user/bussiness/", {
          to: this.token,
          name: this.users1.busname,
          reg_no: this.users1.busreg,
          cor_email: this.users1.busemail,
          address: this.users1.busaddress,
          category: "5d36b2b42b4842377c2d665d"
        })
        /*.then(response => {
alert(that.$store.commit('LOGIN_SUCCESS', response.data.token));
}).catch(error => {
console.log("Error login")
console.log(error)
})
this.dialog = false*/
        .then(response => {
          //console.log(response.data.token)
          //store.commit("loginUser",response.data.token);
          //localStorage.setItem("token", response.data.token)
          // this.$router.push({
          // name: "userprofile"
          // });
        })
        //this.$store.dispatch('submit1', { username, password })
        //.then(() => this.$router.push('/Home'))
        .catch(ev => {});
      ev.target.reset();
    }

    /* login() {
username= this.users1.username 
password = this.users1.password
this.$store.dispatch('login', { username, password })
.then(() => this.$router.push('/'))
.catch(err => console.log(err))
}*/
  }
};
</script>
    <style>
#rcorners1 {
  border-radius: 25px;
  padding: 20px;
  width: 200px;
  height: 8px;
  text-align: center;
}
</style>
<style>
body {
  font-family: Arial;
}

.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}
</style>


