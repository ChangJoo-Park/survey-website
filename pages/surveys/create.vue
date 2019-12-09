<template>
  <div>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <input type="text" v-model="survey.title" class="border">
      </div>
      <div class="mb-4">
        <input type="text" v-model="survey.description" class="border">
      </div>
      <input type="submit" value="Submit">
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
        this.$router.push({ name: 'surveys' })
      })
    }
  }
}
</script>

<style>

</style>