<template>
  <div>
    <post :post="post"></post>
    <router-link to="/posts">
      <a
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Back to all posts
      </a>
    </router-link>
    <client-only>
      <v-select
        :options="['Canada', 'United States']"
        placeholder="select a country"
      ></v-select>
    </client-only>
  </div>
</template>

<script>
import axios from 'axios'
import Post from '@/components/Post'
export default {
  components: {
    Post
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      )
      return { post: data }
    } catch (e) {
      error({
        statusCode: e.response.status
      })
    }
  },
  data() {
    return {
      post: []
    }
  },
  head() {
    return {
      title: this.post.title,
      hid: this.post.id,
      name: 'blog post',
      content: this.post.body
    }
  }
}
</script>
