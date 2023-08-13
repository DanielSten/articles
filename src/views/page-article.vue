<template>
  <div class="page_article">
    <router-link to="/"><button-slot>Вернуться назад</button-slot></router-link>
    <form>
      <textarea class="page_article-textarea page_article-title"
                v-model="title"
                title="Заголовок"
      ></textarea>
      <textarea class="page_article-textarea page_article-subtitle"
                v-model="subtitle"
                title="Текст"
      >
      </textarea>
      <router-link to="/"><button-slot @click="add" :disabled="addDisabled">Сохранить статью</button-slot></router-link>
    </form>
  </div>
</template>

<script>
import buttonSlot from "../components/button-slot.vue";
import {mapActions} from "vuex";



export default {
  name: "page-article",
  components:{
    buttonSlot
  },
  data () {
    return {
      addDisabled: false,
      title: '',
      subtitle: '',
    }
  },
  computed: {
    books () {
      return this.$store.state.articles
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    ...mapActions(['getArticles', 'addArticleToDb']),
    async add () {
      this.addDisabled = true
      const article = {
        name: this.title,
        price: this.subtitle
      }
      console.log('about to add ' + JSON.stringify(article))
      await this.addArticleToDb({ article })
      this.getArticles()
      this.addDisabled = false
    },
  }
}
</script>

<style scoped>
.page_article{
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
.page_article-textarea{
  width: 60%;
  display: block;
  border-radius: 8px;
  margin: 20px auto;
  resize: none;
}
.page_article-title{
  padding: 10px 20px 45px;
  font-size: 25px;
  height: 150px;
}
.page_article-subtitle{
  padding: 10px 20px 45px;
  font-size: 19px;
  min-height: 400px;
}
</style>