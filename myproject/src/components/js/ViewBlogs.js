import { mapActions, mapGetters } from 'vuex'
import swal from 'sweetalert'
export default {
  data () {
    return {
      search: ''
    }
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  },
  computed: {
    ...mapGetters(['blogsList']),
    blogsListFxn () {
      return this.blogsList.filter((blog) =>
        blog.title.match(this.search)
      )
    }
  },
  methods: {
    ...mapActions(['deleteBlog']),
    deletedBlog (id) {
      if (confirm('Do you really want to delete?')) {
        this.deleteBlog(id)
        swal({
          text: 'Blog has been deleted successfully',
          icon: 'success'
        })
      }
    }
  }
}
