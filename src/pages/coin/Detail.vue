<template>
  <q-page class="flex flex-center">
      <q-ajax-bar
        ref="ajaxBar"
        position="bottom"
        color="accent"
        size="10px"
        skip-hijack
      />
      <q-btn color="primary" label="refresh" @click="refresh" />
    <q-btn color="primary" label="list" @click="back" />
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
          test
          {{ $route.params }}
          <h1><img :src="state.detail.image.large">{{ state.detail.name }}</h1>
          <span v-html="state.detail.description.ko"></span>
        <hr>
        <div>
          {{ coinInfo.description.ko }}
        </div>
      </div>
  </q-page>
</template>

<script>
import { computed, defineComponent, reactive, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'CoinDetail',
  setup(props) {
    console.log('setup');
    const store = useStore();
    const coinInfo = computed(() => store.getters["Coin/coin"]);

    const { proxy } = getCurrentInstance();
    const state = reactive({
      ready: false,
      detail: {
        name: null,
        image: {
          thumb: null,
          small: null,
          large: null,
        },
        description: {
          ko: null,
        }
      },
    });

    const getDetail = async () => {
      state.ready = false;
      const { id } = proxy.$route.params;
      const { data } = await proxy.$CoinApi.getDetail(id);
      state.detail = data;
      store.commit("Coin/setCoin",  data)
      state.ready = true;
    };

    getDetail();


    return {
      state,
      getDetail,
      coinInfo,
    }
  },
  methods: {
    async refresh() {
      this.$refs.ajaxBar.start();

      await this.getDetail();

      if (this.$refs.ajaxBar)
        this.$refs.ajaxBar.stop();
    },
    back() {
      this.$router.back();
    }
  }
})
</script>
