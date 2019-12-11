<template>
  <div class="container mx-auto">
    <div class="py-2 text-right max-w-3xl mx-auto mb-4" style="height: 2rem;">
      <nuxt-link
        :to="{ name: 'surveys-id', params: { id: $route.params.id }}"
        class="py-1 px-2 underline"
      >
        통계
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'surveys-id-participations', params: { id: $route.params.id }}"
        class="py-1 px-2 underline"
      >
        참여목록</nuxt-link>
      &nbsp;
      <nuxt-link
        :to="{ name: 'surveys-id-edit', params: { id: $route.params.id }}"
        class="py-1 px-2 underline"
      >
        수정하기
      </nuxt-link>
    </div>
    <div>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>