<template>
  <div class="comment-box">
    <div class="btn">
      <input type="text" v-model="msg" placeholder="请输入" class="input">
      <input type="submit" value="提交" @click="submitcomments" class="botton">
    </div>
    <div v-for="comment in reverseComments" :key="comment.id" class="column">
      {{ comment.body }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "commentBox",
    data: () => ({
      msg: ''
    }),
    computed: {
      comments(){
        return this.$store.state.comment.all;
      },
      reverseComments() {
        return this.comments.slice().reverse()
      }
    },
    methods: {
      submitcomments() {
        let comment = {
          id: (this.reverseComments.length + 1).toString(),
          body: this.msg
        }
        // this.comments.push(comment)
        this.$store.commit('addComments',comment);
        this.msg = ''
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comment-box {
    background-color: #fff;
    width: 70%;
    min-height: 30vh;
    margin: 20px auto;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }
  .btn{
    width:90%;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
  }
  .btn .input{
    flex-grow: 1
  }
  .column{
    width:90%;
    margin: 0 auto;
  }
</style>
