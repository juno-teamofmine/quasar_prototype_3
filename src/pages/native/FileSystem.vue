<template>
  <div>
    <q-btn color="primary" label="home" @click="back" />
  </div>

  <q-file filled v-model="fileModel" label="Label (stacked)" stack-label />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      fileModel: ref(null)
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>
