<template>
  <q-btn color="primary" label="back" @click="back" />
  <div>
    <div></div>
    <div>Model: {{ model }}</div>
    <div>Manufacturer: {{ manufacturer }}</div>
  </div>
</template>

<script>
import { Device } from '@capacitor/device'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NativeCamera',
  setup() {

  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  data () {
    return {
      model: 'Please wait...',
      manufacturer: 'Please wait...'
    }
  },
  mounted () {
    Device.getInfo().then(info => {
      this.model = info.model
      this.manufacturer = info.manufacturer
    })
  }
})
</script>
