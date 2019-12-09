<template>
  <div>
    INDEX
  </div>
</template>

<script>
export default {
  async asyncData ({ app, query, req, params }) {
    const { data } = await app.$axios({
      url: `http://localhost:3000/api/surveys/${params.id}`,
    })
    return { survey: data }
  }
}
</script>

<style>

</style>