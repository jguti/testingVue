<template>
  <div>
    <span>{{dataFromCard}}</span>
    <br>
  </div>

</template>


<script>
  import eventHub from '../events/hub.js'

  let aux

  eventHub.$on('update', function (data) {
    console.log('dfdsf', data)
    aux = data
  })

  export default {
    name: 'topbar',
    data () {
      return {
        dataFromCard: aux
      }
    }
  }

</script>
