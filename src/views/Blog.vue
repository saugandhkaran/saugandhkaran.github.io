<template>
<div class="section">
  <div>
    <div class="flex-container column">
      <h3 class="text-center">Blogs</h3>
      <div v-for="blog in blogs" :key="blog.id" class="card">
        <img class="blog-image" :src="blog.cover_image">
        <div>
        <p style="color: #d62828;"><a :href="blog.canonical_url" target="_blank"><strong>{{blog.title}} 🌐</strong></a></p>
        <p class="blog-date">{{blog.readable_publish_date}}</p>
        <div class="flex-container">
          <p class="blog-tags" v-for="tag in blog.tag_list" :key="tag">#{{tag}}</p>
        </div>
        <p class="blog-reaction">💬{{blog.comments_count}}    &nbsp; &nbsp; 👍{{blog.public_reactions_count}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Blog',
  components: {
  },
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    getBlogs() {
      this.loading = true;
      axios.get('https://dev.to/api/articles?username=saugandhkaran').then((data) => {
        this.blogs = data.data;
        this.loading= false;
      }).catch((err) => {
        this.error = 'Could not load github repos';
        this.loading= false;
      });
    }
  },
  beforeMount() {
    this.getBlogs();
  }
}
</script>

<style scoped lang="scss" scoped>

.section {
  align-items: baseline;
}
.card {
  .flex-container {
    justify-content: flex-start;
  }
  .blog-tags {
    font-size: 0.8em;
    padding: 4px;
    border-radius: 6px;
    background-color: #fcbf49;
    margin-right: 10px;
  }
  .blog-reaction {
    font-size: 0.8em;
    margin: 10px 0px;
  }
}
a{
  &:hover {
    color: #d62828;
  }
}
</style>
