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
      url: `/surveys/${params.id}`,
    })
    const { data: participants } = await app.$axios({
      url: `/surveys/${params.id}/participate`,
    })
    return { survey: data, participants }
  },
  data () {
    socket: null
  },
  mounted () {
    Notification.requestPermission(function (status) {
      // This allows to use Notification.permission with Chrome/Safari
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    })

    this.socket = this.$nuxtSocket({ reconnection: false })
    this.socket.on('test', (payload) => {
      console.log('test => ', payload)
    })

    this.socket.on(`someone-take-a-survey/${this.survey._id}`, ({ sender, event, payload }) => {
      this.$axios({ url: `/surveys/${this.survey._id}/participate` })
      .then(({data: participants }) => {
        this.participants = participants
      })
      const notification = new Notification('새로운 참여가 있습니다.')
    })
  },
  beforeDestroy() {
    this.socket.close()
    this.socket = null
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