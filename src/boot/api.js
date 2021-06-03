import { boot } from 'quasar/wrappers'
import { CoinApi } from './apis/CoinApi';

export default boot(({ app }) => {
  app.config.globalProperties.$CoinApi = CoinApi
})
