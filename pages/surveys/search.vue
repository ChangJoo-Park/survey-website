<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-xl mb-2">총 {{ surveys.length }}개의 설문</h1>
    <ul>
      <li v-for="item in surveys" :key="item._id" class="border-b mb-4">
        <div>
          {{ item.title }}
        </div>
        <div>
          {{ item.description }}
        </div>
        <div>
          {{ item.questions }}
        </div>
        <div>
          {{ item.createdAt }}
        </div>
        <div>
          {{ item.updatedAt }}
        </div>
        <div>
          {{ item.participantsCount }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, query, req, params }) {
    const { term = '' }  = query
    if (term === '') {
      return {
        surveys: [], term
      }
    }

    const { data: surveys } = await app.$axios.get('/me/surveys/search', {params: { term }})
    return {
      surveys, term
    }
  },
  watch: {
    '$route.query.term': {
      async handler (term) {
        if (term === '') {
          return
        }

        const { data: surveys } = await this.$axios.get('/me/surveys/search', {params: { term }})
        this.surveys = surveys
      }
    }
  }
}
</script>

<style>

</style>