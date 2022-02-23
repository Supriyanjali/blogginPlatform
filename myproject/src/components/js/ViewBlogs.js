import { mapGetters } from 'vuex'
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
      console.log('Hii', this.blogsList)
      return this.blogsList.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  },
  methods: {
    deleteBlog (id) {
      this.$store.dispatch('deleteBlog', id)
      swal({
        text: 'Blog has been deleted successfully',
        icon: 'success'
      })
    }

  }
}
