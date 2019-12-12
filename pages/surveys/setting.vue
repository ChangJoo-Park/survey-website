<template>
  <div class="container mx-auto mt-8 flex">
    <aside class="p-4 mr-4" style="min-width: 200px;">
      <nav class="">
        <ul>
          <li class="subnav--link text-gray-900 font-bold border-b px-2 mb-2">설정</li>
          <nuxt-link :to="{ name: 'surveys-setting-notifications'}" tag='li' class="subnav--link text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2">알림설정</nuxt-link>
          <nuxt-link :to="{ name: 'surveys-setting-templates'}" tag='li' class="subnav--link text-gray-700 cursor-pointer px-2 hover:underline text-lg mb-2">기본 템플릿 설정</nuxt-link>
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