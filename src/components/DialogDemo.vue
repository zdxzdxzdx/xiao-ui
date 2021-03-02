<template>
    <div>Dialog示例</div>
       <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :close-on-click-overly="false"
    :ok="f1" :cancel="f2" title="警告">
        <div>ni</div>
        <div>hao</div>
    </Dialog>
</template>

<script lang="ts">
    import  Dialog  from '../lib/Dialog.vue'
    import Button from '../lib/Button.vue';
    import {ref} from 'vue'
  export default{
    components:{
      Button,
      Dialog
    },
    setup(){
      const x= ref(false);
       const toggle= ()=>{
           x.value=!x.value
       }
       const f1 = ()=>{
         return false
       }
       const f2 = ()=>{}
      return {x,toggle,f1,f2}
    }

  }
</script>

<style scoped lang="scss">

</style>