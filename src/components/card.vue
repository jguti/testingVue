<template>
  <div>
    <input v-model="dataToTopbar" placeholder="">
    <!--<span>{{prot}}</span>-->
  </div>

</template>


<script>
  import eventHub from '../events/hub.js'

//  let dataToTopbar = 'init'
//  eventHub.$emit('update', dataToTopbar)

  export default {
    name: 'card',
    props: ['prot'],
//    data () {
//      return {
//        dataToTopbar: 'init'
//      }
//    },
    computed: {
      dataToTopbar: function () {
        return eventHub.$emit('update', this)
      }
    }
  }

</script>
