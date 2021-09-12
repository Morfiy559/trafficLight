<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  // components: {
  //   Red,
  //   Yellow,
  //   Green
  // }

  mounted() {
     switch (localStorage.getItem('color')){
       case 'red':this.$router.push({name:'red'});break;
       case 'yellow':this.$router.push({name:'yellow'});break
       case 'green':this.$router.push({name:'green'});break
       default:this.$router.push({name:'red'});
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
