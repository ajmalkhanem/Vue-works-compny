<template>
  <div id="App">
     <sellernavbar></sellernavbar>
    <router-view/>

<footer1></footer1>
  </div>
</template>

<script>
 import footer1 from '../src/components/footer1'
 import sellernavbar from '../src/components/sellernavbar'

//import nav1 from '../src/components/nav1'
export default {
  name: 'App',
  
  components: {
    footer1,
    sellernavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  overflow-x:hidden!important;
}
</style>
