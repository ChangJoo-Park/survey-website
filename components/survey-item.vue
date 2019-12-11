<template>
  <div class="card--item">
    <div class="px-4 py-2">
      <div class="font-bold text-xl">{{ survey.title }}</div>
      <div class="">{{ survey.description }}</div>
    </div>
    <div class="px-4 text-sm">
      <span v-if="survey.questions">
        질문 {{ survey.questions.length }}개
      </span>
      <span v-else>질문 없음</span>
      /
      <span v-if="survey.participantsCount">
        참여
        <animated-number
          :value="survey.participantsCount"
          :formatValue="(value) => value.toFixed(0)"
          :duration="300"
          class="text-6xl"
        />회
      </span>
      <span v-else>참여 없음</span>
    </div>
    <div class="px-4">
      <span class="font-mono text-xs">{{ createdAt }}</span>
    </div>
    <hr class="border-gray-900">
    <div class="px-4 py-2 flex items-stretch">
      <nuxt-link :to="{ name: 'surveys-id', params: { id: survey._id } }" class="card--link flex-1 text-left">자세히 보기</nuxt-link>
      &nbsp;
      <nuxt-link :to="{ name: 'take-id', params: { id: survey._id } }" class="card--link flex-1 text-right" target="_blank">
        설문지 보기
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { format, parseISO, getUnixTime } from 'date-fns'
import { ko } from 'date-fns/locale'
import AnimatedNumber from "animated-number-vue"

export default {
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