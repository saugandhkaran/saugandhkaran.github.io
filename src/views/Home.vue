<template>
<div>
  <div class="section">
    <img src="../assets/portfolio-image.png" alt="Saugandh image"/>
    <div class="home-text">
      <p>👋 I am <span class="highlight">Saugandh Karan</span></p><br>
      <p class="stats">I am a Web Developer, proficient in Javascript with 6+ years of experience. I also like understanding and creating great customer journeys using UI and UX design. </p>
      <br>
      <p class="stats">Currently I stay in Berlin 🇩🇪, creating and enhancing checkout experiences for customers in a fashion ecommerce store. Concurrently I am also trying to give shape to one of my ideas.</p>
      <br>
      <p class="stats">Have a great idea which you would want to discuss? <br>Or hire me?<br>Or just grab a mug of beer?<br>Let's connect:</p>
      <div class="contact">
        <a href="mailto:saugandhkaran@gmail.com?Subject=Hey! Lets meet up" target="_"><img alt="gmail" src="../assets/gmail.png"></a>
        <a href="https://www.linkedin.com/in/saugandh-karan" target="_"><img alt="linkedin" src="../assets/linkedin.png"/></a>
        <a href="https://github.com/saugandhkaran/" target="_"><img src="../assets/github.png"/></a>
        <a href="https://gitlab.com/saugandhkaran" target="_"><img src="../assets/gitlab.png"/></a>
      </div>
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
.contact {
  text-align: center;
  img {
    margin-top: 10px;
    width: 50px;
  }
}
.highlight {
  font-weight: bold;
  color: #d62828;
}
.section {
  -webkit-animation-name: popup;
  -webkit-animation-duration: 0.4s;
  animation-name: popup;
  animation-duration: 0.4s;
  img {
    max-width: 355px;
    padding: 0 10px;
  }

  .home-text {
    text-align: center;
    max-width: 400px;
    padding: 0px 10px;
    p {
      font-size: 1.8em;
      margin: 0;
      line-height: 1.3;
    }
    .stats {
      font-size: 1em;
      text-align: justify;
    }
    button {
      margin-top: 20px;
    }
  }
}
</style>
