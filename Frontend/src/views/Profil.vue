<template>
  <div class="container">
    <HeaderFeed/>
    <InfoProfil/>
  </div>
</template>

<script>
import HeaderFeed from '@/components/HeaderFeed.vue'
import InfoProfil from '@/components/InfoProfil.vue'

export default {
  name: 'Profil',
  components: {
    HeaderFeed,
    InfoProfil
  }
}
</script>

<style lang="scss" scoped>

</style>