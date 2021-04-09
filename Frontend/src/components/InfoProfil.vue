<template>
  <div id="profil" class="container">
    <div id="myprofil">
      <div id="photo_myprofil">
        <i class="fas fa-user-circle"></i>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
      </div>
      <p>
        <label for="prenom">Prénom</label><br/>
        <input id="prenom" v-model="prenom" type="text" name="prenom"><br/>
      </p>
      <p>
        <label for="nom">Nom</label><br/>
        <input id="nom" v-model="nom" type="text" name="nom"><br/>
      </p>
      <p>
        <label for="email">Email</label><br/>
        <input id="email" v-model="email" type="text" name="email"><br/>
      </p>
      <p>
        <label for="password">Password</label><br/>
        <input id="password" v-model="password" type="text" name="password"><br/>
      </p>
      <button class="btn btn-danger">J'enregistre</button>
      <p id="deleteAccount">Je souhaite supprimer mon compte</p>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  #profil {
    position: relative;
    
    #myprofil {
      box-shadow: 3px 6px 19px 0px rgba(46,46,46,0.49);
      padding: 50px 0px 30px 0px;
      width: 70%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      #photo_myprofil {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 40px;
        
        .fas {
          font-size: 100px;
          margin-bottom: 20px;
        }

        input {
          margin: 0 auto;
        }
      }

      button {
        margin-top: 40px;
      }
      
      #deleteAccount {
        font-style: italic;
        margin-top: 15px;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
</style>