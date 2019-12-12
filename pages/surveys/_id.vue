<template>
  <div class="container mx-auto">
    <div class="py-2 mb-4" style="height: 2rem;">
      <nuxt-link
        :to="{ name: 'surveys-id', params: { id: $route.params.id }}"
        class="subnav--link"
      >통계</nuxt-link>
      <nuxt-link
        :to="{ name: 'surveys-id-participations', params: { id: $route.params.id }}"
        class="subnav--link"
      >참여목록</nuxt-link>
      <nuxt-link
        :to="{ name: 'surveys-id-share', params: { id: $route.params.id }}"
        class="subnav--link"
      >공유하기</nuxt-link>
      <nuxt-link
        :to="{ name: 'surveys-id-edit', params: { id: $route.params.id }}"
        class="subnav--link"
      >수정하기</nuxt-link>
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