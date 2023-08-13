<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import pageArticles from "./views/page-articles.vue";


export default {
  name: 'App',
  components: {
    pageArticles
  },

}
</script>



<style scoped>
div{
  height: 100%;
  width: 80%;
  margin: 0 auto;
}

</style>
