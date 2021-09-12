<template>
  <div class="root">
    <div v-bind:class="{ 'blink-1': isBlink }" class="color">
      {{counter}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Green",
  data(){
    return{
      color:'Green',
      counter:localStorage.getItem('counter'),
      isBlink:false
    }
  },
  mounted() {
    let sec = (15-Number(localStorage.getItem('counter')))*1000;
    localStorage.color='green';
    setTimeout(() => {
      localStorage.counter='10';
      this.$router.push({name:'red'})
    }, 15000-sec);
    setInterval(() => {
      localStorage.counter=String(this.counter--);
      if(Number(this.counter)==3)this.isBlink=true;
    }, 1000);
  }
}
</script>

<style scoped>
.color{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: Green;
  font-size: 50px;

}
.blink-1 {
  animation-name: blink;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>