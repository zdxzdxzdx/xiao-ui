<template>
    <div>
    <div class="topnavAndBanner">
        <Topnav/>
        <div class="banner">
            <h1>Xiao-UI</h1>
            <h2>基于Vue3的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com/zdxzdxzdx/xiao-ui">GitHub</a>
                <Router-link to="/doc">开始</Router-link>
            </p>
        </div>
    </div>
        <div class="feature">
            <ul>
                <li>
               <svg  >
                   <use xlink:href="#icon-Vue"></use>
               </svg>
               <h3>基于Vue 3</h3>
               <p>使用了Vue3 Composition API</p>
           </li>
            <li>
            <svg >
                <use xlink:href="#icon-ts"></use>
            </svg>
                <h3>基于Typescript</h3>
                <p>源代码采用TypeScript书写</p>
            </li>
            <li>
            <svg  >
                <use xlink:href="#icon-light"></use>
            </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都及其简单</p>
            </li>
            </ul>
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

  $font-color:#474e87;
  $button-background: #0355ff;
  $border-radius: 50px;

    .topnavAndBanner {
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,249,247,1) 40%, rgba(251,240,238,1) 100%);
        /*border-bottom-left-radius: 50% 40px;*/
        /*border-bottom-right-radius: 50% 40px;*/
        clip-path: ellipse(80% 60% at 50% 40%);
    }
  .feature{
      //
      margin: 64px auto;
      padding: 0 16px;
      @media (min-width: 800px) {
          width: 800px;
          >ul{
              >li{
                  width: 50%;
              }
          }
      }
      @media (min-width: 1200px) {
          >ul{
              >li{
                  width: 33.3333%;
              }
          }
          width: 1200px;
      }
      >ul {
          display: flex;
          flex-wrap: wrap;
          >li {
              margin: 16px 0;
              display: grid;
              justify-content: start;
              align-content: space-between;
              grid-template-areas:
                      "icon title"
                      "icon text";
              grid-template-columns: 80px auto;
              grid-template-rows: 1fr auto;
              >svg {
                  grid-area: icon;
                  width: 64px;
                  height: 64px;
              }
              >h3 {
                  grid-area: title;
                  font-size: 28px;
              }
              >p {
                  grid-area: text
              }
          }
      }
  }
    .banner{
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: $font-color;
          > .actions{
             padding: 8px 0;
             a {
                 margin:0 8px;
                 background:  #fff;
                 display: inline-block;
                 border-radius: $border-radius;
                 padding: 8px 24px;
                 color: #617193;
                 :hover {
                     text-decoration: none;
                 }
             }
         }
    }

</style>