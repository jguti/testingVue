<template>

  <div>
    <!--<topbar v-bind:prop1="prt"></topbar>-->

    <input v-model="prt" placeholder="">
    <!--<span>{{prt}}</span>-->
    <card :prot="prt"></card>

    <!--<input v-model="modelo" placeholder="edit me">-->
    <!--<p>modelo es {{ modelo }}</p>-->

  <!--<span v-bind:title="t">-->
    <!--Hover your mouse over me for a few seconds-->
    <!--to see my dynamically bound title!-->
  <!--</span>-->

  <!--<li v-for="item in items">-->
    <!--{{ item.message }}-->
  <!--</li>-->

  </div>

</template>


<script>
  import topbar from '@/components/topbar'
  import card from '@/components/card'

//  console.log(this.eventHub)

  export default {
    name: 'Test',
    components: {
      'topbar': topbar,
      'card': card
    },
    data () {
      return {
        t: 'You loaded this page on ' + new Date(),
        modelo: '',
        prt: 'hoooola'
      }
    }
  }

</script>
