<template>
  <div class="">
  </div>
</template>

<script>
export default {
  async asyncData ({ app, query, req, params }) {
    const { data: survey } = await app.$axios({
      url: `/surveys/${params.id}`,
    })
    return { survey }
  }
}
</script>

<style>

</style>