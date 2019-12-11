<template>
  <div class="max-w-3xl mx-auto">
    <header class="mb-4">
      <h1 class="text-2xl font-bold">{{ survey.title }}</h1>
      <p class="mb-2">{{ survey.description }}</p>
    </header>
    <div>
      <table class="w-full mb-4">
        <thead>
          <tr>
            <th class="w-16">_id</th>
            <th v-for="q in questions" :key="q._id">
              {{ q.question }}
            </th>
            <th>actions</th>
          </tr>
        </thead>
        <!-- Body -->
        <tbody>
          <tr v-for="item in participants.rows" :key="item._id" class="border-b border-black hover:bg-gray-900 hover:text-gray-100">
            <td class="w-16 py-2 pl-2">{{ item._id }}</td>
            <td v-for="(answer, index) in item.answers" :key="index" class="py-2">
              {{ answer.value }}
            </td>
            <td class="text-center pr-2">
              <button>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="py-2 text-right">
        <div class="mb-2">
          <button v-for="page in participants.totalPages" :key="page" class="inline-block px-4 py-2 border border-black hover:bg-black hover:text-white rounded mr-2 cursor-pointer">
            {{ page }}
          </button>
        </div>
        <div class="font-mono">총 참여자 {{ participants.total }} 명</div>
      </div>
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

    return { survey: data, participants, questions: data.questions }
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

    this.socket = this.$nuxtSocket({ reconnection: true })

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