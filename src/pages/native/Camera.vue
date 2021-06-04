<template>
  <q-btn color="primary" label="back" @click="back" />
  <q-card class="my-card">
      <q-img
        :src="imageSrc"
        basic
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          Title
        </div>
      </q-img>
  </q-card>
  <q-btn color="primary" label="Get Picture" @click="getPhoto" />
  <q-btn color="primary" label="checkPermissions" @click="checkPermissions" />
  <q-btn color="primary" label="requestPermissions" @click="requestPermissions" />
</template>

<script>
import { defineComponent } from 'vue';

import { Camera, CameraResultType } from '@capacitor/camera';

export default defineComponent({
  name: 'NativeCamera',
  setup() {

  },
  data() {
    return {
      imageSrc: '',
    };
  },
  methods: {
    available(methodName) {
      return (
        Camera && Camera.hasOwnProperty(methodName)
      );
    },

    async checkPermissions() {
      if (this.available('checkPermissions')) {
        console.log('console.log(checkPermissions);');
        const permissions = await Camera.checkPermissions();
        console.log(permissions);
      }
    },

    async requestPermissions() {
      if (this.available('requestPermissions')) {
        console.log('console.log(requestPermissions);');
        const permissions = await Camera.requestPermissions();
        console.log(permissions);
      }
    },

    async getPhoto () {
      if (this.available('getPhoto')) {
        console.log('console.log(getPhoto);');
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
        })
        // The result will vary on the value of the resultType option.
        // CameraResultType.Uri - Get the result from image.webPath
        // CameraResultType.Base64 - Get the result from image.base64String
        // CameraResultType.DataUrl - Get the result from image.dataUrl
        this.imageSrc = image.webPath
      }
    },

    back() {
      this.$router.back();
    }
  },
})
</script>
