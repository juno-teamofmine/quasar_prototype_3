<template>
  <q-btn color="primary" label="back" @click="back" />
  <q-card class="my-card">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        basic
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Title
        </div>
      </q-img>
    </q-card>

  <div>
    <q-btn color="primary" label="Get Picture" @click="captureImage" />

    <img :src="imageSrc">
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Plugins, CameraResultType } from '@capacitor/core'

export default defineComponent({
  name: 'NativeCamera',
  setup() {

  },
  methods: {
    back() {
      this.$router.back();
    }
  }
})
</script>
