import Vuex from 'vuex'
import api from "../api/idb";


export default new Vuex.Store({
    state: {
        articles: []
    },
    mutations: {
        SET_ARTICLE (state, articles) {
            state.articles = articles
        }
    },
    getters: {

    },
    actions: {
        addArticleToDb ({ commit }, { article }) {
            return api.saveArticle(article)
        },
        async getArticles ({ commit }) {
            let articles = await api.getArticles()
            commit('SET_ARTICLE', articles)
        },
    },
})