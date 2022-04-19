<template>
  <div id="app">
    
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  data(){
    return {
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  font-family:'AvenirMedium';
  box-sizing: border-box;
}
body{
  min-width:1200px;
}
</style>
