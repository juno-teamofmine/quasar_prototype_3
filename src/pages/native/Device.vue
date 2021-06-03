<template>
  <q-btn color="primary" label="back" @click="back" />
  <div>
    <div></div>
    <div>uuid: {{ uuid }}</div>
    <div>info: {{ info }}</div>
    <div>battery: {{ battery }}</div>
    <div>GetLanguageCodeResult: {{ GetLanguageCodeResult }}</div>
  </div>
</template>

<script>
import { Device } from '@capacitor/device'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NativeCamera',
  setup() {

  },
  data () {
    return {
      uuid: 'Please wait...',
      info: 'Please wait...',
      battery: 'Please wait...',
      GetLanguageCodeResult: 'Please wait...',
    }
  },
  methods: {
    available(methodName) {
      return (
        Device && Device.hasOwnProperty(methodName)
      );
    },
    getId() {
      if(this.available('getId')) {
        Device.getId().then(uuid => {
          console.log(uuid);
          this.uuid = uuid;
        })
      }
    },
    getInfo() {
      if (this.available('getInfo')) {
        Device.getInfo().then(info => {
          console.log("console.log(info);");
          console.log(info);
          this.info = info;
        })
      }
    },
    getBatteryInfo() {
      if(this.available('getBatteryInfo')) {
        Device.getBatteryInfo().then(battery => {
          console.log(battery);
          this.battery = battery;
        })
      }
    },
    getLanguageCode() {
      if(this.available('getLanguageCode')) {
        Device.getLanguageCode().then(GetLanguageCodeResult => {
          console.log(GetLanguageCodeResult);
          this.GetLanguageCodeResult = GetLanguageCodeResult;
        })
      }
    },

    back() {
      this.$router.back();
    },
  },
  mounted () {
    console.log('mounted');
    this.getId();
    this.getInfo();
    this.getBatteryInfo();
    this.getLanguageCode();
  },
})
</script>
