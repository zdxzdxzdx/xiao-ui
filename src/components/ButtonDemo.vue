<template>
    <div> Button示例</div>
    <h1>示例1</h1>
    <div>
        <Button @click="onClick">你好</Button>
       <Button theme = "button">button</Button>
       <Button theme = "link">link</Button>
       <Button theme = "text">text</Button>
    </div>
    <h1>示例2</h1>
    <div>
        <Button size="big">大大</Button>
        <Button>普普通通</Button>
        <Button size="small">小小</Button>
    </div>
    <div>
        <Button theme="link" size="big">大大</Button>
        <Button theme="link">普普通通</Button>
        <Button size="small" theme="link">小小</Button>
    </div>

    <div>
        <Button size="big" theme="text">大大</Button>
        <Button theme="text">普普通通</Button>
        <Button size="small" theme="text">小小</Button>
    </div>

    <h1>示例3</h1>
    <div>
    <Button level="main">主要按钮</Button>
    <Button >普通按钮</Button>
    <Button level="danger">主要按钮</Button>
    </div>

    <div>
        <Button theme="link" level="main">主要按钮</Button>
        <Button theme="link">普通按钮</Button>
        <Button theme="link" level="danger">主要按钮</Button>
    </div>
    <div>
        <Button  theme="text" level="main">主要按钮</Button>
        <Button  theme="text" >普通按钮</Button>
        <Button  theme="text" level="danger">主要按钮</Button>
    </div>
    <h1>示例4</h1>
    <div>
        <Button disable>禁用按钮</Button>
        <Button theme="link" disable >禁用链接按钮</Button>
        <Button theme="text" disable>禁用按钮</Button>
    </div>
    <h1>示例5</h1>
    <div>
        <Button loading>加载中</Button>
        <Button >加载完毕</Button>
    </div>

</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default{
    components:{
      Button
    },
      setup(){
      const onClick = ()=>{
        console.log('hi');
      }
      return {onClick};
      }
  }
</script>

<style scoped lang="scss">

</style>