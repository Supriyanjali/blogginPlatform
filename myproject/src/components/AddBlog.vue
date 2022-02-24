<template>
<main id="add-blog">
<h1>Add New Blog</h1>
    <form v-if="!submitted">
        <div class="title">
            <label for="titleName" >Title of Blog <span>*</span></label>
            <textarea type="text" id="titleName" placeholder="Give me the title of your blog...." v-model="blog.title" />
        </div>
        <div class="description">
            <label for="desc">Description <span>*</span></label>
            <textarea rows="8" type="text" placeholder="Give me the description of your blog...." v-model="blog.description" id="desc" />
        </div>
        <button class="submitButton" v-on:click.prevent="submitBlog">
            ADD BLOG
        </button>
    </form>
    <div v-if="submitted">
        <h3>Thanks for adding the post</h3>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title:{{blog.title}}</p>
        <p>Blog Description:{{blog.description}}</p>
    </div>
    </div>
    </main>
</template>
<script src="./js/AddBlog.js"></script>
<style scoped>
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin:20px 0 10px;
}
input[type="text"],textarea{
    display: block;
    width:100%
}
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
span{
    color:red;
}
@media (max-width: 800px) {
#add-blog{
     display: flex;
    flex-direction: column;
    align-items: center;
}
form{
    display: flex;
    flex-direction: column;
    width:75%;

}
.submitButton{
width: fit-content;
margin:20px auto;

}
}

</style>
