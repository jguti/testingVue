<template>
  <div>
    <span>{{dataFromCard}}</span>
    <br>
  </div>

</template>


<script>
  import eventHub from '../events/hub.js'

  export default {
    name: 'topbar',
    data () {
      return {
        dataFromCard: null
      }
    },
    created: function () {
      eventHub.$on('update', (data) => {
        this.dataFromCard = data
      })
    },
    mounted () {
      eventHub.$on('update', (data) => {
        this.dataFromCard = data
      })
    }
  }

</script>
