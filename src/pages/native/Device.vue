<template>
  <div>
    <q-btn color="primary" label="home" @click="back" />
    <q-page class="flex flex-center">
      <div>IMEI: {{ imei }}</div>
    </q-page>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const imei = ref(
      window.device === void 0
        ? 'Run this on a mobile/tablet device'
        : window.device
    )

    return {
      imei
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>
