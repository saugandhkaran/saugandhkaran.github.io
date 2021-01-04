<template>
<div>
  <div class="section">
    <img src="../assets/portfolio-image.png" alt="Saugandh image"/>
    <div class="home-text">
      <p>Hi, </p>
      <p>I am Saugandh</p>
      <p class="stats">Web Developer, UI Designer, Entrepreneur</p>
      <router-link to="about"><button>About me</button></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
.section {
  -webkit-animation-name: popup;
  -webkit-animation-duration: 0.4s;
  animation-name: popup;
  animation-duration: 0.4s;
  img {
    max-width: 400px;
  }

  .home-text {
    text-align: left;
    p {
      font-weight: bold;
      font-size: 2em;
      margin: 0;
      line-height: 1.3;
    }
    .stats {
      font-size: 1em;
    }
    button {
      margin-top: 20px;
    }
  }
}

.quote {
  -webkit-animation-name: slide;
  -webkit-animation-duration: 1s;
  animation-name: slide;
  animation-duration: 1s;
  }

  @-webkit-keyframes slide {
    from {opacity: 0}
    to {opacity: 1}
  }

  @keyframes slide {
      from {opacity: 0}
      to {opacity: 1}
  }
</style>
