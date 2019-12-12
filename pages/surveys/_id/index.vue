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
        <div>
          수정하기
        </div>
        <div>
          질문지 보기
        </div>
      </div>
    </div>
    <div class="dates flex flex-wrap -mx-2 mb-8 overflow-hidden p-4">
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 overflow-hidden mb-2">
        <div class="text-xl font-bold mb-2">질문 수</div>
        <div class="text-3xl" v-if="survey.questions">{{ survey.questions.length }}</div>
        <div class="text-3xl" v-else>0</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 overflow-hidden mb-2">
        <div class="text-xl font-bold mb-2">참여자 수 </div>
        <div class="text-3xl" v-if="survey.participantsCount">{{ survey.participantsCount }}</div>
        <div class="text-3xl" v-else>0</div>
      </div>
    </div>
    <div class="dates flex flex-wrap -mx-2 mb-8 overflow-hidden p-4">
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">만든 날짜</div>
        <div>{{ survey.createdAt }}</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">최근 변경 날짜</div>
        <div>{{ survey.updatedAt }}</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">공개일</div>
        <div v-if="survey.published">{{ survey.publishedAt }}</div>
        <div v-else>미지정</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">시작일</div>
        <div v-if="survey.startAt">{{ survey.startAt }}</div>
        <div v-else>미지정</div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-2 overflow-hidden mb-8">
        <div class="text-gray-700 font-bold mb-2">종료일</div>
        <div v-if="survey.endAt">{{ survey.endAt }}</div>
        <div v-else>미지정</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, query, req, params }) {
    const { data: survey } = await app.$axios({
      url: `/surveys/${params.id}`,
    })
    return { survey }
  }
}
</script>

<style>

</style>