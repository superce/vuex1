<template>
  <div class="post">
    <div class="upper">
      <postBody :postId="postId" />
    </div>
    <div class="bottom">
      <commentBox />
    </div>
  </div>
</template>

<script>
  import postBody from "@/components/postBody";
  import commentBox from "@/components/commentBox";
  export default {
    components: {
      postBody,
      commentBox
    },
    name: "post",
    computed:{
      postId(){
        return this.$route.params.id
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .post {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .upper {
    display: flex;
    min-height: 40vh;
    background-color: #00bcd4;
  }

  .bottom {
    display: flex;
    flex-grow: 1;
    background: rgba(240, 240, 240, 0.5);
  }

</style>
