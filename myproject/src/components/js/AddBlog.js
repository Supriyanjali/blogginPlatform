import swal from 'sweetalert'
export default {
  data () {
    return {
      blog:
      {
        id: this.$store.state.count,
        title: '',
        description: ''
      },
      submitted: false
    }
  },
  methods: {
    submitBlog () {
      if (this.blog.title && this.blog.description && this.blog.title.split(' ').length < 10) {
        console.log(this.blog.title.split(' ').length)
        this.$store.state.blogs.push(this.blog)
        this.$store.state.count++
        swal({
          text: 'Blog added successfully',
          icon: 'success'
        })
        this.submitted = true
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
