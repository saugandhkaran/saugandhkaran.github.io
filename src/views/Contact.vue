<template>
<div class="section">
  <div class="text-center">
    <h3>Have an idea we can discuss?</h3>
    <h3>Hire me?</h3>
    <h3>Collaborate on side projects?</h3>
    <h3>Or just connect?</h3>
    <a href="mailto:saugandhkaran@gmail.com?Subject=Hey! Lets meet up" target="_"><img alt="gmail" src="../assets/gmail.png"></a>
    <a href="https://www.linkedin.com/in/saugandh-karan" target="_"><img alt="linkedin" src="../assets/linkedin.png"/></a>
    <a href="https://www.instagram.com/saugandhkaran/" target="_"><img src="../assets/insta.png"/></a>
    <a href="https://github.com/saugandhkaran/" target="_"><img src="../assets/github.png"/></a>
    <a href="https://gitlab.com/saugandhkaran" target="_"><img src="../assets/gitlab.png"/></a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contact',
  components: {
  }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 700px) {
  .section {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  padding-top: 0px;
  transform: translate(-50%, -50%);
  -webkit-animation-name: popup;
  -webkit-animation-duration: 0.4s;
  animation-name: popup;
  animation-duration: 0.4s;
}

}
img {
  margin-top: 20px;
  width: 70px;
}
</style>
