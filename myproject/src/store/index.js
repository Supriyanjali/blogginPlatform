import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    blogs: [],
    count: 1,
    blog: {}
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  mutations: {
    ADD_BLOG (state, blog) {
      state.blogs.push(blog)
      state.count += 1
    },
    DELETE_BLOG (state, id) {
      let blogs = state.blogs
      blogs = blogs.filter(eachblog => eachblog.id !== id)
      state.blogs = blogs
    },
    EDIT_BLOG (state, blog) {
      console.log('Hii23', blog)
      state.blogs.forEach(b => {
        if (b.id === blog.id) {
          b = blog
        }
      })
      console.log('I', state.blogs)
    }
  },
  actions: {
    addBlog ({commit}, blog) {
      commit('ADD_BLOG', blog)
    },
    deleteBlog ({commit}, blog) {
      console.log('Inside action')
      commit('DELETE_BLOG', blog)
    },
    editBlog ({commit}, blog) {
      console.log('Hii')
      commit('EDIT_BLOG', blog)
    }
  },

  getters: {
    blogsList (state) {
      return state.blogs
    },
    blogToEdit (state) {
      return state.blog
    }
  }
})
