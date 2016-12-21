<!--
  Usage of a Vue table
-->
<template>
  <main>
  <div class="container">
    <h1>Table demo</h1>
    <input type="text" v-model="searchQuery"/>

    <div class="row">
      <div class="col-sm-12" id="wrapper">
        <grid class="grid"
          :data="tableData"
          :columns="headers"
          :rowsPerPage="2"
          @clickRow="rowClick"
          :filter-key="searchQuery">
        </grid>
      </div>
    </div>

  </div>
</main>
</template>

<script>
  import grid from '../src/Grid.vue'
  export default {
    data () {
      return {
        // Headers to be used in the table
        // Specified as objects with properties
        // 'title' - Displayed title in table header
        // 'path' - js path to look for the object value in the data
        // 'render' - optional rendering function used for each cell in a column
        // 'addClass' - classes string added to the th and td elements of the column
        headers: [
          {
            title: 'published',
            path: 'published',
            render: function (val) {
              return val ? 'yes' : 'no'
            }
          }, {
            title: 'title',
            path: 'title'
          }, {
            title: 'description',
            path: 'description',
            addClass: 'hidden-xs'
          }
        ],
        searchQuery: '', // Search query passed in to the table filtering. Checked in lowercase against the cells
        tableData: [ // Array of objects making up the table data
          {
            published: true,
            title: 'Sort order 1',
            description: 'Sort order 2'
          },
          {
            published: true,
            title: 'Sort order 2',
            description: 'Sort order 1'
          },
          {
            published: true,
            title: 'Sort order 3',
            description: 'Sort order 3'
          },
          {
            published: true,
            title: 'Lorem ipsum',
            description: 'Dolor sit amut'
          },
          {
            published: true,
            title: 'Lorem ipsum 2',
            description: 'Dolor sit amut 2'
          },
          {
            published: true,
            title: 'Lorem ipsum 3',
            description: 'Dolor sit amut 3'
          }
        ]
      }
    },
    methods: {
      // A row in the table has been clicked. Returns Vue data object bound to the row.
      rowClick (ev) {
        let id = decodeURIComponent(ev['@id'])
        let cleanId = id.split('/').pop()
        this.$router.push({name: 'dataset', params: { id: cleanId }})
      }
    },
    components: {
      grid: grid
    }
  }
</script>

<style lang='scss'>
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/" !default;
  @import "~bootstrap-sass/assets/stylesheets/bootstrap";
  .grid   th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
  }
</style>
