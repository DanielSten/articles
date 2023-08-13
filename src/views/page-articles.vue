<template>
  <div>
    <router-link to="/article">
      <button-slot>Добавить статью</button-slot>
    </router-link>
    <div class="page_articles-all">
      <div v-for="article in articles" :key="article.id" class="card_article-block">
        <div class="card_article_block-title">
          {{ article.name }}
        </div>
        <div class="card_article_block-subtitle">
          {{ article.price }}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import buttonSlot from "../components/button-slot.vue";
import {mapActions} from "vuex";


export default {
  name: "page-articles",
  components: {
    buttonSlot
  },
  created () {
    this.getArticles()
  },
  computed:{
    articles () {
      return this.$store.state.articles
    }
  },
  methods: {
    ...mapActions(['getArticles', 'addArticleToDb']),
    async add () {
      this.getArticles()
    },
  }
}
</script>

<style scoped>
.page_articles-all{
  margin: 15px auto;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
}
.card_article-block{
  border: 1px solid grey;
  border-radius: 7px;
  width: 400px;
  background-color: #eaeaea;
  margin-bottom: 20px;
}
.card_article_block-title{
  padding: 10px 20px 45px;
  font-size: 25px;
  word-wrap: break-word;
}
.card_article_block-subtitle{
  margin: 0 10px;
  word-wrap: break-word;
}
</style>