<template>
  <div class="container mx-auto">
    <div class="mb-4">
      <h1 class="text-2xl font-bold">{{ survey.title }}</h1>
      <p>{{ survey.description }}</p>
      총 참여자 {{ participants.total }} 명
    </div>
    <div>
      <ul>
        <li v-for="item in participants.rows" :key="item._id" class="border px-4 py-2 mb-4">
          {{ item._id }}
          <div v-for="(answer, index) in item.answers" :key="index">
            {{ findQuestionById(answer._id).question }} => {{ answer.value }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, query, req, params }) {
    const { data } = await app.$axios({
      url: `http://localhost:3000/api/surveys/${params.id}`,
    })
    const { data: participants } = await app.$axios({
      url: `http://localhost:3000/api/surveys/${params.id}/participate`,
    })
    return { survey: data, participants }
  },
  methods: {
    findQuestionById(id) {
      return this.survey.questions[this.survey.questions.findIndex((q) => q._id === id)]
    }
  }
}
</script>

<style>

</style>