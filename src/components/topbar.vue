<template>
  <div>
    <span>{{dataFromCard}}</span>
    <br>
  </div>

</template>


<script>
  import eventHub from '../events/hub.js'

  let dataFromCard

  eventHub.$on('update', function (data) {
    console.log(data)
    dataFromCard = data
  })

  export default {
    name: 'topbar',
    data () {
      return {
        dataFromCard: dataFromCard
      }
    }
  }

</script>
