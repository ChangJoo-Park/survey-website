<template>
  <div class="container mx-auto max-w-3xl">
    <div class="mb-6">
      <div class="mb-2">
        <input type="text" v-model="survey.title" class="form--input text-2xl">
      </div>
      <div class="mb-2">
        <input type="text" v-model="survey.description" class="text-lg form--input">
      </div>
      <label for=""><input type="checkbox" v-model="survey.published">&nbsp;공개</label>
    </div>

    <div class="flex items-stretch w-full">
      <aside id="block-types" class="mr-4">
        <div
          v-for="(type, index) in blockTypes"
          :key="index"
          class="block--item"
          style="min-width: 200px;"
          @click="addBlockWithType(type)"
        >
          {{ type.label }}
        </div>
      </aside>

      <main id="questions" class="flex-1 p-4">
        <div v-if="questions.length === 0" class="w-full h-full flex items-center justify-center">질문이 없습니다.</div>

        <form @submit.prevent="update" v-else>
          <div class="text-right mb-4">
            <input type="submit" value="저장" class="button--grey cursor-pointer">
          </div>
          <draggable
            v-model="questions"
            handle=".drag-handle"
            ghost-class="ghost"
            @change="updated"
          >
            <transition-group>
              <div v-for="(element, index) in questions" :key="index" class="p-2 border mb-2">
                  <div class="mb-2">
                    <div class="mb-2">
                      <span class="drag-handle cursor-pointer">:::</span>
                      <label class="text-xl">{{ element.label }} 질문</label>
                    </div>
                    <input type="text" v-model="element.question" class="form--input" placeholder="질문을 입력하세요" required>
                  </div>
                  <!-- Checkbox -->
                  <template v-if="element.type === 'checkbox'">
                    <div v-for="(option, index) in element.options" :key="index" class="flex justify-between">
                      <label for="" class="flex-1 flex py-2 items-center mr-2">
                        <input type="checkbox" disabled>&nbsp;
                        <input type="text" v-model="option.label" class="flex-1 form--input">
                      </label>
                      <button @click="element.options.splice(index, 1)" class="text-red-600">X</button>
                    </div>
                    <button @click="element.options.push({ value: '', label: ''})">항목 추가</button>
                  </template>
                  <template v-if="element.type === 'radio'">
                    <div v-for="(option, index) in element.options" :key="index" class="flex justify-between">
                      <label for="" class="flex-1 flex py-2 items-center mr-2">
                        <input type="radio" disabled>&nbsp;
                        <input type="text" v-model="option.label" class="flex-1 form--input" required>
                      </label>
                      <button @click="element.options.splice(index, 1)" class="text-red-600">X</button>
                    </div>
                    <div class="text-right">
                      <button
                        @click="element.options.push({ value: false, label: ''})"
                        class="underline"
                      >
                        항목 추가
                      </button>
                    </div>
                  </template>
                  <template v-if="element.type === 'datetime'">
                  </template>
                  <template v-if="element.type === 'date'">
                  </template>
                  <template v-if="element.type === 'time'">
                  </template>
                  <div slot="footer" class="mt-4 text-right">
                    <button @click="questions.splice(index, 1)" class="text-sm">이 질문 삭제</button>
                  </div>
              </div>
            </transition-group>
          </draggable>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import shortid from 'shortid'
export default {
  components: {
    draggable
  },
  async asyncData ({ app, query, req, params }) {
    const { data } = await app.$axios({
      url: `/surveys/${params.id}`,
    })
    const questions = data.questions || []
    return { survey: data, questions }
  },
  data() {
    return {
      blockTypes: [
        {
          type: 'string',
          label: '단답형'
        },
        {
          type: 'text',
          label: '장문형'
        },
        {
          type: 'checkbox',
          label: '체크박스'
        },
        {
          type: 'radio',
          label: '라디오'
        },
        {
          type: 'datetime',
          label: '날짜 & 시간'
        },
        {
          type: 'date',
          label: '날짜'
        },
        {
          type: 'time',
          label: '시간'
        },

      ]
    }
  },
  methods: {
    addBlockWithType(item) {
      this.questions.push({
        _id: shortid.generate(),
        question: '',
        type: item.type,
        label: item.label,
        options: this.getOptionByType(item.type)
      })
    },
    getOptionByType (type) {
      let options

      switch(type) {
        case 'text':
        case 'string':
          options = []
          break;
        case 'checkbox':
          options = [ {
            value: 'A',
            label: '선택 A'
          },{
            value: 'B',
            label: '선택 B'
          },{
            value: 'C',
            label: '선택 C'
          } ]
          break;
        case 'radio':
          options = [ {
            value: false,
            label: '아니오'
          }, {
            value: true,
            label: '예'
          } ]
          break;
      }
      return options
    },
    update () {
      console.log('try update')
      const survey = {
        ...this.survey,
        questions: this.questions
      }
      this.$axios({
        url: `/surveys/${this.survey._id}`,
        method: 'PUT',
        data: { survey }
      })
      .then(response => {
        console.log(response)
      })
    },
    updated () {
      console.log('updated')
    }
  }
}
</script>

<style>
.ghost {
  background-color: white;
  border: 1px solid black;
  opacity: 0.8;
  transition: all 0.2s;
}
</style>