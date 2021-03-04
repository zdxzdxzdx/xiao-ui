
<demo>支持disable</demo>
<template>
    <div>
        <Button disable>禁用按钮</Button>
        <Button theme="link" disable >禁用链接按钮</Button>
        <Button theme="text" disable>禁用按钮</Button>
    </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';
  export default{
    components:{
      Button
    }
  }
</script>

<style scoped lang="scss">

</style>