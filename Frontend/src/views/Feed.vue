<template>
  <div class="container">
    <HeaderFeed/>
    <Post/>
  </div>
</template>

<script>
import HeaderFeed from '@/components/HeaderFeed.vue'
import Post from '@/components/Post.vue'

export default {
  name: 'Feed',
  components: {
    HeaderFeed,
    Post
  }
  
}
</script>

<style lang="scss" scoped>

</style>