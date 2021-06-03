import axios from 'axios';

// 요청
axios.interceptors.request.use(
  config => {
    console.log('WHEN REQUEST BEFORE');
    return config;
  },
  error => {
    console.log('WHEN ERROR REQUEST BEFORE');
    return Promise.reject(error);
  }
);

// 응답
axios.interceptors.response.use(
  response => {
    console.log('WHEN RESPONSE AFTER');
    return response;
  },
  error => {
    console.log('WHEN ERROR RESPONSE AFTER')
    return Promise.reject(error);
  }
);

export const CoinApi = {
  getList: () => {
    return axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      {}
    );
  },
  getDetail : (id) => {
    return axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`,
      {}
    );
  },
}
