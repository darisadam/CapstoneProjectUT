<template>
  <div id="app">
    <InformasiAntrian />
  </div>
</template>

<script>
import InformasiAntrian from './components/InformasiAntrian.vue';

export default {
  name: 'App',
  components: {
    InformasiAntrian
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
