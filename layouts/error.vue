<template>
  <div class="container px-4">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
