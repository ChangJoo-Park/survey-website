<template>
  <div class="container mx-auto">
    {{ loggedInUser }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>

<style>

</style>