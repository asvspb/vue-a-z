<template>
    <div class="wrapper">
      <PostForm
          @createPostEmiter="createPost"/>
      <PostList
          :posts="posts"
          @deletePostEmiter="deletePost" />
    </div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue'

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        {
          id: 1, title: 'Изучить vue', description: 'Регулярно програмировать', likes: 0,
        },
        {
          id: 2, title: 'Написать свое приложение', description: 'Которое будет нужно людям', likes: 0,
        },
      ],
      title: '',
      description: '',
    }
  },
  methods: {
    createPost(post) {
      this.posts.push({
          id: post.id,
          title: post.title,
          description: post.description,
        })
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id)
    },
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

</style>
