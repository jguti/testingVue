<template>
  <div>
    <input v-model="dataToTopbar" placeholder="">
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
    data () {
      return {
        dataToTopbar: 'init'
      }
    },
    watch: {
      dataToTopbar: function () {
        console.log('computed')
        return eventHub.$emit('update', this.dataToTopbar)
      }
    }
  }

</script>
