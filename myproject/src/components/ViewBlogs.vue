<template>
    <div  id="show-blogs">
        <h1>All Blogs</h1>
        <input type="text" v-model="search" @keyup.enter="blogsListFxn" placeholder="search blogs"/>
        <div>
        <div>
        <div v-for="blog in blogsListFxn" :key="blog.id" :blog="blog" class="single-blog">
            <h2 v-rainbow>{{ blog.title.toUpperCase()}}</h2>
            <article>{{blog.description}}</article>
            <div class="button">
            <button @click="deletedBlog(blog.id)">Delete</button>
            <button @click="editingBlog(blog)">Edit Blog</button></div>
        </div>
        </div>
        </div>
            </div>
</template>
<script src="./js/ViewBlogs.js"></script>
<style scoped>
#show-blogs{
    max-width: 800px;
    margin:0 auto;
}
.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background:rgb(248, 247, 247);
    border:0.5px solid black;
    border-radius:10px;
    box-shadow: 4px 8px #c7c5c5;
}
input[type="text"]{
    display: block;
    width:50%;
    padding: 10px;
    border-radius: 10px;
}
button{
    margin-top:20px;
    color:white;
    padding:7px;
    margin-left:5px;
    background-color: rgb(78, 73, 73);
    border:none;
    border-radius: 10px;

}
img{
    display: flex;
    margin: auto;
    margin-top: 200px;
}
@media (max-width: 800px) {
 #show-blogs{
   display:flex;
   flex-direction: column;
   align-items: center;
}
.single-blog{
    padding:10px;
    width:250px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 6px #c7c5c5;
    height:fit-content;
}
.button{
    display: inline;
}
}
</style>
