<template>
  <div>
    <q-btn color="primary" label="home" @click="back" />
    <q-btn color="primary" label="getPosition" @click="getPosition" />
  </div>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Geolocation</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Timestamp</th>
            <th class="text-right">Latitude</th>
            <th class="text-right">Longitude</th>
            <th class="text-right">Altitude</th>
            <th class="text-right">Accuracy</th>
            <th class="text-right">AltitudeAccuracy</th>
            <th class="text-right">Heading</th>
            <th class="text-right">Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="position in state.list" :key="position.timestamp">
            <td class="text-left">{{ position.timestamp }}</td>
            <td class="text-right">{{ position.latitude }}</td>
            <td class="text-right">{{ position.longitude }}</td>
            <td class="text-right">{{ position.altitude }}</td>
            <td class="text-right">{{ position.accuracy }}</td>
            <td class="text-right">{{ position.altitudeAccuracy }}</td>
            <td class="text-right">{{ position.heading }}</td>
            <td class="text-right">{{ position.speed }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'

export default {
  setup () {
    const state = reactive({
      list: [],
    })

    const getPosition = async () => {
      console.log('getPosition');
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log('position');
          console.log(position);
          const newPosition = {
            "timestamp": position.timestamp,
            "latitude": position.coords.latitude,
            "longitude": position.coords.longitude,
            "altitude": position.coords.altitude,
            "accuracy": position.coords.accuracy,
            "altitudeAccuracy": position.coords.altitudeAccuracy,
            "heading": position.coords.heading,
            "speed": position.coords.speed,
          };
          state.list.push(newPosition);
        },
        err => {
          console.log('err');
          console.log(position);
        }
      );
    }

    return {
      getPosition,
      state
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>
