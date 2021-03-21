<template>
  <div id="nav">
    <router-link to="/Profil">Profil</router-link> |
    <router-link to="/Feed">Mon fil d'actualité</router-link>
  </div>
  <router-view/>
  <Post/>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'Feed',
  components: {
    Post
  }
  
}
</script>

<style>

</style>