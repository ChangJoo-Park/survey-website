<template>
  <div>
    <div>
      CPU : {{ cpu }}
    </div>
    <div>
      MEMORY : {{ mem }}
    </div>
    <div>
      OS : {{ os }}
    </div>
    <div>
      PROCESS : {{ process }}
    </div>
    <div>
      TIME : {{ time }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, query, req, params }) {
    const { data } = await app.$axios({
      url: `http://localhost:3000/health`,
    })
    return {
      ...data
    }
  }
}
</script>

<style>

</style>