<template>
  <div id="app">    
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
export default {
  name: 'App',
  components: {  
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
