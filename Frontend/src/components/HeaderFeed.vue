<template>
<div id="headerfeed">
  <img src="../assets/Groupomania_Logos+(3)/icon-left-font-monochrome-black.png" alt="Groupomania logo">
  <div class="container" id="nav-interne">
    <div id="search" class="col-lg-3">
      <input class="form-control " type="search" placeholder="Je recherche un collègue !" aria-label="Search">
    </div>
    <div id="liens" class="col-lg-4 offset-lg-5">
      <router-link to="/Profil">Mon profil</router-link> |
      <router-link to="/Feed">Mon fil d'actualité</router-link> |
      <a href="/">Se déconnecter</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderFeed',
  components: {

  }
  
}
</script>

<style lang="scss" scoped>
img {
  width: 300px;
  margin: 30px 0px;
}

#nav-interne {
  display: flex;  
  margin-bottom: 40px;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #d31919;
    }
  }
}
</style>