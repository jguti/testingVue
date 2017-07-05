<template>
  <div>
    <!--<input v-model="prot" placeholder="">-->
    <span>{{prot}}</span>
  </div>

</template>


<script>
//  const data = {info: 99}
//  this.eventHub.$emit('update', data)

  export default {
    name: 'card',
    props: ['prot']
  }

</script>
