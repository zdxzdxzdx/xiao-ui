<template>
    <div>
        <component v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
</template>

<script lang="ts">

  import Tab from './Tab.vue';
  export default {
    setup(props,context){
      const defaults = context.slots.default()
      console.log(defaults)
      console.log(defaults[0].type=== Tab)
      defaults.forEach((tag)=>{
        if (tag.type!==Tab){
          throw new Error('Tabs子标签必须是Tab')
        }
      })
      const titles= defaults.map((tag)=>{
        return tag.props.title
      })

      return {defaults,titles}
    }

  }

</script>


<style scoped lang="scss">

</style>