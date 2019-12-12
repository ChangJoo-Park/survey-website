<template>
  <div class="container mx-auto mt-8 flex">
    <aside class="p-4 mr-4" style="min-width: 200px;">
      <nav class="">
        <ul>
          <nuxt-link
            tag="li"
            :to="{ name: 'surveys-id', params: { id: $route.params.id }}"
            class="subnav--link text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >통계</nuxt-link>
          <nuxt-link
            tag="li"
            :to="{ name: 'surveys-id-participations', params: { id: $route.params.id }}"
            class="subnav--link text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >참여목록</nuxt-link>
          <nuxt-link
            tag="li"
            :to="{ name: 'surveys-id-share', params: { id: $route.params.id }}"
            class="subnav--link text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >공유하기</nuxt-link>
          <nuxt-link
            tag="li"
            :to="{ name: 'surveys-id-edit', params: { id: $route.params.id }}"
            class="subnav--link text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >수정하기</nuxt-link>
        </ul>
      </nav>
    </aside>
    <main class="flex-1">
      <nuxt-child />
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>