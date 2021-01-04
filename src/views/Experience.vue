<template>
<div class="section">
  <div class="left-content">
    <h3 class="text-center">Currently</h3>
    <div class="flex-container">
      <div class="card" @mouseover="activeExperience = 'abn'" @mouseleave="activeExperience = ''">
        <img class="experience-image" src="../assets/ABN.png">
        <div>
        <p><strong>Development Engineer</strong></p>
        <p>ABN-AMRO via Sogeti</p>
        </div>
      </div>
      <div class="card" @mouseover="activeExperience = 'ebattle'" @mouseleave="activeExperience = ''">
        <img class="experience-image" src="../assets/DP.png">
        <div>
        <p><strong>Cofounder</strong></p>
        <p>ebattle.online</p>
        <p style="color: white">current</p>
        </div>
      </div>
    </div>
    <h3 class="text-center">Previous stints</h3>
    <div class="flex-container column">
      <div @mouseover="activeExperience = 'kvk'" @mouseleave="activeExperience = ''" class="card previous">
        <img class="experience-image" src="../assets/KVK.png">
        <div>
        <p><strong>Frontend Developer, </strong>KVK via Sogeti</p>
        </div>
      </div>
      <div @mouseover="activeExperience = 'kika'" @mouseleave="activeExperience = ''" class="card previous">
        <img class="experience-image" src="../assets/kika.png">
        <div>
        <p><strong>Javascript Developer, </strong>KiKA via Sogeti</p>
        </div>
      </div>
      <div @mouseover="activeExperience = 'abn-infy'" @mouseleave="activeExperience = ''" class="card previous">
        <img class="experience-image" src="../assets/ABN.png">
        <div>
        <p><strong>Development Engineer, </strong>ABN-AMRO via Infosys</p>
        </div>
      </div>
      <div @mouseover="activeExperience = 'osm'" @mouseleave="activeExperience = ''" class="card previous">
        <img class="experience-image" src="../assets/osmcult.png">
        <div>
        <p><strong>Chief UI Designer, </strong>OSMCult.com</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-container column">
    <h3>Hover on the experience <br>cards to see what I used</h3>
     <div class="images">
      <img v-bind:class="{ 'remove-greyscale': activeExperience }" src="../assets/html.png" />
      <img v-bind:class="{ 'remove-greyscale': activeExperience }" src="../assets/css.png" />
      <img v-bind:class="{ 'remove-greyscale': activeExperience }" src="../assets/es.png" />
      <img v-bind:class="{ 'remove-greyscale': activeExperience }" src="../assets/js.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'ebattle') || (activeExperience === 'kvk')}" src="../assets/vue.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'abn') || (activeExperience === 'abn-infy') || (activeExperience === 'kika')}" src="../assets/angular.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'abn') || (activeExperience === 'abn-infy')}" src="../assets/bootstrap.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'kika')}" src="../assets/materialise.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'kika') || (activeExperience === 'ebattle') || (activeExperience === 'abn') || (activeExperience === 'kvk')}" src="../assets/node.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'kika') || (activeExperience === 'ebattle') || (activeExperience === 'abn') || (activeExperience === 'kvk')}" src="../assets/npm.png" /><br>
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'kika')}" src="../assets/ts.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'abn-infy') || (activeExperience === 'ebattle')}" src="../assets/python.png" />
      <img v-bind:class="{ 'remove-greyscale': activeExperience }" src="../assets/git.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'abn-infy')}" src="../assets/gulp.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience)}" src="../assets/atlassia.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'abn-infy') }" src="../assets/elastic.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'kvk')}" src="../assets/docker.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'abn-infy')}" src="../assets/nuxeo.png" />
      <img v-bind:class="{ 'remove-greyscale': (activeExperience === 'ebattle') || (activeExperience === 'kika') || (activeExperience === 'kvk')}" src="../assets/mongo.png" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Experience',
  components: {
  },
  data () {
    return {
      activeExperience: ''
    }
  }
}
</script>

<style lang="scss">
.card {
    padding: 5px 5px 5px 5px;
    background-color: #ddbda1;
    border-radius: 6px;
    margin: 5px 5px;
    -webkit-animation-name: popup;
    -webkit-animation-duration: 0.4s;
    animation-name: popup;
    animation-duration: 0.4s;
    width: 280px;
    display: flex;
    .experience-image {
      width: 120px;
      border-radius: 6px;
    }
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

    &.previous {
      max-width: 580px;
      width: 100%;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
      p {
        max-width: 100%;
        margin-left: 10px;
      }
    }
  }
  @-webkit-keyframes popup {
    from {opacity: 0}
    to {opacity: 1}
  }

  @keyframes popup {
      from {opacity: 0}
      to {opacity: 1}
  }
.left-content {
  flex: 1;  
  p {
    margin-left: 10px;
    padding: 0;
    line-height: 1.6;
  }
}

.images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 200px;

    img {
      width: 60px;
      height: 60px;
      filter: grayscale(100%);
    }
  }

.remove-greyscale {
  filter: grayscale(0%) !important;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &.column {
    flex-direction: column;
    align-items: center;
    .card {
      padding: 5px 5px 5px 5px;
    }
  }
}
</style>
