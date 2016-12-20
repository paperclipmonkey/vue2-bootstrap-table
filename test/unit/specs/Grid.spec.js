import Vue from 'vue'
import Component from 'src/Grid'

describe('Grid.vue', () => {
  it('should render header row with uppercase contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Component, {
        domProps: {
          data: [{'a': 11}], columns: [{'title': 'myTitle', 'path': 'a'}], filterKey: ''
        }
      })
    })
    expect(vm.$el.querySelector('.table').textContent)
      .to.contain('MyTitle') // Title has been uppercased
  })

  it('should limit the number of results by search', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Component, {
        domProps: {
          data: [{'a': '11'}, {'a': '12'}], columns: [{'title': 'myTitle', 'path': 'a'}], filterKey: '11'
        }
      })
    })
    expect(vm.$el.querySelector('th').count)
      .to.equal(1) // Title has been uppercased
  })
})
