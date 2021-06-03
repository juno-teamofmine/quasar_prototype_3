<template>
  <q-page class="flex flex-center">
    test
    {{ $route.params }}
    {{ state.detail }}
  </q-page>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance, toRefs } from 'vue';

export default defineComponent({
  name: 'CoinDetail',
  beforeRouteUpdate :  (to, from, next) => {
    console.log('to =>', JSON.stringify(to, undefined, 2));
    console.log('from =>', JSON.stringify(from, undefined, 2));
    // react to route changes...
    // don't forget to call next()
  },
  setup(props) {
    console.log('setup');

    // const { id, title, path } = toRefs(props);
    const { proxy } = getCurrentInstance();
    const state = reactive({
      detail: null,
      props,
    })
      
    const getDetail = async () => {
      // const params = proxy.$route.params;
      // console.log('prams =>', JSON.stringify(prams, undefined, 2));
      // console.log('id =>', JSON.stringify(id, undefined, 2));
      const id = proxy.$route.params.id;
      console.log('id =>', JSON.stringify(id, undefined, 2));
      let targetUrl = `https://api.coingecko.com/api/v3/coins/${id}`;
      const { data } = await proxy.$axios.get(targetUrl, {});
      state.detail = data;
    }

    getDetail();

    return {
      state,
      getDetail,
    }
  }
})
</script>
