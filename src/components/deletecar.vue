<template>
       <div>
  <b-alert show variant="success">
    <h4 class="alert-heading">Delete!</h4>
    <p>
      Are you want to delete this Vehicle.This may lose all your vehicle data.
    </p>
    <hr>
    <p class="mb-0">
      <b-button type="submit" v-on:click="getData()">Delete</b-button>
     <router-link to="/newpage" ><b-button variant="outline-info">cancel</b-button></router-link>
    </p>
  </b-alert>
</div>
    </template>
    
    <script>
  
  export default {
    props: ['id'],
    
    data() {
      return {

        list: [],



      };
    },
   
    methods: {
      getData() {
        //alert(this.id)
        axios({
          method: 'POST',
          headers: {
            to: localStorage.getItem("token")
          },
          url: 'http://13.233.110.196/delete/vehicle/',
          data: {
            id: this.id
          }

        })
          .then((response) => {

            console.log(response.data)
            console.log(this.list = response.data.data)
            this.$router.push({
          name: "newpage"
          });



          })
      },

    }
  };

</script>
    
    <style>
    
    </style>
    