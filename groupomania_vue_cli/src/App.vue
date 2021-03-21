<template>
  <div class="header">
    <div id="logo-groupomania">
      <img alt="Logo de l'entreprise Groupomania" src="@/assets/Groupomania_Logos+(3)/icon-left-font-monochrome-black.png">
    </div>
  </div>
  <div id="nav">
    <router-link to="/">Login</router-link> |
    <router-link to="/Signup">Signup</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  img {
    width: 300px;
    margin-top: 20px;
  }
}

#nav {
  padding: 50px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #d31919;
    }
  }
}
</style>
