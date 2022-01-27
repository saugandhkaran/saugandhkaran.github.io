<template>
<div class="section">
  <div class="text-center">
    <p>Have an idea we can discuss?</p>
    <p>Hire me?</p>
    <p>Collaborate on side projects?</p>
    <p>Or just connect?</p>
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

img {
  margin-top: 20px;
  width: 70px;
}

@media screen and (max-width: 500px) {
  img {
    margin-top: 10px;
    width: 50px;
  }
}
</style>
