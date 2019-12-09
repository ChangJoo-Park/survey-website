<template>
  <div class="container mx-auto">
    <form @submit.prevent="submit">
      <div class="mb-4">
        <div><label for="">새 설문 이름</label></div>
        <input type="text" v-model="survey.title" class="border" required>
      </div>
      <div class="mb-4">
        <div><label for="">새 설문 소개</label></div>
        <input type="text" v-model="survey.description" class="border">
      </div>
      <input type="submit" value="만들기">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      survey: {
        title: '',
        description: '',
        public: false
      }
    }
  },
  methods: {
    submit () {
      this.$axios({
        url: 'http://localhost:3000/api/surveys',
        method: 'POST',
        data: {
          survey: this.survey
        }
      })
      .then(response => {
        const { data } = response
        this.$router.push({ name: 'surveys-id-edit', params: { id: data._id } })
      })
    }
  }
}
</script>

<style>

</style>