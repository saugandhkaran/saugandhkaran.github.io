<template>
<div>
  <div v-if="loading">Loading portfolio</div>
  <div class="section" v-if="!loading">
    <div class="main-portfolio">
      <img src="../assets/ebattle.png" />
      <h3>ebattle.online</h3>
      <p>A platform aiming to bring competetive gaming for everyone.</p>
      <a href="https://ebattle.online" target="_blank" rel="noopener noreferrer"><button>Go to website</button></a>
    </div>
    <div class="main-portfolio">
      <img src="../assets/creator_ebattle.png" />
      <h3>creator.ebattle.online</h3>
      <p>A platform to unite all game hosts to host and manage their games.</p>
      <a href="https://creator.ebattle.online" target="_blank" rel="noopener noreferrer"><button>Go to website</button></a>
    </div>
    <div class="main-portfolio" v-for="repo in githubRepos" :key="repo.id">
      <img src="../assets/dinq.png" v-if="repo.name=== 'humaraindia'" alt="dinq.in"/>
      <img src="../assets/ntcp.png" v-if="repo.name=== 'ntcp'" alt="dinq.in"/>
      <img src="../assets/tvshows.png" v-if="repo.name=== 'tvshows_app'" alt="dinq.in"/>
      <h3>{{repo.name}}</h3>
      <p>{{repo.description}}</p>
      <a :href="repo.homepage" v-if="repo.name === 'saugandhkaran.github.io'" target="_blank"><button class="btn-primary">This is the site</button></a>
      <a :href="repo.homepage" v-if="repo.name !== 'saugandhkaran.github.io'" target="_blank"><button class="btn-primary">Go to demo site</button></a>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Portfolio',
  components: {

  },
  data () {
    return  {
      githubRepos: [],
      error: '',
      loading: true,
      repoList: [
        'humaraindia',
        'tvshows_app',
        'saugandhkaran.github.io',
        'ntcp'
      ]
    }
  },
  methods: {
    getGithubRepositories() {
      this.loading = true;
      axios.get('https://api.github.com/users/saugandhkaran/repos').then((data) => {
        this.githubRepos = this.filterGithubRepos(data.data);
        this.loading= false;
      }).catch((err) => {
        this.error = 'Could not load github repos';
        this.loading= false;
      });
    },
    filterGithubRepos(repoArray) {
      return repoArray.filter(repo => {
        return this.repoList.includes(repo.name);
      })
    }
  },
  beforeMount() {
    this.getGithubRepositories();
  }
}
</script>

<style lang="scss">
.main-portfolio {
  max-width: 300px;
  background-color: #ddbda1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 20px 10px;
  -webkit-animation-name: popup;
  -webkit-animation-duration: 0.4s;
  animation-name: popup;
  animation-duration: 0.4s;
  color: #724721;
  p, h3 {
    padding: 0px 10px;
  }
  button {
    margin: 10px;
  }
  img {
    width: 100%;
  }
}

</style>
