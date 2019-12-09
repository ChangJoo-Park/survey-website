<template>
  <div class="container mx-auto p-20">
    <div class="mb-4">
      <div class="text-center text-4xl">{{survey.title}}</div>
      <div>{{survey.description}}</div>
    </div>
    <form @submit.prevent="submit" v-if="answers">
      <div
        v-for="(block, index) in survey.questions"
        :key="index"
        class="border rounded p-4 mb-2"
      >
        <div class="text-2xl mb-2">{{ block.question }}</div>
        <template v-if="block.type === 'string'">
          <input type="text" class="w-full border rounded px-4 py-2" v-model="answers[block._id].value">
        </template>
        <template v-if="block.type === 'text'">
          <textarea class="resize-none w-full border rounded px-4 py-2" v-model="answers[block._id].value"></textarea>
        </template>

        <template v-if="block.type === 'radio'">
          <div
            v-for="option in block.options" :key="option.value"
          >
            <label>
              <input
                type="radio"
                :name="block.question" :value="option.label"
                v-model="answers[block._id].value"
              >
              {{ option.label }}
            </label>
          </div>
        </template>

        <template v-if="block.type === 'checkbox'">
          <div
            v-for="option in block.options" :key="option.value"
          >
            <label>
              <input
                type="checkbox"
                :name="block.question" :value="option.label"
                v-model="answers[block._id].value"
              >
              {{ option.label }}
            </label>
          </div>
        </template>
      </div>
      <hr>
      <div class="mt-4 text-right">
        <input type="submit" value="보내기" class="text-lg border rounded px-4 py-2">
      </div>
    </form>
  </div>
</template>

<script>
import UAParser from 'ua-parser-js'

export default {
  async asyncData ({ app, query, req, params }) {
    const { data } = await app.$axios({
      url: `http://localhost:3000/api/surveys/${params.id}`,
    })
    let answers = {}
    data.questions
      .forEach(q => {
        let value
        switch (q.type) {
          case 'string':
          case 'text':
            value = ''
            break;
          case 'checkbox':
          case 'radio':
            value = []
            break;
        }
        answers[q._id] = { value }
      })
    return { survey: data, answers }
  },
  data () {
    return {
      answers: {}
    }
  },
  mounted () {
  },
  methods: {
    submit () {
      const parser = new UAParser()
      const participant = {
        survey: this.survey._id,
        answers: Object.keys(this.answers).map(key => ({ _id: key, value: this.answers[key].value })),
        ua: parser.getUA()
      }
      this.$axios({
        url: `http://localhost:3000/api/surveys/${this.survey._id}/participate`,
        method: 'POST',
        data: { participant }
      })
      .then(response => {
        console.log('succeed')
        console.log(response)
      })
      .catch(e => {
        console.error(e)
      })
    }
  }
}
</script>

<style>

</style>