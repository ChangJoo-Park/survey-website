<template>
  <div class="container mx-auto max-w-xl">
    <div class="header flex mb-8 p-4">
      <div class="flex-1">
        <div class="font-bold text-4xl">
          {{ survey.title }}
        </div>
        <p class="text-gray-700">{{ survey.description }}</p>
      </div>
      <div>
        <div v-if="survey.finished">
          강제 종료됨
        </div>
      </div>
    </div>
    <div class="dates flex flex-wrap -mx-2 mb-8 overflow-hidden p-4">
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 overflow-hidden mb-2">
        <div class="text-xl font-bold mb-2">질문 수</div>
        <div class="text-3xl" v-if="survey.questions">
          <animated-number
            :value="survey.questions.length"
            :formatValue="(value) => value.toFixed(0)"
            :duration="300"
          />
        </div>
        <div class="text-3xl" v-else>0</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 overflow-hidden mb-2">
        <div class="text-xl font-bold mb-2">참여자 수 </div>
        <div class="text-3xl" v-if="survey.participantsCount">
          <animated-number
            :value="survey.participantsCount"
            :formatValue="(value) => value.toFixed(0)"
            :duration="300"
          />
        </div>
        <div class="text-3xl" v-else>0</div>
      </div>
    </div>
    <div class="dates flex flex-wrap -mx-2 mb-8 overflow-hidden p-4">
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">만든 날짜</div>
        <div>{{ formatDate(survey.createdAt) }}</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">최근 변경 날짜</div>
        <div>{{ formatDate(survey.updatedAt) }}</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">공개일</div>
        <div v-if="survey.published">{{ formatDate(survey.publishedAt) }}</div>
        <div v-else>미지정</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">시작일</div>
        <div v-if="survey.startAt">{{ formatDate(survey.startAt) }}</div>
        <div v-else>미지정</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">종료일</div>
        <div v-if="survey.endAt">{{ formatDate(survey.endAt) }}</div>
        <div v-else>미지정</div>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import getUnixTime from 'date-fns/getUnixTime'
import ko from 'date-fns/locale/ko'
import AnimatedNumber from "animated-number-vue"

export default {
  components: {
    AnimatedNumber
  },
  async asyncData ({ app, query, req, params }) {
    const { data: survey } = await app.$axios({
      url: `/surveys/${params.id}`,
    })
    return { survey }
  },
  methods: {
    formatDate (date) {
      return format(parseISO(date), 'P p', { locale: ko })
    }
  }
}
</script>

<style>

</style>