<template>
  <div class="container mx-auto">
    <div class="mb-4">
      <nav>
        <ul>
          <nuxt-link class="subnav--link" :to="{ name: 'surveys-id-edit', params: { id: $route.params.id } }">기본정보</nuxt-link>
          <nuxt-link class="subnav--link" :to="{ name: 'surveys-id-edit-questions', params: { id: $route.params.id } }">질문지</nuxt-link>
        </ul>
      </nav>
    </div>
    <nuxt-child />
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
    let useDateLimit = false
    if (data.startAt || data.endAt) {
      useDateLimit = true
    }
    return { survey: data, questions, useDateLimit, startAt: data.startAt, endAt: data.endAt }
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
      const survey = {
        ...this.survey,
        questions: this.questions
      }
      if (this.useDateLimit) {
        survey.startAt = this.startAt
        survey.endAt = this.endAt
      } else {
        survey.startAt = null
        survey.endAt = null
      }
      console.log(survey)
      this.$axios({
        url: `/surveys/${this.survey._id}`,
        method: 'PUT',
        data: { survey }
      })
      .then(response => {
        console.log(response)
      })
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