<template>
  <div class="container mx-auto mt-8 flex">
    <aside class="px-4 pb-4 mr-4" style="min-width: 200px;">
      <nav class="">
        <ul>
          <nuxt-link
            :to="{ name: 'surveys-id', params: { id: $route.params.id }}"
            class="subnav--link block text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >통계</nuxt-link>
          <nuxt-link
            :to="{ name: 'surveys-id-edit', params: { id: $route.params.id }}"
            class="subnav--link block text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >수정하기</nuxt-link>
          <nuxt-link
            :to="{ name: 'surveys-id-participations', params: { id: $route.params.id }}"
            class="subnav--link block text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >참여목록</nuxt-link>
          <nuxt-link
            :to="{ name: 'surveys-id-share', params: { id: $route.params.id }}"
            class="subnav--link block text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >공유하기</nuxt-link>
          <nuxt-link
            :to="{ name: 'surveys-id-notifications', params: { id: $route.params.id }}"
            class="subnav--link block text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >알림설정</nuxt-link>
          <li class="border-b w-full mb-2"></li>
          <nuxt-link
            :to="{ name: 'take-id', params: { id: $route.params.id }}"
            target="_blank"
            class="subnav--link block text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2"
          >미리보기</nuxt-link>
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