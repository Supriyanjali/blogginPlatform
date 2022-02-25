<template>
    <div>
        <h3>Thanks for adding the post</h3>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title:{{blog.title}}</p>
        <p>Blog Description:{{blog.description}}</p>
    </div>
    <button class="submitButton" @click="other">Add Other</button>
    </div>
</template>
<script>
export default{
  name: 'PreviewBlog',
  props: ['blog'],
  methods: {
    other () {
      window.location.reload()
    }
  }
}
</script>

<style scoped>
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin:30px 0;
}
.submitButton{
    color: white;
    padding: 10px;
    margin-top:20px;
    background-color: rgb(42, 43, 44);
    border: 2px solid white;
    border-radius: 5px;
}
</style>
