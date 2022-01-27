<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
  </div>
</template>

<script>
import Header from "../src/components/shared/Header";
export default {
  name: "app",
  components: {
    'the-header': Header
  },
  data() {
    return {
      setup: false
    };
  },
  methods: {
  }
};
</script>
<style lang="scss">
html {

};
#app {
  font-family: 'Dosis', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #003049;
  font-size: 20px;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: #003049;
}

.section {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
  margin: 0 auto;
}

button {
  cursor: pointer;
  padding: 15px 30px;
  border-radius: 30px;
  background-color: rgba(215, 89, 21, 85);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.row {
  display: flex;
  align-items: center;
  flex:1;
  overflow: auto;
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.grid-row {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  grid-gap: 1rem;
}

.text-center {
  text-align: center;
}

  @-webkit-keyframes popup {
    from {opacity: 0}
    to {opacity: 1}
  }

  @keyframes popup {
      from {opacity: 0}
      to {opacity: 1}
  }
  
</style>
