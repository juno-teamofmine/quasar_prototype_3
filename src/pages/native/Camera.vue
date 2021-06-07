<template>
  <div>
    <q-btn color="primary" label="home" @click="back" />
    <q-btn color="primary" label="Get Picture Camera" @click="captureImage('camera');" />
    <q-btn color="primary" label="Get Picture Album" @click="captureImage('album');" />
  </div>

  <q-card class="my-card">
    <q-img :src="imageSrc">
      <div class="absolute-bottom text-subtitle2 text-center">
        Title
      </div>
    </q-img>
  </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const imageSrc = ref('')

    function captureImage (type) {
      navigator.camera.getPicture(
        data => { // on success
          console.log('cameraSuccess');
          console.log(data);
          imageSrc.value = `data:image/jpeg;base64,${data}`
        },
        () => { // on fail
          console.log('cameraError');
        },
        {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: type === "camera" ? Camera.PictureSourceType.CAMERA : Camera.PictureSourceType.PHOTOLIBRARY,
         }
      )
    }

    return {
      imageSrc,
      captureImage
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>
