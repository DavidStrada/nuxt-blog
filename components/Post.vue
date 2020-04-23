<template>
  <div class="my-5">
    <h3 class="text-3xl font-semibold leading-snug mb-4">
      <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">
        {{ titleCase(post.title) }}
      </nuxt-link>
    </h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: Object
    }
  },
  methods: {
    titleCase(title) {
      return title.charAt(0).toUpperCase() + title.slice(1)
    }
  }
}
</script>
