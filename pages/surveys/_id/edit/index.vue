<template>
  <div class="container mx-auto max-w-xl">
    <form class="mb-6" @submit.prevent="update">
      <div class="mb-2">
        <input type="text" v-model="survey.title" class="form-input w-full text-2xl">
      </div>
      <div class="mb-2">
        <input type="text" v-model="survey.description" class="text-lg form-input w-full">
      </div>
      <div class="mb-2">
        <label class="text-gray-700"><input type="checkbox" class="form-checkbox" v-model="survey.published">&nbsp;공개</label> &nbsp;
        <label class="text-gray-700"><input type="checkbox" class="form-checkbox" v-model="useDateLimit">&nbsp;시작/종료일 지정</label>
      </div>
      <div class="mb-2" v-if="useDateLimit">
        <label class="text-gray-700">시작일시 <input type="date" class="form-input" v-model="startAt"></label>&nbsp;
        <label class="text-gray-700">종료일시 <input type="date" class="form-input" v-model="endAt"></label>
      </div>
      <div class="text-right mb-4">
        <input type="submit" value="업데이트" class="form--button cursor-pointer">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, query, req, params }) {
    const { data } = await app.$axios({
      url: `/surveys/${params.id}`,
    })
    const questions = data.questions || []
    let useDateLimit = false
    if (data.startAt || data.endAt) {
      useDateLimit = true
    }
    return { survey: data, questions, useDateLimit, startAt: data.startAt, endAt: data.endAt }
  },
  methods: {
    update () {
      const survey = {
        ...this.survey,
        questions: this.questions
      }
      if (this.useDateLimit) {
        survey.startAt = this.startAt
        survey.endAt = this.endAt
      } else {
        survey.startAt = null
        survey.endAt = null
      }
      console.log(survey)
      this.$axios({
        url: `/surveys/${this.survey._id}`,
        method: 'PUT',
        data: { survey }
      })
      .then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style>

</style>