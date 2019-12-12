<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="postcss">
:root {
  /* from https://design.firefox.com/photon/motion/duration-and-easing.html */
  --transition-timing: 0.4s cubic-bezier(.07,.95,0,1);
}

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

.search--input {
  @apply w-full border rounded border-gray-500 px-2 py-1 outline-none;
}

/* .form-input {
  @apply w-full border rounded border-gray-500 p-2 outline-none;
}

.form-input:focus, .form-input:hover, .search--input:hover, .search--input:focus {
  @apply border-gray-900;
} */

.form--button {
  @apply border rounded-sm border border-gray-900 bg-gray-900 text-gray-100 py-2 px-4 cursor-pointer;
  transition: transform var(--transition-timing), background var(--transition-timing), color var(--transition-timing), box-shadow var(--transition-timing) 0.1s;
}

.form--button:hover {
  @apply text-gray-900 bg-gray-100 shadow-md;
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0 0 #000000;
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

.nav--link:hover {
  @apply font-bold underline;
}

.nav--link.nuxt-link-exact-active {
  @apply font-bold text-white underline;
}

.subnav--link {
  @apply py-1 px-2 cursor-pointer;
}

.subnav--link:hover {
  @apply underline;
}
.subnav--link.nuxt-link-exact-active {
  @apply font-bold underline;
}

.app--landing {
  &.nav--link {
    @apply font-mono text-gray-900 px-2 py-2;
  }

  &.nav--link:hover {
    @apply font-bold underline;
  }

  &.nav--link.nuxt-link-exact-active {
    @apply font-bold text-gray-100;
  }
}

.block--item {
  @apply border border-gray-600 rounded px-4 py-2 cursor-pointer mb-2;
  transition: all var(--transition-timing);
}

.block--item:hover {
  @apply bg-gray-600 text-gray-100;
}

.card--item {
  @apply rounded border border-gray-300 shadow-md mb-2;
  transition: all var(--transition-timing);
}

.card--item:hover {
  @apply shadow-md bg-indigo-600 text-gray-100 border-indigo-600;
}

.card--link {
  @apply text-sm;
}

.card--link:hover {
  @apply underline;
}
</style>
