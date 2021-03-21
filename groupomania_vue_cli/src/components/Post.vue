<template>
  <div class="container" id="main-post">
    <div id="post" class="col-lg-12">
      <div class="post-top">
        <textarea name="new-post" id="new-post" cols="30" rows="2" placeholder="Ecrivez votre publication !"></textarea>
      </div>
      <div class="post-bottom mt-4 mb-4">
        <button class="btn btn-danger" type="button">Pièce jointe</button> 
        <button class="btn btn-danger" type="button">Publier</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Post'
}
</script>

<style scoped lang="scss">
  #main-post {

    #post {
      box-shadow: 3px 6px 19px 0px rgba(46,46,46,0.49);
      border: 2px solid black;

      textarea {
        margin-top: 30px;
        padding-top: 20px;
        width: 90%;
        resize: none;
      }

      .post-bottom {
        display: inline-block;
      }
    }
  }
</style>
