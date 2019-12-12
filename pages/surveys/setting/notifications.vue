<template>
  <div class="container mx-auto max-w-xl">
    <div class="setting--title text-xl font-bold mb-4">
      알림 설정
    </div>
    <div class="setting--section border-b border-b-2 my-8">
      <div class="setting--section--title text-lg font-bold mb-2">
        이메일
      </div>
      <form action="" class="mb-2">
        <label class="block mt-4">
          <span class="text-gray-700">이메일주소</span>
          <input type="text" class="form-input mt-1 block w-full">
        </label>
        <label class="block mt-4">
          <input type="checkbox" class="form-checkbox">
          <span class="text-gray-700">사용여부</span>
        </label>
        <div class="my-2">
          <input type="submit" class="form--button" value="저장">
        </div>
      </form>
    </div>
    <div class="setting--section border-b border-b-2 my-4">
      <div class="setting--section--title text-lg font-bold mb-2">
        Slack
      </div>
      <form action="" class="mb-2">
        <label class="block mt-4">
          <span class="text-gray-700">액세스토큰</span>
          <input type="text" class="form-input mt-1 block w-full">
        </label>
        <label class="block mt-4">
          <span class="text-gray-700">채널이름</span>
          <input type="text" class="form-input mt-1 block w-full">
        </label>
        <label class="block mt-4">
          <input type="checkbox" class="form-checkbox">
          <span class="text-gray-700">사용여부</span>
        </label>
        <div class="my-2">
          <input type="submit" class="form--button" value="저장">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>