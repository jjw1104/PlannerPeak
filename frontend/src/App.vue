<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/omrie.png">
    <Testing />

    {{ notes[0:].content }}
  </div>
</template>

<script>
import axios from 'axios'
import Testing from './components/Testing';

export default {
  name: 'App',
  data: () => ({
    notes: []
  }),
  components: {
    Testing
  },
  mounted () {
  axios.get('http://localhost:8000/api/notes/').then((response) => {
    this.notes = response.data
  })
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
