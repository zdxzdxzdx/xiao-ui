<template>
    <div class="Topaddbanner">
        <Topnav/>
        <div class="banner">
            <h1>轱辘UI</h1>
            <h2>一个厉害的 UI 框架</h2>
            <p class="actions">
                <a href="https://www.baidu.com/?tn=49055317_4_hao_pg">GitHub</a>
                <Router-link to="/doc">开始</Router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';

  export default {
    'components': {Topnav}
  }
</script>

<style scoped lang="scss">
    .Topaddbanner {
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,249,247,1) 40%, rgba(251,240,238,1) 100%);

    }
    .banner{
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /*background: lightblue;*/
          > .actions{
             padding: 8px 0;
             a {
                 margin:0 8px;
                 background: #fff;
                 display: inline-block;
                 $h: 28px;
                 height: $h;
                 line-height: $h;
                 border-radius: $h/2;
                 padding: 0 8px;
             }
         }
    }

</style>