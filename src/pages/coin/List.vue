<template>
  <q-btn color="primary" label="home" @click="back" />
  <q-card class="my-card" flat bordered v-if="visitedCoin">
      <q-card-section horizontal>
        <q-card-section>
          {{ visitedCoin.description.ko }}
        </q-card-section>

        <q-img
          class="col-5"
          :src="visitedCoin.image.large"
        />
      </q-card-section>
    </q-card>

  <q-page class="flex flex-center">
    <div v-if="!state.ready">
      <q-circular-progress
        indeterminate
        size="50px"
        :thickness="0.22"
        color="lime"
        track-color="grey-3"
        class="q-ma-md"
      />
    </div>
    <div v-else>
      <ul>
        <li v-for="item in state.list" :key="item.id">
          <div @click="goDetail(item.id);">
            {{ item }}
          </div>
        </li>
      </ul>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance } from 'vue';
import { useStore } from "vuex";

export default defineComponent({
  name: 'CoinList',
  setup() {
    console.log('setup');
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const state = reactive({
      ready: false,
      list: [],
    })

    const visitedCoin = store.getters["Coin/coin"];
    console.log('visitedCoin');
    console.log(visitedCoin);

    const getList = async () => {
      const { data } = await proxy.$CoinApi.getList();
      state.list = data;
      state.ready = true;
    };

    const goDetail = (id) => {
      proxy.$router.push({ name: 'CoinDetail', params: { id }});
    }

    getList();

    return {
      state,
      getList,
      goDetail,
      visitedCoin,
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
})
</script>
