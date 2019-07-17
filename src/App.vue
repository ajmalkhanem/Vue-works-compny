<template>
  <div id="App">
    <navbar></navbar>
    <router-view/>
<footer1></footer1>
  </div>
</template>

<script>
 import footer1 from '../src/components/footer1'
 import navbar from '../src/components/navbar'

export default {
  name: 'App',
  components: {
    footer1,
    navbar
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
</style>
