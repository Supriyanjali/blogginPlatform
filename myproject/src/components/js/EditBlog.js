import { mapGetters, mapActions } from 'vuex'
import swal from 'sweetalert'

export default {
  data () {
    return {
      blog: null
    }
  },
  computed: {
    ...mapGetters(['blogsList'])
  },
  mounted () {
    this.id = this.$route.params.id
    this.blog = this.blogsList.find((blog) => blog.id === this.id)
  },
  methods: {
    ...mapActions(['editBlog']),
    editingBlog () {
      if (this.blog.title && this.blog.description && this.blog.title.split(' ').length < 10) {
        const editedBlog = {
          id: this.blog.id,
          title: this.blog.title,
          description: this.blog.description
        }
        this.editBlog(editedBlog)
        swal({
          text: 'Blog has been edited successfully',
          icon: 'success'
        })
      } else if (this.blog.title.split(' ').length >= 10) {
        swal({
          text: 'Title must not be greater than 10 words',
          icon: 'warning'
        })
      } else {
        swal({
          text: 'Fill the details',
          icon: 'error'
        })
      }
    }
  }
}
