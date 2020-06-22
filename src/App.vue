<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'App',
  created() {
    this.$store.dispatch("fetchEvents")
  },
}
</script>
<style>
  @import './assets/css/style.min.css';
</style>
