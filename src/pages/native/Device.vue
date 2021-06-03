<template>
  <q-btn color="primary" label="back" @click="back" />
  <div>
    <div></div>
    <div>info: {{ info }}</div>
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
      info: 'Please wait...'
    }
  },
  mounted () {
    Device.getInfo().then(info => {
      this.info = info;
    })
  }
})
</script>
