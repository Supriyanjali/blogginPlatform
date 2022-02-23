import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import EditBlog from '@/components/EditBlog'
import ViewBlogs from '@/components/ViewBlogs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/',
      name: 'ViewBlogs',
      component: ViewBlogs
    },
    {
      path: '/edit/:id',
      params: true,
      name: 'EditBlog',
      component: EditBlog
    }
  ]
})
