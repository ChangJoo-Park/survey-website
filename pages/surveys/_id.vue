<template>
  <div>
    <div>
      <nuxt-link :to="{ name: 'surveys-id', params: { id: $route.params.id }}">INDEX</nuxt-link>
      <nuxt-link :to="{ name: 'surveys-id-edit', params: { id: $route.params.id }}">EDIT</nuxt-link>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>