<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="postcss">
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.form--label {
  @apply text-xl;
}

.form--group {
  @apply mb-4;
}

.form--input {
  @apply w-full border rounded p-2 border-gray-700 text-xl;
}

.form--button {
  @apply border rounded border border-gray-900 bg-gray-900 text-gray-100 py-2 px-4 cursor-pointer text-xl;
}

.form--title {
  @apply text-3xl mb-4 text-center font-bold;
}

.form--link {
  @apply font-mono;
}
.form--link:hover, .form--link:focus {
  @apply underline;
}

.nav--link {
  @apply font-mono text-gray-100 px-2 py-2;
}

.nav--link.nuxt-link-exact-active {
  @apply font-bold text-white;
}
</style>
