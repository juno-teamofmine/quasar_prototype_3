<template>
  <q-page class="flex flex-center">
    <ul>
      <li v-for="item in state.list" :key="item.id">
        <div @click="goDetail(item);">
          {{ item }}
        </div>
      </li>
    </ul>
  </q-page>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'CoinList',
  setup() {
    console.log('setup');
    const { proxy } = getCurrentInstance();
    const state = reactive({
      list: [],
    })

    const getList = async () => {
      const targetUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
      const res = await proxy.$axios.get(targetUrl, {});
      state.list = res.data;
    };
      
    const goDetail = (item) => {
      console.log('goDetail');
      proxy.$router.push({ name: 'CoinDetail', params: { id, title, path }});
    }

    getList();

    return {
      state,
      getList,
      // goDetail,
    }
  }
})
</script>
