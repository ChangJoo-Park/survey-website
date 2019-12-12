<template>
  <div class="container mx-auto flex flex-col justify-center items-center" style="height: calc(100vh - 3rem);">
    <form @submit.prevent="submit" class="w-full max-w-xl mb-20">
      <div class="mb-4">
        <div class="text-2xl mb-1"><label for="">새 설문 이름</label></div>
        <input type="text" v-model="survey.title" class="form--input text-xl" required autofocus>
      </div>
      <div class="mb-4">
        <div class="text-2xl mb-1"><label for="">짧은 소개</label></div>
        <input type="text" v-model="survey.description" class="form--input text-xl">
      </div>
      <div class="text-right">
        <input type="submit" value="만들기" class="border rounded border border-gray-900 bg-gray-900 text-gray-100 py-2 px-4 hover:shadow cursor-pointer text-xl">
      </div>
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
        published: false
      }
    }
  },
  methods: {
    submit () {
      this.$axios({
        url: '/surveys',
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