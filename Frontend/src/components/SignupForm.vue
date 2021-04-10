<template>
  <div>
    <img src="../assets/Groupomania_Logos+(3)/icon-left-font-monochrome-black.png" alt="Groupomania logo">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/Signup">Signup</router-link>
    </div>
    <div id="signup">
      <form class="signupForm" @submit.prevent="submitForm" action="" method="post"><br/>
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
        <button class="btn btn-danger" type="submit" @click.prevent="submitForm">Je m'inscris !</button>
      </form>  
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'inscription',
  data(){
    return{
      prenom:"",
      nom:"", 
      email:"",
      password:""   
    }
  },
  methods: {
    submitForm(){
      axios.post('http://localhost:3000/api/auth/signup', {
          'prenom': this.prenom,
          'nom': this.nom,
          'email': this.email,
          'password': this.password
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
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

#signup {
  position: relative;
  margin-top: 50px;

  .signupForm {
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
  }
}
</style>