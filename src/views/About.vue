<template>
<div class="section-about">
  <div class="grid-row"> 
    <div class="column">
      <div class="card">
        <img src="../assets/india.png">
        <p> I am from <b>India</b></p>
      </div>
      <div class="card">
        <img src="../assets/netherlands.png">
        <p> Current I work in <b>Netherlands</b></p>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <img src="../assets/blog.png">
        <p>I read a lot of <b>blogs</b></p>
      </div>
      <div class="card">
        <img src="../assets/dota.png">
        <p>Ardent fan of <b>Dota 2</b></p>
      </div>
      <div class="card">
        <img src="../assets/ps.png">
        <p>Occasional <b>designer</b></p>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <img class="profile-image" src="../assets/beer.jpg">
        <p>Beer or Whiskey? <br><b>Beer</b></p>
      </div>
      <div class="card">
        <img class="profile-image" src="../assets/biryani.jpg">
        <p><b>Biryani</b> all the way</p>
      </div>
      <div class="card">
        <img class="profile-image" src="../assets/stocks.png">
        <p>Learning how <b>Stock market</b> works</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',
  components: {
  }
}
</script>

<style lang="scss">
.profile-image {
  max-width: 300px;
}

.section-about {
  max-width: 1000px;
  padding: 100px 10px;
  margin: 0 auto;
}

.column {
  .card {
    padding: 5px 5px 10px 5px;
    background-color: #ddbda1;
    border-radius: 6px;
    margin: 5px 5px;
    -webkit-animation-name: popup;
    -webkit-animation-duration: 0.4s;
    animation-name: popup;  
    animation-duration: 0.4s;

    &:hover {
      transform: scale(1.05);
      transition: 0.2s ease-out;
    }
    p {
      margin: 0px;
      padding: 5px 5px;
      color: #724721;
      max-width: 160px;
    }
  }
  img {
    max-width: 160px;
  }
}

</style>
