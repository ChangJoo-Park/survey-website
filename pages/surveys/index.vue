<template>
  <div class="container mx-auto mt-8">
    <widget-row style="min-height: 120px;">
      <status-widget
        title="TRAFFIC"
        :count="350897"
        :percent="0.0348"
        percent-status="up"
        :date="new Date()"
        icon="chart"
      />
      <status-widget
        title="NEW USERS"
        :count="2356"
        :percent="0.0348"
        percent-status="down"
        :date="new Date()"
        icon="pie-chart"
      />
      <status-widget
        title="SALES"
        :count="924"
        :percent="0.010"
        percent-status="down"
        :date="new Date()"
        icon="chart"
      />
      <status-widget
        title="PERFORMANCE"
        :count="0.4965"
        count-type="percent"
        :percent="0.12"
        percent-status="up"
        :date="new Date()"
        icon="chart"
      />
    </widget-row>
    <widget-row style="min-height: 300px;">
    </widget-row>
    <widget-row style="min-height: 300px;">
    </widget-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getUnixTime, parseISO } from 'date-fns'

import StatusWidget from '~/components/status-widget.vue'
import WidgetRow from '~/components/widget-row.vue'
export default {
  components: {
    StatusWidget,
    WidgetRow
  },
  methods: {
  }
}
</script>

<style>

</style>