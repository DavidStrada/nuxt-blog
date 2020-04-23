<template>
  <div>
    <h1 id="top" class="text-3xl bg-gray-100 p-3">
      Total {{ pluralize('Post', posts.length) }} : {{ posts.length }}
    </h1>
    <div class="grid grid-cols-3 gap-4">
      <post v-for="(post, key) in posts" :key="key" :post="post"></post>
    </div>
    <button
      v-scroll-to="'#top'"
      type="button"
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      Scroll to Top
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import Post from '@/components/Post'
export default {
  components: {
    Post
  },
  async asyncData() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return { posts: data }
  },
  data() {
    return {
      posts: []
    }
  },
  head() {
    return {
      title: 'Posts'
    }
  },
  layout: 'posts'
}
</script>
