<template>
<b-container fluid style="max-width: 800px; margin:2rem" >
  <div id="app">
    <div class="row">

       <GoogleMap :latitude= -32.88632 :longitude= -68.83828 />
       
    </div>

  </div>
   </b-container>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
export default {
  name: 'DondeEstamos',
  components: {
    GoogleMap
  }
}
</script>

<style>
</style>