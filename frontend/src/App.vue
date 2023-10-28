<template>
  <div id="app">
    <HomePage :states="weather"/>
  </div>
</template>

<script>
  import HomePage from './components/HomePage.vue'
  import axios from 'axios';
  
  export default {
    name: 'App',
    components: {
      HomePage,
    },
    data(){
      return {
        weather: []
      }
    },
    mounted(){ //컴포넌트가 화면에 나타난 후 실행되는 코드
      axios.get('/api/weather').then((res)=>{
        console.log(res);
        this.weather=res.data;
      }).catch(err=>console.log(err))
    }
  }
</script>

<style>

</style>
