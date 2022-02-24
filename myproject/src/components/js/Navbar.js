export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    opens () {
      if (this.count % 2) { document.getElementsByClassName('navbar-links')[0].style.display = 'inline-block' } else { document.getElementsByClassName('navbar-links')[0].style.display = 'none' }
      this.count += 1
    }
  }
}
