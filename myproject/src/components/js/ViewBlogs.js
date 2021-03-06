import { mapActions, mapGetters } from 'vuex'
const Swal = require('sweetalert2')
export default {
  data () {
    return {
      search: '',
      timeout: null
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
      return this.blogsList
    }
  },
  methods: {
    blogsListFxn1 () {
      console.log('11')
      return this.blogsList.filter((blog) => {
        return blog.title.match(this.search)
      })
    },
    ...mapActions(['deleteBlog']),
    activate () {
      console.log('I am in ')
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        console.log('Hii')
        this.blogsListFxn1()
      }, 20000)
    },
    deletedBlog (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Once deleted cannot be',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.deleteBlog(id)
        }
      })
    },
    editingBlog (blog) {
      this.$store.state.blog = blog
      this.$router.push({ name: 'EditBlog', params: { id: blog.id } })
    }
  }
}
