<template>
  <nuxt-link tag="div" :to="{ name: 'surveys-id', params: { id: survey._id } }" class="card--item py-2">
    <div class="px-4">
      <div class="font-bold text-xl">{{ survey.title }}</div>
      <div class="">{{ survey.description }}</div>
    </div>
    <div class="px-4 text-sm">
      <span v-if="survey.questions">
        질문 <animated-number
          :value="survey.questions.length"
          :formatValue="(value) => value.toFixed(0)"
          :duration="300"
          class="text-lg"
        />개
      </span>
      <span v-else>질문 없음</span>
      /
      <span v-if="survey.participantsCount">
        참여
        <animated-number
          :value="survey.participantsCount"
          :formatValue="(value) => value.toFixed(0)"
          :duration="300"
          class="text-lg"
        />회
      </span>
      <span v-else>참여 없음</span>
    </div>
    <div class="px-4">
      <span class="font-mono text-xs">{{ createdAt }}</span>
    </div>
    <div class="px-4">
      <span class="font-mono text-xs">{{ survey.publishedAt }}</span>
    </div>
  </nuxt-link>
</template>

<script>
import { format, parseISO, getUnixTime } from 'date-fns'
import { ko } from 'date-fns/locale'
import AnimatedNumber from "animated-number-vue"

export default {
  components: {
    AnimatedNumber
  },
  props: {
    survey: {
      type: Object
    }
  },
  computed: {
    createdAt () {
      if (!this.survey || !this.survey.createdAt) {
        return ''
      }
      return format(parseISO(this.survey.createdAt), 'P p', { locale: ko })
    },
    updatedAt () {
      if (!this.survey || !this.survey.updatedAt) {
        return ''
      }

      return format(parseISO(this.survey.updatedAt), 'P p', { locale: ko })
    },
  }
}
</script>

<style>

</style>