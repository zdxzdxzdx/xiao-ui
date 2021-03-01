<template>
    <div>
        <Topnav/>
        <div class="content">
            <aside v-if="menuVisible">列表
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main><router-view/>
                主内容</main>
        </div>
    </div>
</template>
<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {inject, Ref} from 'vue';

  export default {
    'components': {Topnav},
    setup() {
      const menuVisible = inject<Ref<boolean>>('menuVisible');
      return {menuVisible};

    }
  };
</script>

<style scoped lang="scss">
    aside {
        background: aliceblue;
        width: 150px;
        padding: 16px;
        > h2 {
            margin-bottom: 4px;
        }

        > ol {
            > li {
                padding: 4px 0;
            }
        }
        @media (max-width: 500px) {
            position: fixed;
            top: 0;
            left: 0;
            padding-top: 70px;
        }

    }

</style>