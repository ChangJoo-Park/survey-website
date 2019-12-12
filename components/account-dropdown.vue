<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="relative px-2 z-10 block focus:outline-none flex flex-row  items-center focus:border-white">
      <avatar :username="username" :size="35" />&nbsp;
      <span class="text-white">{{ username }}</span>
    </button>
    <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black cursor-default opacity-25"></button>
    <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
      <ul>
        <li v-for="(option, index) in dropdownOptions" :key="index">
          <a
            href="#"
            @click.prevent="goTo(option.to)"
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            v-if="option.type === 'route'"
          >{{ option.label }}</a>
          <a
            href="#"
            @click.prevent="doAction(option.do)"
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            v-if="option.type === 'action'"
          >{{ option.label }}</a>
          <hr v-if="option.type === 'divider'">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar
  },
  props: {
    avatar: {
      type: String,
      required: true,
      default: () => ''
    },
    username: {
      type: String,
      required: true,
      default: () => ''
    },
    dropdownOptions: {
      type: Array
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  mounted () {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }
    document.addEventListener('keydown', handleEscape)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape)
    })
  },
  methods: {
    goTo(to) {
      this.isOpen = false
      this.$router.push(to)
    },
    doAction (action) {
      this.isOpen = false
      if (action) {
        action()
      }
    }
  }
}
</script>
