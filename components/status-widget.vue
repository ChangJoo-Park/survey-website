<template>
  <div class="dashboard--widget widget--status px-4 py-2 shadow-md rounded-lg flex flex-row" :style="{ flexGrow: flex }">
    <div class="flex-1 flex flex-col">
      <div class="flex-1 mb-2">
        <div class="text-sm text-gray-700">{{ title }}</div>
        <div class="text-gray-900 text-xl font-bold">{{ formatNumber(count, countType) }}</div>
      </div>
      <div class="text-sm text-gray-600">
        {{ percentStatus }} {{ formatNumber(percent, 'percent', 2) }}&nbsp;Since {{ formatDate(date) }}
      </div>
    </div>
    <div>
      <!-- TODO: -->
      <div class="rounded-full border flex items-center justify-center" style="width: 60px; height: 60px;">
        {{ icon }}
      </div>
    </div>
  </div>
</template>

<script>
import formatDistance from 'date-fns/formatDistance'
import addDays from 'date-fns/addDays'

export default {
  props: {
    flex: {
      type: Number,
      default: () => 1
    },
    title: String,
    count: Number,
    countType: {
      type: String,
      default: () => 'decimal'
    },
    percent: Number,
    percentStatus: String,
    date: Date,
    icon: String
  },
  methods: {
    formatNumber(number, style, minimumFractionDigits = 0) {
      return new Intl.NumberFormat((new Intl.NumberFormat()).resolvedOptions().locale, {
        localeMatcher: 'lookup',
        style,
        minimumFractionDigits
      }).format(number);
    },
    formatDate(date, baseDate = new Date()) {
      return formatDistance(date, addDays(baseDate, 3))
    }
  }
}
</script>

<style lang="postcss">
.dashboard--widget {
  @apply shadow rounded p-4 mb-4 mr-4;
}
.dashboard--widget:hover {
  @apply shadow-lg;
}
</style>