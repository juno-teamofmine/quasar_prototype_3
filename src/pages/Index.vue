<template>
  <q-page class="flex flex-center">
    <ul>
      <li v-for="item in state.list" :key="item.id">
        <div @click="selectMenu(item);">
          {{ item.title }}
        </div>
      </li>
    </ul>
  </q-page>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance } from 'vue';
import { useStore } from "vuex";

export default defineComponent({
  name: 'PageIndex',
  setup() {
    console.log('setup');
    const { proxy } = getCurrentInstance();
    const state = reactive({
      list: [
        {id: 1, title: 'coin', path: 'coin',},
        {id: 2, title: 'sourcing', path: 'sourcing',},
        {id: 3, title: 'another1', path: 'another1',},
        {id: 4, title: 'another2', path: 'another2',},
        {id: 5, title: 'native', path: 'native',},
      ],
    })

    const selectMenu = ({ id, title, path }) => {
      console.log('path =>', JSON.stringify(path, undefined, 2));
      proxy.$router.push({ path: path });
    }

    const clearStore = () => {
      const store = useStore();
      store.commit("Coin/setCoin",  null);
    }

    clearStore();

    return {
      state,
      selectMenu
    }
  }
})
</script>
