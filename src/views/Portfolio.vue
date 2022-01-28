<template>
<div>
  <h3 class="text-center">Portfolio</h3>
  <div v-if="loading">Loading portfolio</div>
  <div class="section column" v-if="!loading">
    <div class="main-portfolio">
      <img src="../assets/ebattle.png" />
      <div class="repo-details">
        <h3 class="repo-title"><a href="https://ebattle.online" target="_blank" rel="noopener noreferrer">ebattle.online 🌐</a></h3>
        <p>A platform aiming to bring competetive gaming for everyone.</p>
      </div>
    </div>
    <div class="main-portfolio">
      <img src="../assets/creator_ebattle.png" />
      <div class="repo-details">
        <h3 class="repo-title"><a href="https://creator.ebattle.online" target="_blank" rel="noopener noreferrer">creator.ebattle.online 🌐</a></h3>
        <p>A platform to unite all game hosts to host and manage their games.</p>
      </div>
    </div>
    <div class="main-portfolio" v-for="repo in githubRepos" :key="repo.id">
      <img src="../assets/dinq.png" v-if="repo.name=== 'humaraindia'" alt="dinq.in"/>
      <img src="../assets/ntcp.png" v-if="repo.name=== 'ntcp'" alt="dinq.in"/>
      <img src="../assets/tvshows.png" v-if="repo.name=== 'tvshows_app'" alt="dinq.in"/>
      <div class="repo-details">
        <h3 class="repo-title"><a :href="repo.homepage" target="_blank" rel="noopener noreferrer">{{repo.name}} 🌐</a></h3>
        <p>{{repo.description}}</p>
      </div>
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

<style lang="scss" scoped>

.section {
  justify-content: flex-start;
}

.main-portfolio {
  margin: 20px 10px;
  color: #003049;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 2px solid #003049;
  p, h3 {
    padding: 0px 10px;
  }
  img {
    max-width: 345px;
    padding: 0;
  }
  .repo-details {
    padding: 0px 10px;
    .repo-title {
      a{
        &:hover {
          color: #d62828;
        }
      }
    }
  }
}

</style>
