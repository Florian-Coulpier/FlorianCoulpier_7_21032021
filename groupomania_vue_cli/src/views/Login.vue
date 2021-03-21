<template>
  <div class="home">
    <div id="form-login">
      <form @submit="onSubmit" @reset="onReset" class="login"><br/>
        <h4>Identifiez-vous :</h4><br/>
        <p>
          <label for="email">Email</label><br/>
          <input id="email" v-model="email" type="text" name="email"><br/>
        </p>
        <p>
          <label for="password">Passeword</label><br/>
          <input v-model="password" type="text" name="password" id="password"><br/>
        </p>
        <button class="btn btn-danger" type="button">Je me connecte !</button>
        <p class="mdpOublie">Mot de passe oublié </p>
      </form>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss" scoped>
#form-login {
  position: relative;
  margin-top: 30px;

  .login {
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