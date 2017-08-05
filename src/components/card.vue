<template>
  <div>
    <input v-model="dataToTopbar" placeholder="">
  </div>

</template>


<script>
  import eventHub from '../events/hub.js'

  export default {
    name: 'card',
    props: ['prot'],
    data () {
      return {
        dataToTopbar: 'init'
      }
    },
    created: function () {
      console.log('send ' + this.dataToTopbar)
      return eventHub.$emit('update', this.dataToTopbar)
    },
    watch: {
      dataToTopbar: function () {
        return eventHub.$emit('update', this.dataToTopbar)
      }
    }
  }

</script>
