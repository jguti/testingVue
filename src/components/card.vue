<template>
  <div>
    <input v-bind="dataToTopbar" placeholder="">
    <!--<span>{{prot}}</span>-->
  </div>

</template>


<script>
  import eventHub from '../events/hub.js'

//  it works:
//  let dataToTopbar = 'initttttt'
//  eventHub.$emit('update', dataToTopbar)

  export default {
    name: 'card',
    props: ['prot'],
//    data: {
//      dataToTopbar: 'init'
//    },
    computed: {
      dataToTopbar: function () {
        console.log('computed')
        console.log(this)
        return eventHub.$emit('update', this)
      }
    }
  }

</script>
