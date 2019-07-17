<template>
  <div id="App">
    <navbar></navbar>
    <router-view/>
<footer></footer>
  </div>
</template>

<script>
 import footer from '../src/components/footer'
 import navbar from '../src/components/navbar'

export default {
  name: 'App',
  components: {
    footer,
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
