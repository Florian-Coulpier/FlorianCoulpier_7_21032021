<template>
  <div class="signup">
    <div id="form-signup">
      <form class="signup" @submit="checkForm" action="" method="post"><br/>
        <h4>Inscrivez-vous :</h4><br/>
        <p>
          <input id="prenom" v-model="prenom" type="text" name="prenom" placeholder="Votre prénom"><br/>
        </p>
        <p>
          <input id="nom" v-model="nom" type="text" name="nom" placeholder="Votre nom"><br/>
        </p>
        <p>
          <input id="email" v-model="email" type="text" name="email" placeholder="Votre email"><br/>
        </p>
        <p>
          <input id="password" v-model="password" type="text" name="password" placeholder="Votre mot de passe"><br/>
        </p>
        <button class="btn btn-danger" type="submit">Je m'inscris !</button>
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
#form-signup {
  position: relative;
  margin-top: 30px;

  .signup {
    border: 1px solid #d31919;
    border-radius: 20px;
    box-shadow: 10px 5px 20px rgba(46, 46, 46, 0.200);
    width: 280px;
    height: 400px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    h4 {
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 10px;
    }

    button {
      margin-top: 10px;
    }
  }
}
</style>