<template>
    <div>
        <div>
            <h1>Switch 组件示例 </h1>
            <Demo :component="Switch1Demo"/>
            <Demo :component="Switch2Demo"/>
        </div>
        <div>下一节:<a href="#/doc/button">    Button组件</a></div>
    </div>
</template>

<script lang="ts">

    import { ref } from 'vue'
    import Switch1Demo from './Switch1.demo.vue'
    import Switch2Demo from './Switch2.demo.vue'
    import Demo from './Demo.vue';


    export default{
    components:{
      Demo,
    },
    setup(){
      const bool=ref(false)
      return {bool,Switch1Demo,Switch2Demo}
    }
  }
</script>

<style scoped lang="scss">
    $border-color: #d9d9d9;
    a{
        color: #0366d6;
    }
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;
        >h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }
        &-component {
            padding: 16px;
        }
        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }
        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            >pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }

</style>