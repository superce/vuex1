<template>
  <div class="home">
    {{title}}
    <router-link to="post/123">跳轉post頁面</router-link>
  </div>
</template>

<script>

  export default {
   
    name: "Home",
    data: () => ({
      title: '123'
    })
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
