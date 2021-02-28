<template>
  <div>
    <router-link to="/">first</router-link>|
    <router-link to="/xxx">demo2</router-link>
  </div>
  <hr/>
   <router-view/>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>
