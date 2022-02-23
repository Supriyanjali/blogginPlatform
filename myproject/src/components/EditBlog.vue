<template>
<main id="edit-blog">
<h1>Edit Blog</h1>
    <form>
        <div class="title">
            <label for="titleName" >Title of Blog :</label><span>*</span>
            <textarea type="text" id="titleName" v-model.trim="blog.title" />
        </div>
        <div class="description">
            <label for="desc">Description :</label><span>*</span>
            <textarea rows="10" type="text" v-model.trim="blog.description" id="desc"/>
        </div>
        <button class="submitButton" v-on:click.prevent="editBlog">
            EDIT BLOG
        </button>
    </form>
    </main>
</template>
<script src="./js/EditBlog.js"></script>
<style scoped>
#edit-blog{
    box-sizing: border-box;
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
.submitButton{
    color: white;
    padding: 10px;
    margin-top:20px;
    background-color: rgb(42, 43, 44);
    border: 2px solid white;
    border-radius: 5px;
}

</style>
