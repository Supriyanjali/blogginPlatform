import { mapGetters } from 'vuex'
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
    editBlog () {
      const editedBlog = {
        id: this.blog.id,
        title: this.blog.title,
        description: this.blog.description
      }
      this.$store.dispatch('editBlog', editedBlog)
      swal({
        text: 'Blog has been edited successfully',
        icon: 'success'
      })
    }
  }
}
