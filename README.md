#Vue2-Bootstrap-Table

A simple VueJS 2.0 table component using Bootstrap styles

CSS relies on a parent supplying styles

All JS is written in Vue, with no external dependancies

##Features:
* Filtering on all keys
* Pagination
* Sorting and reverse sorting on any key
* Optional custom renderers for individual columns
* Path keys for columns. Specify path using lodash _.get function. Eg: 'obj.obj.obj[0].prop'

##Demo
to try out the demo install the node modules dev dependencies with
```npm install```
and build the code with
```npm run build```

##Usage
from a Vue webpack project

```js
import grid from 'vue2-bootstrap-table'
```

expose it as a component in your .vue file

```js
    ...,
    components: {
      grid: grid
    },
    ...
```

and use it in as a custom html element

```html
        <grid
          :data="tableData"
          :columns="headers"
          :rowsPerPage="2"
          @clickRow="rowClick"
          :filter-key="searchQuery">
        </grid>
```
