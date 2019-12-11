const WIDGET_TYPE = {
  status: require('./status.vue').default
}

export default {
  name: 'Widget',
  render: function (createElement) {
    return createElement(WIDGET_TYPE[this.$attrs.type], {
      props: {
        item: this.$attrs.item
      }
    })
  }
}
