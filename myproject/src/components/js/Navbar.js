export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    opens () {
      if (!this.flag) { document.getElementsByClassName('navbar-links')[0].style.display = 'inline-block' } else { document.getElementsByClassName('navbar-links')[0].style.display = 'none' }
      this.flag = !this.flag
    }
  }
}
