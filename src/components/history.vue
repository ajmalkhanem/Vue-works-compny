<template>
        <div>
                <p v-if="list.maintenanceBills.length">
                        {{list.maintenanceBills[0].name}}
                        {{list.maintenanceBills[0].odometer}}
                      </p>
                      <p v-else>No data Found</p>
          <b-table striped hover small :items="items" :fields="fields"></b-table>
        </div>
      </template>
      
      <script>
        export default {
          data() {
            return {
                list:[],
              // Note 'age' is left out and will not appear in the rendered table
              fields: {
                last_name: {
                  label: 'Bill Category',
                  sortable: true
                },
                first_name: {
                  label: 'Amount',
                  sortable: false
                },
                city: {
                  key: 'address.city',
                  label: 'Date',
                  sortable: true
                },
                'address.country': {
                  label: 'Country',
                  sortable: true
                }
              },
              items: [
                {
                  age: 40,
                  first_name: 'Dickerson',
                  last_name: 'Macdonald',
                  address: { country: 'USA', city: 'New York' }
                },
                {
                  age: 21,
                  first_name: 'Larsen',
                  last_name: 'Shaw',
                  address: { country: 'Canada', city: 'Toronto' }
                },
                {
                  age: 89,
                  first_name: 'Geneva',
                  last_name: 'Wilson',
                  address: { country: 'Australia', city: 'Sydney' }
                }
               
              ]
            }
          },
          mounted: function () {
      this.getData();
      //alert(this.id)
    },
    methods: {
      getData() {
        //alert(this.id)
        axios({
          method: 'POST',
          headers: {
            to: localStorage.getItem("token")
          },
          url: 'http://13.233.110.196/view/vehicle/',
          data: {
            id: this.id
          }

        })
          .then((response) => {

            console.log(response.data)
            console.log(this.list = response.data.data)



          })
      },

    }
        }
      </script>