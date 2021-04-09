<template>
  <div>
    <img src="../assets/Groupomania_Logos+(3)/icon-left-font-monochrome-black.png" alt="Groupomania logo">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/Signup">Signup</router-link>
    </div>
    <div id="login">
      <form @submit="onSubmit" @reset="onReset" class="loginForm"><br/>
        <h4>Identifiez-vous :</h4><br/>
        <p>
          <label for="email">Email</label><br/>
          <input id="email" v-model="email" type="text" name="email"><br/>
        </p>
        <p>
          <label for="password">Passeword</label><br/>
          <input v-model="password" type="text" name="password" id="password"><br/>
        </p>
        <button class="btn btn-danger" type="button"><router-link to="/Feed">Je me connecte !</router-link></button>
        <p class="mdpOublie">Mot de passe oublié </p>
      </form>  
    </div>
  </div>
</template>

<script>


</script>

<style lang="scss" scoped>
img {
  width: 300px;
  margin: 30px 0px;
}

#nav {
  margin-bottom: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #d31919;
    }
  }
}

#login {
  position: relative;
  margin-top: 50px;

  .loginForm {
    border: 1px solid #d31919;
    border-radius: 20px;
    box-shadow: 10px 5px 20px rgba(46, 46, 46, 0.200);
    width: 280px;
    height: 350px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  
    button {
      margin: 20px 0px 10px 0px;

      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    }

    .mdpOublie {
      font-size: 14px;
      font-style: italic;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>