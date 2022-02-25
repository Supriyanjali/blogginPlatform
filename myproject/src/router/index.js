import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import EditBlog from '@/components/EditBlog'
import ViewBlogs from '@/components/ViewBlogs'
import PreviewBlog from '@/components/PreviewBlog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/preview',
      name: 'PreviewBlog',
      component: PreviewBlog
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
