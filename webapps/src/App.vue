<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$http.get('/test').then((res) => {
      console.log('res:', res);
    }).catch((err) => {
      console.error(err);
    });
    this.$http.get('/test1').then((res) => {
      console.log('res:', res);
    }).catch((err) => {
      console.error(err);
    });
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
  margin-top: 60px;
}
</style>
