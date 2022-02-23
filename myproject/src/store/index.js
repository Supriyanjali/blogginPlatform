import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

const state = {
  blogs: []
}

const mutations = {
  SET_BLOGS (state, blogs) {
    state.blogs = blogs
  },
  ADD_BLOG (state, blog) {
    state.blogs.push(blog)
  },
  DELETE_BLOG (state, id) {
    console.log('Inside mutation')
    let blogs = state.blogs
    blogs = blogs.filter(eachblog => eachblog.id !== id)
    console.log('After deletion', blogs)
    state.blogs = blogs
    console.log('Done')
  },
  EDIT_BLOG (state, blog) {
    state.blogs.forEach(b => {
      if (b.id === blog.id) { b = blog }
    })
  }
}
const actions = {
  getBlogs ({commit}) {
    let blogs = state.blogs
    commit('SET_BLOGS', blogs)
  },
  addBlog ({commit}, blog) {
    commit('ADD_BLOG', blog)
  },
  deleteBlog ({commit}, blog) {
    console.log('Inside action')
    commit('DELETE_BLOG', blog)
  },
  editBlog ({commit}, blog) {
    commit('EDIT_BLOG', blog)
  }
}

const getters = {
  blogsList (state) {
    return state.blogs
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
