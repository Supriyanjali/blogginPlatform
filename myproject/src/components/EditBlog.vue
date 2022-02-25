<template>
<main id="edit-blog">
<h1>Edit Blog</h1>
    <form>
        <div class="title">
            <label for="titleName" >Title of Blog <span>*</span></label>
            <textarea type="text" id="titleName" v-model="blog.title" />
        </div>
        <div class="description">
            <label for="desc">Description <span>*</span></label>
            <textarea rows="10" type="text" v-model="blog.description" id="desc"/>
        </div>
        <button class="submitButton" v-on:click.prevent="editingBlog">
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
span{
    color:red;
}
@media (max-width: 800px) {
#edit-blog{
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
