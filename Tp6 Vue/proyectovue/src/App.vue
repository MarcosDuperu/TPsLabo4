<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view />
  </div>
</template>

<script>
import nadvar from "@/components/nadvar.vue";
export default {
  components: {
    "nav-bar": nadvar
  }
};
</script>

<style lang="scss"></style>
