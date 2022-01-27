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
        <li><router-link to="/blog">blogs</router-link></li>
        <li><router-link to="/experience">experience</router-link></li>
        <li><router-link to="/portfolio">portfolio</router-link></li>
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
  justify-content: space-around;
  padding: 0px 10px;
  background-color: #eae2b7;

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
      padding-left: 0px;
      li {
        margin-left: 30px;
        &:first-child{
        margin-left: 0px;
      }
      }
    }
  }
}
</style>
