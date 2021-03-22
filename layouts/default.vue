<template>
  <div>
    <the-header @sidenavToggle="displaySidenav = !displaySidenav"></the-header>
    <the-sidenav :show="displaySidenav" @close="displaySidenav = false"></the-sidenav>
    <Nuxt />
  </div>
</template>
<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from "../components/Navigation/TheSidenav";
export default {
  middleware:['log'],
  components:{
    TheSidenav,TheHeader
  },
  data(){
    return{
      displaySidenav : false
    }
  }
}
</script>
<style>
body,html{
  font-family: 'Open Sans', sans-serif;
}
body{
  margin: 0;
}
</style>
