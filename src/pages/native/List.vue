<template>
  <q-btn color="primary" label="home" @click="back" />
  <q-page class="flex flex-center">
    <div>
      <div v-for="item in state.list" :key="item.id">
        <q-btn @click="selectMenu(item);"
               style="background: #FF0080; margin-bottom: 10px; color: white" :label="item.title"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'NativeList',
  setup() {
    console.log('setup');
    const { proxy } = getCurrentInstance();
    const state = reactive({
      list: [
        {id: 0, title: 'device', name: 'NativeDevice',},
        {id: 1, title: 'geolocation', name: 'NativeGeolocation',},
        {id: 2, title: 'camera', name: 'NativeCamera',},
        {id: 3, title: 'album', name: 'NativeAlbum',},
        {id: 4, title: 'push', name: 'NativePush',},

      ],
    })

    const selectMenu = ({ id, title, name }) => {
      console.log('name =>', JSON.stringify(name, undefined, 2));
      proxy.$router.push({ name });
    }

    return {
      state,
      selectMenu
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
})
</script>
