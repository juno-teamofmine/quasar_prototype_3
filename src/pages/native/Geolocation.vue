<template>
  <q-btn color="primary" label="back" @click="back" />
  <div>
    GPS position: <strong>{{ position }}</strong>
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core'
import {beforeUnmount, defineComponent} from 'vue';

const { Geolocation } = Plugins

export default defineComponent({
  name: 'NativeGeolocation',
  data () {
    return {
      position: 'determining...'
    }
  },
  methods: {
    getCurrentPosition() {
      console.log('console.log(Geolocation);');
      console.log(Geolocation);
      if (Geolocation) {
        Geolocation.getCurrentPosition().then(position => {
          console.log('Current', position);
          this.position = position
        });
      }
    },

    back() {
      this.$router.back();
    }
  },
  mounted () {
    this.getCurrentPosition()

    // we start listening
    if (Geolocation) {
    this.geoId = Geolocation.watchPosition({}, (position, err) => {
      console.log('New GPS position')
      this.position = position
    })
    }
  },

  // TODO: lifeCycle 종료 시점으로 변경해야함
  beforeUnmount () {
    // we do cleanup
    if (Geolocation) {
      Geolocation.clearWatch(this.geoId)
    }

  }
})
</script>
