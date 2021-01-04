<template>
  <nav>
    <router-link to="/">
    <div class="brand">
      <img src="../../assets/logo.png" alt="Saugandh Karan Logo" />
      <p>Saugandh Karan</p>
    </div>
    </router-link>
    <div class="menu">
      <ul>
        <li><router-link to="/about">about</router-link></li>
        <li><router-link to="/experience">experience</router-link></li>
        <li><router-link to="/portfolio">portfolio</router-link></li>
        <li><router-link to="/contact">contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 10px;

  .brand {
    display: flex;
    align-items: center;
    img {
      max-width: 30px;
    }

    p {
      margin-left: 10px;
    }
  }

  .menu {
    display: flex;
    justify-content: space-around;
    ul {
      display: flex;
      list-style: none;
      li {
        margin-left: 30px;
      }
    }
  }
}
</style>
