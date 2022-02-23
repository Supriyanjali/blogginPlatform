
export default {
  data () {
    return {
      blog:
      {
        id: this.$store.state.blogs.length + 1,
        title: '',
        description: ''
      },
      submitted: false
    }
  },
  methods: {
    submitBlog () {
      this.$store.state.blogs.push(this.blog)
      console.log(this.$store.state.blogs)
      this.submitted = true
    }
  }
}
